import { AppDataSource } from "../data-source";
import { CustomAppError } from "../utils/custom-app-error";
import { ErrorCodes } from "../utils/error-codes";
import { Users } from "../database/models/EntityUsers";

const MAX_ATTEMPTS = 5;
const BLOCK_DURATION_MS = 5 * 60 * 1000;

const redisClient = {
    async get(key: string): Promise<string | null> { return null; },
    async set(key: string, value: string, mode?: string, duration?: number): Promise<void> { },
    async del(key: string): Promise<void> { },
    async incr(key: string): Promise<number> { return 0; },
    async pttl(key: string): Promise<number> { return -1; }
};

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const RateLimiter = {
    async getKey(clientIp: string, username: string) {
        return `failedAttempts:${clientIp}:${username}`;
    },
    async check(clientIp: string, username: string) {
        const key = await this.getKey(clientIp, username);
        const attemptsStr = await redisClient.get(key);
        const attempts = attemptsStr ? parseInt(attemptsStr, 10) : 0;
        if (attempts >= MAX_ATTEMPTS) {
            const ttl = await redisClient.pttl(key);
            if (ttl > 0) throw new CustomAppError('System has identified too many failed attempts.', 429, ErrorCodes.RATE_LIMIT_EXCEEDED.code, 'rate_limited', ErrorCodes.RATE_LIMIT_EXCEEDED.label);
        }
    },
    async increment(clientIp: string, username: string) {
        const key = await this.getKey(clientIp, username);
        const attempts = await redisClient.incr(key);
        if (attempts === 1) await redisClient.set(key, attempts.toString(), 'PX', BLOCK_DURATION_MS);
    },
    async clear(clientIp: string, username: string) {
        const key = await this.getKey(clientIp, username);
        await redisClient.del(key);
    }
};

export const UserStatusChecker = {
    validate(user: any) {
        if (user.is_deleted === true) throw new CustomAppError('Account has been deleted.', 404, ErrorCodes.ACCOUNT_DELETED.code, 'account_deleted', ErrorCodes.ACCOUNT_DELETED.label);
        if (!['Active', 'Approved'].includes(user.status)) this.throwStatusError(user.status);
    },
    throwStatusError(status: string): never {
        const errorMap: Record<string, CustomAppError> = {
            Declined: new CustomAppError('Your account has been declined.', 403, ErrorCodes.ACCOUNT_DECLINED.code, 'account_declined', ErrorCodes.ACCOUNT_DECLINED.label),
            Suspended: new CustomAppError('Your account has been suspended.', 403, ErrorCodes.ACCOUNT_SUSPENDED.code, 'account_suspended', ErrorCodes.ACCOUNT_SUSPENDED.label),
            InActive: new CustomAppError('Your account is not active.', 403, ErrorCodes.ACCOUNT_INACTIVE.code, 'account_inactive', ErrorCodes.ACCOUNT_INACTIVE.label)
        };
        if (errorMap[status]) throw errorMap[status];
        throw new CustomAppError('Invalid account status.', 403, ErrorCodes.INVALID_STATUS.code, 'invalid_status', ErrorCodes.INVALID_STATUS.label);
    }
};

export const formatUserResponse = (user: any) => {
    const formatImage = (value: any) => {
        if (value === null || (Array.isArray(value) && value[0] === null)) {
            return null;
        }
        return `${process.env.BASE_URL}/${value}`.replace(/([^:]\/)\/+/g, '$1');
    };

    const userData: any = {
        ...user,
        role_id: user.role?.title,
        school_id: user.institution?.id,
        school_name: user.institution?.school_name,
        school_aliase: user.institution?.school_aliase,
        school_type: user.institution?.school_type?.title,
        image: user.image ? formatImage(user.image) : null,
        cover_image: user.cover_image ? formatImage(user.cover_image) : null,
        logo: user.institution?.logo ? formatImage(user.institution.logo) : null
    };

    // Remove unwanted keys
    delete userData.password;
    delete userData.two_factor_pin;
    delete userData.created_at;
    delete userData.role;
    delete userData.institution;

    // 🧹 Clean undefined values
    const cleanedUserData = Object.fromEntries(
        Object.entries(userData).filter(([_, value]) => value !== undefined)
    );

    // console.log('User fetched by email:', cleanedUserData);

    return cleanedUserData;
};




export async function findUserByUsernameWithPassword(username: string) {
    const trimmedUsername = username.trim().toLowerCase();

    const user = await AppDataSource.getRepository(Users)
        .createQueryBuilder('user')
        .addSelect('user.password')
        .addSelect('user.token')
        .leftJoinAndSelect('user.role', 'role')
        .leftJoinAndSelect('user.institution', 'institution')
        .leftJoinAndSelect('institution.school_type', 'school_type')
        .where('LOWER(user.username) = :username', { username: trimmedUsername })
        .getOne();

    return user;
}


