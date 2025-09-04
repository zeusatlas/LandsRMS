// src/services/authentication.service.ts

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import { AppDataSource } from '../data-source';
import { CustomAppError } from '../utils/custom-app-error';
import { ErrorCodes } from '../utils/error-codes';
import { Users } from '../database/models/EntityUsers';
import { Sessions } from '../database/models/Sessions';
import { delay, findUserByUsernameWithPassword, formatUserResponse, RateLimiter, UserStatusChecker } from '../helper/authUtils';
import { encodeToken } from '../utils/token-crypto';
import { WhiteToken } from '../database/models/WhiteToken';
import crypto from 'crypto';
import { validateUploadDocs } from 'src/validators/uploadDocs.validator';
import path from 'path';
import { promises as fs } from 'fs';
import { saveBase64Image } from 'src/utils/imageSaver';
import { sendSMS } from '../utils/sms/smsProvider';
import { sendAccountEmailEmail } from '../utils/email/auth-email';
import { PasswordResetTokens } from 'src/database/models/EntityPasswordResetTokens';
import { VerificationTokens } from 'src/database/models/EntityVerificationTokens';
import { AdmissionBasics } from 'src/database/models/EntityAdmissionBasics';
import { AdmissionSecondaries } from 'src/database/models/EntityAdmissionSecondaries';



export const generate2FAToken = (): string => {
    return String(Math.floor(100000 + Math.random() * 900000));
};

type TwoFAPendingResult = {
    status: '2FA_PENDING';
    user: {
        id: number;
        email: string;
        two_factor_required: true;
    };
};

type IncompleteProfileResult = {
    status: 'INCOMPLETE_PROFILE';
    user: {
        id: number;
        email: string;
        image: string | null;
        nickname: string | null;
        cover_image: string | null;
        email_verified_at: string | null;
        is_first_time: boolean | number;
    };
};


type LoginSuccessResult = {
    user: any;
    token: string;
    refresh_token: string;
    expires_in: number;
    sv_key: string;
    sv_label: string;
};

type LoginResult = IncompleteProfileResult | TwoFAPendingResult | LoginSuccessResult;



class AuthenticationService {

    // Upload cover image and image
    async uploadDocs(data: any) {
        const { email, image, cover_image } = validateUploadDocs(data);

        const userRepo = AppDataSource.getRepository(Users);
        const user = await userRepo.findOne({ where: { email }, relations: ['institution'], });

        if (!user) {
            throw new CustomAppError('User not found', 404, ErrorCodes.RECORD_NOT_FOUND.code, 'not_found', ErrorCodes.RECORD_NOT_FOUND.label);
        }

        const year = new Date().getFullYear();
        const institutionId = user.institution?.id;

        const uploadDir = path.join(process.cwd(), 'media', 'users', String(year), String(institutionId));

        try {
            await fs.access(uploadDir);
        } catch {
            await fs.mkdir(uploadDir, { recursive: true });
        }

        // Save profile image
        const profilePath = await saveBase64Image(image, `${user.id}_profile`, uploadDir);
        user.image = `media/users/${year}/${institutionId}/${path.basename(profilePath)}`;

        // Save cover image
        const coverPath = await saveBase64Image(cover_image, `${user.id}_cover`, uploadDir);
        user.cover_image = `media/users/${year}/${institutionId}/${path.basename(coverPath)}`;

        await userRepo.save(user);

        return { image: user.image, cover_image: user.cover_image, };
    }

    // Reset Nickname
    async resetNickname(email: string, nickname: string) {
        if (!email) throw new CustomAppError('Valid email is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);
        if (!nickname) throw new CustomAppError('Valid nickname is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

        const userRepo = AppDataSource.getRepository(Users);

        // ✅ Check if nickname already exists (used by another user)
        const existing = await userRepo.findOne({ where: { nickname } });
        if (existing && existing.email !== email) {
            throw new CustomAppError('Nickname already in use', 400, ErrorCodes.DUPLICATE_RESOURCE.code, 'duplicate_entry', ErrorCodes.DUPLICATE_RESOURCE.label);
        }

        const user = await userRepo.findOne({ where: { email } });
        if (!user) {
            throw new CustomAppError('User not found', 404, ErrorCodes.RECORD_NOT_FOUND.code, 'not_found', ErrorCodes.RECORD_NOT_FOUND.label);
        }

        user.nickname = nickname;
        await userRepo.save(user);

        return { nickname: user.nickname };
    }

    // Enable two factor
    async enableTwoFactorAuth(email: string, fear: string) {
        if (!email) throw new CustomAppError('Valid email is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);
        if (!fear || fear.length < 10) throw new CustomAppError('Security question is required and must be more than 10 characters', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

        const userRepo = AppDataSource.getRepository(Users);
        const user = await userRepo.findOne({ where: { email } });
        if (!user) throw new CustomAppError('User not found', 404, ErrorCodes.RECORD_NOT_FOUND.code, 'not_found', ErrorCodes.RECORD_NOT_FOUND.label);

        const token = generate2FAToken();
        user.two_factor_enabled = true; user.two_factor_pin = token; user.fear = fear;
        await userRepo.save(user);

        const maskedPhone = user.phone ? `${user.phone.slice(0, 3)}******${user.phone.slice(-2)}` : 'Unknown';
        const smsMessage = `Dear ${user.name}, your 2FA Code is : ${token}, also sent to your email. Thank you`;

        const emailHTML = `
      <p><strong>Dear ${user.name},</strong></p>
      <p>We received a request to enable two-factor authentication. Use the code below to proceed:</p>
      <h2 style="color:#e10a0a; text-align:center;">${token}</h2>
      <p><strong>Note:</strong> This code is valid until you reset 2FA. If you didn’t request this, disable 2FA immediately.</p>
    `;

        await sendAccountEmailEmail({ action: 'Two-Factor Authentication Enabled', message: emailHTML, code: token, to: email });

        const smsResult = await sendSMS(user.phone, smsMessage);
        if (!smsResult.success || smsResult.deliveryStatus !== 'DELIVERED') throw new CustomAppError('2FA SMS not delivered. Please try again later.', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sms_not_delivered', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);

        return { twoFactorEnabled: true, maskedPhone };
    }

    // Reset Password
    async resetPassword(email: string, url: URL) {
        if (!email) throw new CustomAppError('Email is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

        const userRepo = AppDataSource.getRepository(Users);
        const resetTokenRepo = AppDataSource.getRepository(PasswordResetTokens);
        const verificationTokenRepo = AppDataSource.getRepository(VerificationTokens);

        const user = await userRepo.findOne({ where: { email } });
        if (!user) throw new CustomAppError('User not found', 404, ErrorCodes.RECORD_NOT_FOUND.code, 'not_found', ErrorCodes.RECORD_NOT_FOUND.label);

        const gen_token = generate2FAToken();
        const token = "SVF-" + gen_token;
        const now = new Date();
        const expiresAt = new Date(now.getTime() + 10 * 60 * 1000);

        // Save to PasswordResetTokens
        const resetEntry = resetTokenRepo.create({ email, token, created_at: now });
        await resetTokenRepo.save(resetEntry);

        // Save to VerificationTokens
        const verificationEntry = verificationTokenRepo.create({ user, token, reasons: 'Password_Reset', expire_at: expiresAt, });
        await verificationTokenRepo.save(verificationEntry);

        const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 15px;">
        <p>Hello <strong>${user.name}</strong>,</p>
        <p>We received a request to reset your password. Please use the code below or click the button to proceed. This token will expire in <strong style="color: #e10a0a;">10 minutes</strong>.</p>
        <div style="text-align: center; margin: 30px 0;"><h1 style="color: #e10a0a; font-size: 28px; letter-spacing: 2px;">${token}</h1></div>
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="${url}" style="background-color: #007bff; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: bold;">Reset Password</a>
          <p>You can as well copy and paste this in your browser manually or follow this link below: </p>
          <a href="${url}" >${url}</a>
        </div>
        <p>If you did not request a password reset, you can safely ignore this email. No changes will be made.</p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #777;">This token is valid for <strong>10 minutes</strong>. If it expires, please request a new one.</p>
      </div>
    `;

        await sendAccountEmailEmail({ action: 'Password Reset Request', message: emailHTML, to: email });

        return { email, message: 'Reset instructions sent to email' };
    }

    // Verify TOken
    async verifyToken(email: string, code: string) {
        if (!email)
            throw new CustomAppError('Email is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

        const userRepo = AppDataSource.getRepository(Users);
        const resetTokenRepo = AppDataSource.getRepository(PasswordResetTokens);
        const verificationTokenRepo = AppDataSource.getRepository(VerificationTokens);

        const user = await userRepo.findOne({ where: { email } });
        if (!user)
            throw new CustomAppError('User not found', 404, ErrorCodes.RECORD_NOT_FOUND.code, 'not_found', ErrorCodes.RECORD_NOT_FOUND.label);

        // Check if token exists
        const tokenEntry = await verificationTokenRepo.findOne({
            where: { user: { id: user.id }, token: code, reasons: 'Password_Reset', is_deleted: false }
        });
        const resetEntry = await resetTokenRepo.findOne({
            where: { token: code, email: email }
        });

        if (!resetEntry)
            throw new CustomAppError('Invalid or expired token', 400, ErrorCodes.INVALID_TOKEN.code, 'invalid_credentials', ErrorCodes.INVALID_TOKEN.label);

        if (!tokenEntry)
            throw new CustomAppError('Invalid or expired token', 400, ErrorCodes.INVALID_TOKEN.code, 'invalid_token', ErrorCodes.INVALID_TOKEN.label);

        const now = new Date();

        // Check if token has expired
        if (tokenEntry.expire_at && tokenEntry.expire_at < now)
            throw new CustomAppError('Token has expired, you can request for new one', 410, ErrorCodes.TOKEN_EXPIRED.code, 'expired_token', ErrorCodes.TOKEN_EXPIRED.label);

        // Check if token is already used
        if (tokenEntry.status === 'USED')
            throw new CustomAppError('Token has already been used already and cannot be used again', 400, ErrorCodes.ALREADY_USED.code, 'token_used', ErrorCodes.ALREADY_USED.label);

        // Mark token as used
        tokenEntry.status = 'VERIFIED';
        await verificationTokenRepo.save(tokenEntry);

        return { email, message: 'Token verified successfully' };
    }

    // Change password
    async changePassword(email: string, code: string, password: string) {
        if (!email)
            throw new CustomAppError('Email is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

        const userRepo = AppDataSource.getRepository(Users);
        const resetTokenRepo = AppDataSource.getRepository(PasswordResetTokens);
        const verificationTokenRepo = AppDataSource.getRepository(VerificationTokens);

        const user = await userRepo.findOne({ where: { email } });
        if (!user)
            throw new CustomAppError('User not found', 404, ErrorCodes.RECORD_NOT_FOUND.code, 'not_found', ErrorCodes.RECORD_NOT_FOUND.label);

        const tokenEntry = await verificationTokenRepo.findOne({
            where: { user: { id: user.id }, token: code, reasons: 'Password_Reset', is_deleted: false }
        });
        const resetEntry = await resetTokenRepo.findOne({ where: { token: code, email } });

        if (!resetEntry || !tokenEntry)
            throw new CustomAppError('Invalid or expired token', 400, ErrorCodes.INVALID_TOKEN.code, 'invalid_token', ErrorCodes.INVALID_TOKEN.label);

        if (tokenEntry.status !== 'VERIFIED')
            throw new CustomAppError('Token is not verified.', 400, ErrorCodes.INVALID_TOKEN.code, 'token_not_verified', ErrorCodes.INVALID_TOKEN.label);

        if (tokenEntry.expire_at && tokenEntry.expire_at < new Date())
            throw new CustomAppError('Token has expired. Please request a new one.', 410, ErrorCodes.TOKEN_EXPIRED.code, 'expired_token', ErrorCodes.TOKEN_EXPIRED.label);

        user.password = await bcrypt.hash(password, 10);
        user.is_first_time = false;
        user.email_verified_at = new Date();
        await userRepo.save(user);

        tokenEntry.status = 'USED';
        await verificationTokenRepo.save(tokenEntry);

        return { email, message: 'Password has been changed successfully' };
    }

    // Verify 2FA
    async verify2fa(email: string, code: string, clientIp: string, userAgent: string) {
        if (!email || !code) {
            throw new CustomAppError('Email or code is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);
        }

        await RateLimiter.check(clientIp, `2fa:${email}`);
        const trimmedEmail = email.trim().toLowerCase();
        const userRepo = AppDataSource.getRepository(Users);
        const user = await userRepo.createQueryBuilder("user").addSelect("user.two_factor_pin").leftJoinAndSelect('user.role', 'role')
            .leftJoinAndSelect('user.institution', 'institution').where("LOWER(user.email) = :email AND LOWER(user.username) = :email", { email: trimmedEmail })
            .getOne();

        if (!user || !user.two_factor_enabled || !user.two_factor_pin) {
            await RateLimiter.increment(clientIp, `2fa:${email}`);
            throw new CustomAppError('Invalid 2FA attempt', 400, ErrorCodes.RATE_LIMIT_EXCEEDED.code, 'rate_limited', ErrorCodes.RATE_LIMIT_EXCEEDED.label);
        }

        if (user.two_factor_pin !== code) {
            await RateLimiter.increment(clientIp, `2fa:${email}`);
            throw new CustomAppError('Invalid 2FA code', 401, ErrorCodes.INVALID_CREDENTIALS.code, 'invalid_token', ErrorCodes.INVALID_CREDENTIALS.label);
        }

        await RateLimiter.clear(clientIp, `2fa:${email}`);

        const jwtSecret = process.env.JWT_SECRET;
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
        const offWhiteSecret = process.env.OFF_WHITE_SECRET;

        if (!jwtSecret || !refreshTokenSecret || !offWhiteSecret) {
            throw new Error('Required environment variables are missing');
        }

        const jwtExpiresIn = parseInt(process.env.JWT_EXPIRES_IN || '3600', 10);
        const refreshTokenExpiresIn = parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN || '86400', 10);

        return await this.finishLogin(user, clientIp, userAgent, jwtSecret, refreshTokenSecret, jwtExpiresIn, refreshTokenExpiresIn, offWhiteSecret);

    }

    // Login function
    async login(username: string, password: string, clientIp: string, userAgent: string): Promise<LoginResult> {

        const jwtSecret = process.env.JWT_SECRET;
        const jwtExpiresIn = parseInt(process.env.JWT_EXPIRES_IN || '3600', 10);
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
        const refreshTokenExpiresIn = parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN || '86400', 10);
        const offWhiteSecret = process.env.OFF_WHITE_SECRET;

        if (!jwtSecret || !refreshTokenSecret || !offWhiteSecret) {
            throw new Error('Secrets are not configured properly.');
        }

        await RateLimiter.check(clientIp, username);
        const user = await findUserByUsernameWithPassword(username);

        const dummyHash = '$2b$10$ABCDEFGHIJKLMNOPQRSTUuvuvuvuvuvuvuvuvuvuvuvuvuvuvuvuvuv';
        const passwordHash = user?.password || dummyHash;
        const isPasswordValid = await bcrypt.compare(password, passwordHash);

        if (!user || !isPasswordValid) {
            await RateLimiter.increment(clientIp, username);
            await delay(200);
            throw new CustomAppError('Sorry, the username or password you entered is incorrect', 401, ErrorCodes.INVALID_CREDENTIALS.code, 'invalid_credentials', ErrorCodes.INVALID_CREDENTIALS.label);
        }

        await RateLimiter.clear(clientIp, username);
        UserStatusChecker.validate(user);

        // Check for incomplete profile data
        const requiredFields = [user.image, user.nickname, user.cover_image, user.email_verified_at];
        const isFirstTime = user.is_first_time === true;

        if (requiredFields.some(field => field == null) || isFirstTime) {
            return {
                user: {
                    id: user.id,
                    email: user.email,
                    image: user.image,
                    nickname: user.nickname,
                    cover_image: user.cover_image,
                    email_verified_at: user.email_verified_at?.toISOString() || null,
                    is_first_time: user.is_first_time,
                },
                status: 'INCOMPLETE_PROFILE'
            };
        }

        // CHECK IF 2FA IS ENABLED
        if (user.two_factor_enabled) {
            return { user: { id: user.id, email: user.email, two_factor_required: true }, status: '2FA_PENDING' };
        }

        return await this.finishLogin(user, clientIp, userAgent, jwtSecret, refreshTokenSecret, jwtExpiresIn, refreshTokenExpiresIn, offWhiteSecret);
    }

    // TODO: Private function that sit between actual first login and 2fa
    private async finishLogin(user: Users, clientIp: string, userAgent: string, jwtSecret: string, refreshTokenSecret: string, jwtExpiresIn: number, refreshTokenExpiresIn: number, offWhiteSecret: string) {
        const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: jwtExpiresIn });
        const refreshToken = jwt.sign({ id: user.id, email: user.email }, refreshTokenSecret, { expiresIn: refreshTokenExpiresIn });
        const payload = JSON.stringify({ token, refresh_token: refreshToken, expires_in: jwtExpiresIn, device: userAgent, ip: clientIp });

        await AppDataSource.getRepository(Sessions).insert({
            user: { id: user.id },
            date: moment.utc().format('YYYY-MM-DD'),
            time_in: moment.utc().format('HH:mm:ss'),
            ip_address: clientIp,
            user_agent: userAgent,
            token,
            refresh_token: refreshToken,
            payload,
            last_activity: moment().unix()
        });

        const pin = crypto.randomBytes(34).toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(0, 45);
        const label = `${user.id}|${pin}`;
        const encryptedToken = encodeToken(token, label, offWhiteSecret);
        const expiresAt = moment().add(jwtExpiresIn, 'seconds').toDate();

        await AppDataSource.getRepository(WhiteToken).insert({ user, token, pin, expires_at: expiresAt, ip_address: clientIp });
        const userData = formatUserResponse(user);
        return { user: { ...userData }, token, refresh_token: refreshToken, expires_in: jwtExpiresIn, sv_key: encryptedToken, sv_label: label };

    }

    // Function to logout the user
    async logout(userId: number, token: string) {
        const sessionRepo = AppDataSource.getRepository(Sessions);
        const whiteTokenRepo = AppDataSource.getRepository(WhiteToken);

        const now = new Date();

        // 1. Revoke the session
        await sessionRepo.update(
            { user: { id: userId }, token },
            {
                revoked: true,
                revoked_at: now,
                revoked_by: userId,
                is_active: false,
                time_out: moment.utc().format('HH:mm:ss'),
            }
        );

        // 2. Revoke the white-listed token
        await whiteTokenRepo.update({ token, user: { id: userId } }, { is_revoked: true, updated_at: now, });
        return { message: 'Logout successful' };
    }

    // FUNCTION TO REFRESH TOKEN
    async refreshToken(refreshToken: string) {
        if (!refreshToken) {
            throw new CustomAppError('Refresh token is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required');
        }

        let decoded: any;
        try {
            decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);
        } catch (err) {
            throw new CustomAppError('Invalid or expired refresh token', 401, ErrorCodes.TOKEN_EXPIRED.code, 'invalid_token');
        }

        const sessionRepo = AppDataSource.getRepository(Sessions);
        const session = await sessionRepo.findOne({
            where: { refresh_token: refreshToken, revoked: false },
            relations: ['user']
        });

        if (!session || !session.user) {
            throw new CustomAppError('Refresh session not found or revoked', 403, ErrorCodes.UNAUTHORIZED_ACCESS.code, 'unauthorized');
        }

        const user = session.user;

        const jwtSecret = process.env.JWT_SECRET!;
        const refreshSecret = process.env.REFRESH_TOKEN_SECRET!;
        const jwtExpiresIn = parseInt(process.env.JWT_EXPIRES_IN || '3600', 10);
        const refreshExpiresIn = parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN || '86400', 10);

        const newToken = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: jwtExpiresIn });
        const newRefreshToken = jwt.sign({ id: user.id, email: user.email }, refreshSecret, { expiresIn: refreshExpiresIn });

        // Rotate sessions
        await sessionRepo.update(session.id, { revoked: true, revoked_at: new Date(), time_out: moment.utc().format('HH:mm:ss'), is_active: false });
        await sessionRepo.insert({
            user: { id: user.id },
            token: newToken,
            refresh_token: newRefreshToken,
            payload: JSON.stringify({ token: newToken, refresh_token: newRefreshToken }),
            date: moment.utc().format('YYYY-MM-DD'),
            time_in: moment.utc().format('HH:mm:ss'),
            ip_address: session.ip_address,
            user_agent: session.user_agent,
            last_activity: moment().unix()
        });

        const whiteTokenRepo = AppDataSource.getRepository(WhiteToken);
        await whiteTokenRepo.update(
            { user: { id: user.id }, ip_address: session.ip_address, is_revoked: false, is_deleted: false },
            { is_revoked: true, updated_at: new Date() }
        );

        // Generate new encrypted token + pin
        const pin = crypto.randomBytes(34).toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(0, 45);
        const label = `${user.id}|${pin}`;
        const encryptedToken = encodeToken(newToken, pin, process.env.OFF_WHITE_SECRET!);
        const expiresAt = moment().add(jwtExpiresIn, 'seconds').toDate();
        await whiteTokenRepo.insert({ user, token: newToken, pin, expires_at: expiresAt, ip_address: session.ip_address });

        console.log("Token has been refreshed: ", newToken)

        return { token: newToken, refresh_token: newRefreshToken, sv_key: encryptedToken, sv_label: label, expires_in: jwtExpiresIn };

    }



    // TODO: Temporary login for students to check the admission status
    async tempLogin(applicant_id: number, password: string): Promise<{ user: any } | null> {
        const admissionBasicRepo = AppDataSource.getRepository(AdmissionBasics);
        const admissionSecondaryRepo = AppDataSource.getRepository(AdmissionSecondaries);

        let student: any = await admissionBasicRepo.createQueryBuilder('std')
            .leftJoinAndSelect('std.institution', 'inst')
            .leftJoinAndSelect('std.level_applying', 'level')
            .leftJoinAndSelect('std.programme', 'programme')
            .select(['std.id', 'std.first_name', 'std.middle_name', 'std.last_name', 'std.gender', 'std.picture_image', 'std.is_admitted', 'std.status', 'inst.school_name', 'inst.id', 'inst.logo', 'inst.school_aliase', 'level.title', 'programme.title'])
            .where('std.id = :id', { id: applicant_id })
            .andWhere('std.dob = :dob', { dob: password })
            .andWhere('std.is_deleted = false')
            .getOne();

        if (!student) {
            student = await admissionSecondaryRepo.createQueryBuilder('std')
                .leftJoinAndSelect('std.institution', 'inst')
                .leftJoinAndSelect('std.level_applying', 'level')
                .leftJoinAndSelect('std.programme', 'programme')
                .select(['std.id', 'std.first_name', 'std.middle_name', 'std.last_name', 'std.gender', 'std.picture_image', 'std.is_admitted', 'std.status', 'inst.school_name', 'inst.id', 'inst.logo', 'inst.school_aliase', 'level.title', 'programme.title'])
                .where('std.id = :id', { id: applicant_id })
                .andWhere('std.dob = :dob', { dob: password })
                .andWhere('std.is_deleted = false')
                .getOne();
        }

        if (!student) return null;

        const fullName = [student.first_name, student.middle_name, student.last_name].filter(Boolean).join(' '); const gender = String(student.gender).toLowerCase(); const title = gender === 'male' ? 'Mr' : 'Miss';

        const formatImage = (value: any) => { if (value === null || (Array.isArray(value) && value[0] === null)) { return null; } return `${process.env.BASE_URL}/${value}`.replace(/([^:]\/)\/+/g, '$1'); };

        const user = {
            applicant_id: student.id,
            name: `${title} ${fullName}`,
            picture_image: student.picture_image ? formatImage(student.picture_image) : null,
            is_admitted: student.is_admitted,
            status: student.status,
            school_id: student.institution.id,
            school_name: student.institution?.school_name ?? null,
            school_logo: student.institution?.logo ? formatImage(student.institution.logo) : null,
            school_aliase: student.institution?.school_aliase ?? null,
            level: student.level_applying?.title ?? null,
            programme: student.programme?.title ?? null
        };

        return { user };
    }







}

export default new AuthenticationService();
