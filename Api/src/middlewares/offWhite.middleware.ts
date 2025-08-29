import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import { WhiteToken } from '../database/models/EntityWhiteToken';
import { CustomAppError } from '../utils/custom-app-error';
import { ErrorCodes } from '../utils/error-codes';
import { decodeToken } from '../utils/token-crypto';

export async function offWhite(req: Request, res: Response, next: NextFunction) {

  try {
    const svKey = req.headers['sv-key'];
    const rawLabel = req.headers['sv-label'];

    if (!svKey || typeof svKey !== 'string') {
      throw new CustomAppError('Missing or invalid key', 401, ErrorCodes.UNAUTHORIZED_ACCESS.code, 'unauthorized', ErrorCodes.UNAUTHORIZED_ACCESS.label);
    }

    if (!rawLabel || typeof rawLabel !== 'string') {
      throw new CustomAppError('Missing or invalid label', 400, ErrorCodes.INVALID_INPUT.code, 'validation_failed', ErrorCodes.UNAUTHORIZED_ACCESS.label);
    }

    const trimmedLabel = rawLabel.trim();
    const [userIdStr, pin] = trimmedLabel.split('|');

    if (!userIdStr || !pin) {
      throw new CustomAppError('Invalid user identity or pin or label', 400, ErrorCodes.INVALID_INPUT.code, 'validation_failed');
    }

    const userId = userIdStr.trim();
    let decryptedToken: string;
    try {
      decryptedToken = decodeToken(svKey, trimmedLabel, process.env.OFF_WHITE_SECRET as string);
    } catch (err) {
      throw new CustomAppError('Invalid or tampered token', 403, ErrorCodes.UNAUTHORIZED_ACCESS.code, 'forbidden', err);
    }


    const whiteTokenRepo = AppDataSource.getRepository(WhiteToken);
    const tokenRecord = await whiteTokenRepo.findOne({
      where: { token: decryptedToken, pin, is_revoked: false, is_deleted: false },
      relations: ['user'],
    });

    if (!tokenRecord || !tokenRecord.user || String(tokenRecord.user.id) !== String(userId)) {
      throw new CustomAppError('Token does not match or user not found', 401, ErrorCodes.UNAUTHORIZED_ACCESS.code, 'forbidden');
    }

    if (new Date() > new Date(tokenRecord.expires_at)) {
      throw new CustomAppError('Token has expired', 401, ErrorCodes.TOKEN_EXPIRED.code, 'forbidden');
    }

    await whiteTokenRepo.update(tokenRecord.id, { last_used_at: new Date() });

    return next();
  } catch (error) {
    if (!(error instanceof CustomAppError)) {
      return next(new CustomAppError('Internal server error during token validation', 500, ErrorCodes.INTERNAL_SERVER_ERROR.code, 'error', error));
    }
    return next(error);
  }
}
