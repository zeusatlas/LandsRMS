
// src/middlewares/global-error.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/response';
import { ErrorCodes } from '../utils/error-codes';
import { CustomAppError } from '../utils/custom-app-error';

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  // Handle known custom app errors
  if (err instanceof CustomAppError) {
    return errorResponse(
      res,
      err.message,
      err.code,
      err.errorCode,
      err.status,
      err.internalError,
      err.errorLabel // ✅ pass this too!
    );
  }

  // Example: JWT or other third-party errors
  if (err.name === 'UnauthorizedError') {
    return errorResponse(
      res,
      'Access denied',
      401,
      ErrorCodes.UNAUTHORIZED_ACCESS.code,
      'unauthorized',
      err,
      ErrorCodes.UNAUTHORIZED_ACCESS.label
    );
  }

  // Fallback
  return errorResponse(
    res,
    'Something went wrong. Please try again later.',
    500,
    ErrorCodes.GENERAL_SYSTEM_ERROR.code,
    'error',
    err,
    ErrorCodes.GENERAL_SYSTEM_ERROR.label
  );
}
