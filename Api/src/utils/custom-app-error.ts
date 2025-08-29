
// utils/custom-app-error.ts

import { StatusType } from './response';

export class CustomAppError extends Error {
  public code: number;
  public errorCode: string;
  public errorLabel: string;
  public status: StatusType;
  public internalError?: any;

  constructor(
    message: string,
    code = 500,
    errorCode = 'E9999',
    status: StatusType = 'error',
    errorLabel = 'UNKNOWN_ERROR',
    internalError?: any
  ) {
    super(message);
    this.name = 'CustomAppError';
    this.code = code;
    this.errorCode = errorCode;
    this.status = status;
    this.errorLabel = errorLabel;
    this.internalError = internalError;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomAppError);
    }
  }
}


