// utils/throw-app-error.ts
import { CustomAppError } from './custom-app-error';
import { StatusType } from './response';

export function throwAppError(
  message: string,
  code = 500,
  errorCode = 'SVF_E9999',
  status: StatusType = 'error',
  internalError?: any
): never {
  throw new CustomAppError(message, code, errorCode, status, internalError);
}
