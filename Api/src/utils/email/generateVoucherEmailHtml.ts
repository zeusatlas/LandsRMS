export function generateVoucherEmailHTML(params: {
  name: string;
  serialNumber: string;
  pin: string;
  purchaseDate: string;
  admissionUrl: string;
  supportEmail: string;
  supportPhone: string;
  websiteUrl: string;
  schoolName: string;
  voucherType: string;
}): string {
  const {
    name,
    serialNumber,
    pin,
    purchaseDate,
    admissionUrl,
    supportEmail,
    supportPhone,
    websiteUrl,
    schoolName,
    voucherType
  } = params;

  return `
      <div style="margin: 0 auto; background-color: #ffffff; padding: 3px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for your recent purchase! We're pleased to confirm that your <strong>admission voucher</strong> for <strong>${schoolName}</strong> has been successfully generated. Below are the full details, including your unique <strong>Serial Number</strong> and <strong>PIN</strong> required for the online admission process.</p>
  
        <h3 style="margin-top: 30px; color: #333;">🎟️ Voucher Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Serial Number:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${serialNumber}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>PIN:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${pin}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Voucher Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${voucherType}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Purchase Date:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${purchaseDate}</td></tr>
        </table>
  
        <h3 style="margin-top: 30px; color: #333;">📋 How to Use Your Voucher for Admission</h3>
        <ol style="padding-left: 20px; margin-top: 10px;">
          <li style="margin-bottom: 10px;">Visit our online admission portal: <a href="${admissionUrl}" style="color: #337ab7; text-decoration: none;">${admissionUrl}</a></li>
          <li style="margin-bottom: 10px;">Enter your <strong>Serial Number</strong> and <strong>PIN</strong> and proceed next.</li>
          <li style="margin-bottom: 10px;">Proceed to complete and submit your admission form.</li>
        </ol>
  
        <div style="background-color: #fff8dc; padding: 12px; margin-top: 15px; border-left: 4px solid #f0ad4e;">
          📌 <strong>Important:</strong> Keep your Serial Number and PIN confidential. Each voucher can be used <strong>only once</strong> and cannot be reused or shared.
        </div>
  
        <h3 style="margin-top: 30px; color: #333;">ℹ️ Need Help?</h3>
        <p>If you need any assistance with your voucher or the admission process, feel free to contact us:</p>
        <ul style="padding-left: 20px;">
          <li><strong>Email:</strong> ${supportEmail}</li>
          <li><strong>Phone:</strong> ${supportPhone}</li>
          <li><strong>Support Hours:</strong> Monday–Friday, 9 AM–5 PM</li>
        </ul>
  
        <p style="margin-top: 30px;">Thank you for choosing <strong>Skai Verison Flow</strong>. We’re excited to be part of your academic journey!</p>
        <p><a href="${websiteUrl}" style="color: #337ab7; text-decoration: none;">${websiteUrl}</a></p>
      </div>
    `;
}
