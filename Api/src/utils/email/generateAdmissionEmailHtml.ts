export function generateAdmissionEmailHTML(params: {
  name: string;
  studentNumber: string;
  password: string;
  appliedDate: string;
  loginUrl: string;
  supportEmail: string;
  supportPhone: string;
  websiteUrl: string;
  schoolName: string;
}): string {
  const {
    name,
    studentNumber,
    password,
    appliedDate,
    loginUrl,
    supportEmail,
    supportPhone,
    websiteUrl,
    schoolName
  } = params;

  return `
      <div style="margin: 0 auto; background-color: #ffffff; padding: 3px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <p>Hi <strong>${name}</strong>,</p>

        <p>Congratulations on successfully submitting your application to be admitted to <strong>${schoolName}</strong>! We're excited to move forward with you on this journey.</p>

        <p>You can now log in to the admission portal to monitor your application status and receive important updates.</p>

        <h3 style="margin-top: 30px; color: #333;">🧾 Your Login Credentials</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Applicant ID:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${studentNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Password:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${password}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Application Date:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${appliedDate}</td>
          </tr>
        </table>

        <h3 style="margin-top: 30px; color: #333;">🔐 How to Check Your Admission Status</h3>
        <ol style="padding-left: 20px; margin-top: 10px;">
          <li style="margin-bottom: 10px;">Visit the admission portal: <a href="${loginUrl}" style="color: #337ab7; text-decoration: none;">${loginUrl}</a></li>
          <li style="margin-bottom: 10px;">Enter your <strong>Applicant ID</strong> and <strong>Password</strong> exactly as shown above.</li>
          <li style="margin-bottom: 10px;">Click "Login" to access your dashboard, where you can check your application status, get further instructions, and receive any updates.</li>
        </ol>

        <div style="background-color: #fff8dc; padding: 12px; margin-top: 15px; border-left: 4px solid #f0ad4e;">
          📌 <strong>Important:</strong> Keep your Applicant ID and Password safe and private. Do not share them with anyone. These credentials are unique to you.
        </div>

        <h3 style="margin-top: 30px; color: #333;">📞 What Happens Next?</h3>
        <p><strong>${schoolName}</strong> may contact you via this email address or the emergency contact number you provided during your application. Please make sure you regularly check both.</p>

        <h3 style="margin-top: 30px; color: #333;">ℹ️ Need Help?</h3>
        <p>If you need assistance with logging in, checking your admission status, or understanding the next steps, you can:</p>
        <ul style="padding-left: 20px;">
          <li>Send an email to: <strong>${supportEmail}</strong></li>
          <li>Call us: <strong>${supportPhone}</strong> (Monday–Friday, 9 AM–5 PM)</li>
          <li>Use the <strong>Live Chat</strong> feature available on our website for real-time help.</li>
        </ul>

        <p style="margin-top: 30px;">Thank you once again for choosing <strong>Skai Verison Flow</strong>. We look forward to welcoming you to <strong>${schoolName}</strong>!</p>
        <p><a href="${websiteUrl}" style="color: #337ab7; text-decoration: none;">${websiteUrl}</a></p>
  
      </div>
    `;
}
