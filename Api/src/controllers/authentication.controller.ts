// src/controllers/authentication.controller.ts

import { Request, Response } from 'express';
import authService from '../services/authentication.service';
import { successResponse } from '../utils/response';
import { ErrorCodes } from '../utils/error-codes';
import { CustomAppError } from '../utils/custom-app-error';
import { isDate } from 'moment';

function isTwoFAPending(result: any): result is { status: '2FA_PENDING'; user: any } {
    return result && result.status === '2FA_PENDING';
}

function isIncompleProfile(result: any): result is { status: 'INCOMPLETE_PROFILE'; user: any } {
    return result && result.status === 'INCOMPLETE_PROFILE';
}


class AuthenticationController {

    // TODO: Function to upload docs
    async uploadDocs(req: Request, res: Response): Promise<Response> {
        await authService.uploadDocs(req.body);
        return successResponse(res, 'Documents uploaded successfully',);
    }

    // TODO: Resetting the nickname
    async resetNickname(req: Request, res: Response): Promise<Response> {
        const { email, nickname } = req.body;
        await authService.resetNickname(email, nickname);
        return successResponse(res, 'Nickname updated successfully',);
    }

    // TODO: Enabling two factor
    async enableTwoFactorAuth(req: Request, res: Response): Promise<Response> {
        const { email, fear } = req.body;
        const result = await authService.enableTwoFactorAuth(email, fear);
        return successResponse(res, `Two Factor Authentication is enabled on your account. Token has been sent to your phone '${result.maskedPhone}' and email`);
    }

    // TODO: Restting password
    async resetPassword(req: Request, res: Response): Promise<Response> {
        const { email, url } = req.body;
        await authService.resetPassword(email, url);
        return successResponse(res, `Password reset token has been sent to your email`);
    }

    // TODO: Verify token
    async verifyToken(req: Request, res: Response): Promise<Response> {
        const { email, token } = req.body;
        await authService.verifyToken(email, token);
        return successResponse(res, `Token to reset your password has been sent to your email`);
    }

    // TODO: Function to change password
    async changePassword(req: Request, res: Response): Promise<Response> {
        const { email, token, password } = req.body;
        await authService.changePassword(email, token, password);
        return successResponse(res, "Your password has been successfully updated. You can now log in.");
    }

    // TODO: Function to login
    async login(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;
        const clientIp = (req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || '').split(',')[0].trim();
        const userAgent = req.headers['user-agent'] || '';

        const result = await authService.login(username, password, clientIp.toString(), userAgent);

        if (isIncompleProfile(result)) {
            return res.status(200).json({ status: 'INCOMPLETE_PROFILE', message: 'Required to complete profile', user: result.user });
        }

        if (isTwoFAPending(result)) {
            return res.status(200).json({ status: '2FA_REQUIRED', message: 'Two-factor authentication required', user: result.user });
        }

        return successResponse(res, 'Login successful',
            {
                user: result.user,
                token: result.token,
                refresh_token: result.refresh_token,
                expires_in: result.expires_in,
                sv_key: result.sv_key,
                sv_label: result.sv_label
            });
    }

    // TODO: Function to verify 2fa token
    async verify2fa(req: Request, res: Response): Promise<Response> {
        const { email, code } = req.body;
        // const clientIp = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
        const clientIp = (req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || '').split(',')[0].trim();
        const userAgent = req.headers['user-agent'] || '';
        const result = await authService.verify2fa(email, code, clientIp.toString(), userAgent);
        return successResponse(res, 'Login successful',
            {
                user: result.user,
                token: result.token,
                refresh_token: result.refresh_token,
                expires_in: result.expires_in,
                sv_key: result.sv_key,
                sv_label: result.sv_label
            });
    }

    // TODO: Function to logout
    async logout(req: Request, res: Response): Promise<Response> {
        const { userId, token } = req.body;
        const result = await authService.logout(userId, token);
        return successResponse(res, 'Logout successfully', result);
    }

    // TODO: Function to refresh the token
    async refreshToken(req: Request, res: Response): Promise<Response> {
        const { refreshToken } = req.body;
        const result = await authService.refreshToken(refreshToken);
        // console.log("Refresh Token: ", result)
        return successResponse(res, 'Token refreshed successfully', result);
    }




    // TODO: Temporary login for students to check the admission status
    async tempLogin(req: Request, res: Response): Promise<Response> {
        const { applicant_id, password } = req.body;

        if (!applicant_id || !(Number(applicant_id))) {
            throw new CustomAppError('Password must be a valid as well as applicant id as sent to you', 400,
                ErrorCodes.INVALID_INPUT.code, 'validation_failed', ErrorCodes.INVALID_INPUT.label);
        }

        if (!password || isNaN(Date.parse(password))) {
            throw new CustomAppError('Password you must enter correct password as was sent to you', 400,
                ErrorCodes.INVALID_INPUT.code, 'validation_failed', ErrorCodes.INVALID_INPUT.label);
        }

        const result = await authService.tempLogin(applicant_id, password);
        if (!result) {
            throw new CustomAppError('Invalid applicant id or password', 401, ErrorCodes.INVALID_CREDENTIALS.code, 'unauthorized', ErrorCodes.INVALID_CREDENTIALS.label);
        }

        return successResponse(res, 'Login successful', undefined, result.user);
    }


}

export default new AuthenticationController();
