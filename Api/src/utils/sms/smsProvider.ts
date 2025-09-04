import axios from 'axios';
import { CustomAppError } from '../custom-app-error';
import { ErrorCodes } from '../error-codes';
import { AppDataSource } from '../../data-source';
import { SMSBalanceReport } from '../../database/models/EntitySMSBalanceReport';
import { Institutions } from 'src/database/models/EntityInstitutions';

interface SendSMSResponse {
  status: string;
  code: string;
  message: string;
  summary: {
    _id: string;
    type: string;
    total_sent: number;
    contacts: number;
    total_rejected: number;
    numbers_sent: string[];
    credit_used: number;
    credit_left: number;
  };
}

interface DeliveryReportResponse {
  status: string;
  report: {
    _id: number;
    recipient: string;
    message: string;
    sender: string;
    status: string;
    date_sent: string;
    campaign_id: string;
    retries: number;
  };
}

interface SendSMSResult {
  success: boolean;
  messageId: string;
  deliveryStatus: string;
  creditLeft: number;
}

export const sendSMS = async (recipient: string | string[], message: string): Promise<SendSMSResult> => {
  if (!recipient || !message) throw new CustomAppError('Recipient and message are required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

  const apiKey = process.env.MNOTIFY_API_KEY;
  const sender = process.env.MNOTIFY_SENDER;
  const baseUrl = process.env.MNOTIFY_URL;
  if (!apiKey) throw new CustomAppError('MNOTIFY_API_KEY is missing', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'api_key_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);
  if (!sender) throw new CustomAppError('MNOTIFY_SENDER is missing', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sender_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);
  if (!baseUrl) throw new CustomAppError('MNOTIFY_URL is missing', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'url_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);

  const recipients = Array.isArray(recipient) ? recipient : [recipient];
  const smsRepo = AppDataSource.getRepository(SMSBalanceReport);
  const url = `${baseUrl}?key=${apiKey}`;

  try {
    const payload = { recipient: recipients, sender, message, is_schedule: false };

    const { data } = await axios.post<SendSMSResponse>(url, payload, {
      headers: { 'Accept': 'application/json' }
    });

    const messageId = data.summary._id;
    const creditLeft = data.summary.credit_left;
    const creditUsed = data.summary.credit_used;
    const totalSent = data.summary.total_sent;

    if (!messageId) throw new CustomAppError('No message ID returned', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sms_id_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);

    const report = smsRepo.create({
      id: parseInt(messageId.replace(/\D/g, '').slice(0, 9)) || Date.now(),
      credit_used: creditUsed,
      credit_left: creditLeft,
      message_id: messageId,
      sender,
      total_sent: totalSent,
      status: 'PENDING'
    });

    await smsRepo.save(report);

    if (creditLeft < 20) await sendLowCreditAlert(creditLeft);

    const deliveryStatus = await checkDeliveryStatus(messageId, apiKey);
    await smsRepo.update({ message_id: messageId }, { status: deliveryStatus });

    if (deliveryStatus !== 'DELIVERED') throw new CustomAppError(`SMS not delivered: Status = ${deliveryStatus}`, 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sms_not_delivered', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);

    return { success: true, messageId, deliveryStatus, creditLeft };
  } catch (err: any) {
    console.error('❌ SMS sending failed:', err.response?.data || err.message || err);
    const msg = err.response?.data?.message || err.message || 'Unknown error';
    throw new CustomAppError(`SMS failed: ${msg}`, 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sms_failed', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);
  }
};

const sendLowCreditAlert = async (creditLeft: number) => {
  const alertRecipients = ['0245482029', '020001546'];
  const alertMessage = `SV Flow credit balance is low: only ${creditLeft} credits left. Please top up.`;
  const apiKey = process.env.MNOTIFY_API_KEY;
  const sender = process.env.MNOTIFY_SENDER;
  const baseUrl = process.env.MNOTIFY_URL;
  if (!baseUrl) return;

  const url = `${baseUrl}?key=${apiKey}`;

  try {
    const payload = { recipient: alertRecipients, sender, message: alertMessage, is_schedule: false };
    await axios.post(url, payload, { headers: { 'Accept': 'application/json' } });
    console.log('✅ Low credit alert sent');
  } catch (err: any) {
    console.error('❌ Failed to send low credit alert:', err.response?.data || err.message);
  }
};


const checkDeliveryStatus = async (_id: string, apiKey: string, maxAttempts = 5): Promise<string> => {
  const baseUrl = process.env.MNOTIFY_URL?.replace('/sms/quick', '') || 'https://api.mnotify.com/api';
  const url = `${baseUrl}/status/${_id}?key=${apiKey}`;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const { data } = await axios.get<DeliveryReportResponse>(url, {
        headers: { 'Accept': 'application/json' }
      });

      const report = data.report;
      const status = report?.status;

      if (status) {
        console.log(`⏳ Attempt ${attempt}: Status = ${status}`);

        if (status.toUpperCase() === 'DELIVERED') {
          console.log(`✅ Delivery confirmed on attempt ${attempt}`);
          return status;
        }
      }

      if (attempt < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 10_000));
      }
    } catch (err: any) {
      console.error(`❌ Error on attempt ${attempt}:`, err.response?.data || err.message);
    }
  }

  console.warn('🚫 Delivery status not confirmed after all retries.');
  return 'NOT DELIVERED';
};


export const sendSMSbySchool = async ( recipient: string | string[], message: string, sender?: string, institution_id?: number ): Promise<SendSMSResult> => {
  if (!recipient || !message)
    throw new CustomAppError('Recipient and message are required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

  const apiKey = process.env.MNOTIFY_API_KEY;
  const finalSender = sender || process.env.MNOTIFY_SENDER;
  const baseUrl = process.env.MNOTIFY_URL;

  if (!apiKey)
    throw new CustomAppError('MNOTIFY_API_KEY is missing', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'api_key_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);
  if (!finalSender)
    throw new CustomAppError('MNOTIFY_SENDER is missing', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sender_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);
  if (!baseUrl)
    throw new CustomAppError('MNOTIFY_URL is missing', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'url_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);

  const recipients = Array.isArray(recipient) ? recipient : [recipient];
  const smsRepo = AppDataSource.getRepository(SMSBalanceReport);
  const institutionRepo = AppDataSource.getRepository(Institutions);
  const url = `${baseUrl}?key=${apiKey}`;

  try {
    // 👉 Step 1: Get institution's credit left
    if (!institution_id) throw new CustomAppError('Institution ID is required', 400, ErrorCodes.INPUT_REQUIRED.code, 'input_required', ErrorCodes.INPUT_REQUIRED.label);

    const institution = await institutionRepo.findOneBy({ id: institution_id });
    if (!institution) throw new CustomAppError('Institution not found', 404, ErrorCodes.NOT_FOUND.code, 'not_found', ErrorCodes.NOT_FOUND.label);

    const totalCreditsNeeded = calculateSMSCredits(message, recipients.length);

    if (institution.credit_left < totalCreditsNeeded) {
      throw new CustomAppError(`Not enough credit to send message. Needed: ${totalCreditsNeeded}, Available: ${institution.credit_left}`, 400, ErrorCodes.INSUFFICIENT_CREDIT.code, 'insufficient_credit', ErrorCodes.INSUFFICIENT_CREDIT.label);
    }

    // 👉 Step 2: Send SMS
    const payload = { recipient: recipients, sender: finalSender, message, is_schedule: false };
    const { data } = await axios.post<SendSMSResponse>(url, payload, {
      headers: { 'Accept': 'application/json' }
    });

    const messageId = data.summary._id;
    const creditLeft = data.summary.credit_left;
    const creditUsed = data.summary.credit_used;
    const totalSent = data.summary.total_sent;

    if (!messageId)
      throw new CustomAppError('No message ID returned', 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sms_id_missing', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);

    // 👉 Step 3: Log SMS usage
    const report = smsRepo.create({
      id: parseInt(messageId.replace(/\D/g, '').slice(0, 9)) || Date.now(),
      credit_used: creditUsed,
      credit_left: creditLeft,
      message_id: messageId,
      sender: finalSender,
      total_sent: totalSent,
      status: 'PENDING'
    });

    await smsRepo.save(report);

    // 👉 Step 4: Update institution's credit
    institution.credit_left = institution.credit_left - totalCreditsNeeded;
    await institutionRepo.save(institution);

    if (creditLeft < 20) {
      await sendLowCreditAlert(creditLeft);
    }

    // 👉 Step 5: Check delivery status
    const deliveryStatus = await checkDeliveryStatus(messageId, apiKey);
    await smsRepo.update({ message_id: messageId }, { status: deliveryStatus });

    if (deliveryStatus !== 'DELIVERED')
      throw new CustomAppError(`SMS not delivered: Status = ${deliveryStatus}`, 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sms_not_delivered', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);

    return { success: true, messageId, deliveryStatus, creditLeft };
  } catch (err: any) {
    console.error('❌ SMS sending failed:', err.response?.data || err.message || err);
    const msg = err.response?.data?.message || err.message || 'Unknown error';
    throw new CustomAppError(`SMS failed: ${msg}`, 500, ErrorCodes.EXTERNAL_SERVICE_FAILURE.code, 'sms_failed', ErrorCodes.EXTERNAL_SERVICE_FAILURE.label);
  }
};




function isUnicode(message: string): boolean {
  // Detects if message has characters outside GSM-7
  return /[^\x00-\x7F]|[€{}[\]~^\\|]/.test(message);
}

function calculateSMSCredits(message: string, recipientCount: number): number {
  const messageLength = message.length;
  const unicode = isUnicode(message);

  let parts = 0;

  if (unicode) {
    if (messageLength <= 70) parts = 1;
    else parts = Math.ceil(messageLength / 67);
  } else {
    if (messageLength <= 150) parts = 1;
    else parts = Math.ceil(messageLength / 147);
  }

  return parts * recipientCount;
}

