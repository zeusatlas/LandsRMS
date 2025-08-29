
// utils/response.ts
export type StatusType =
  | 'success'
  | 'error'
  | 'unauthorized'
  | 'forbidden'
  | 'not_found'
  | 'created'
  | 'requested_pending'
  | 'request_suspended'
  | 'request_awaiting'
  | 'request_failed'
  | 'validation_failed'
  | 'invalid_credentials'
  | 'expired_token'
  | 'token_missing'
  | 'already_exists'
  | 'not_allowed'
  | 'rate_limited'
  | 'conflict'
  | 'bad_request'
  | 'internal_server_error'
  | 'processing'
  | 'duplicate_entry'
  | 'resource_exhausted'
  | 'maintenance_mode'
  | 'input_required'
  | 'not_implemented'
  | 'account_locked'
  | 'account_suspended'
  | 'account_inactive'
  | 'account_deleted'
  | 'invalid_status'
  | 'account_declined'
  | 'sms_failed'
  | 'sms_id_missing'
  | 'sms_api_key_missing'
  | 'sms_sender_missing'
  | 'sms_not_delivered'
  | 'api_key_missing'
  | 'sender_missing'
  | 'invalid_token'
  | 'token_used'
  | 'token_not_verified'
  | 'file_upload_error'
  | 'insufficient_credit'
  | 'url_missing';



export const successResponse = (
  res: any,
  message: string,
  data: any = undefined,
  status: StatusType = 'success',
  code = 200
) => {
  const payload: any = {
    code,
    status,
    success: true,
    message,
  };

  if (data !== undefined) {
    payload.data = data;
  }

  return res.status(code).json(payload);
};

export const errorResponse = (
  res: any,
  message = 'An error occurred',
  code = 500,
  errorCode = 'E9999',
  status: StatusType = 'error',
  internalError?: any,
  errorLabel?: string
) => {
  if (process.env.NODE_ENV !== 'production' && internalError) {
    console.error(`[${status}]`, internalError);
  }

  return res.status(code).json({
    code,
    status,
    success: false,
    message,
    errorCode,
    ...(errorLabel && { errorLabel }),
  });
};


