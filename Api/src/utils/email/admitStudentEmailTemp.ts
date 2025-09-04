export function admitStudentEmailTemp(params: {
  name: string;
  studentNumber: string;
  password: string;
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
    loginUrl,
    supportEmail,
    supportPhone,
    websiteUrl,
    schoolName
  } = params;

  return `
      <div style="margin: 0 auto; background-color: #ffffff; padding: 3px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">

        <h2 style="text-align: center; color: #2c3e50;">Congratulations!</h2>
        <strong style="text-align: center; color: #2c3e50;">Dear ${name}!</strong>

        <p>We are excited to inform you that you have been officially admitted to <strong>${schoolName}</strong>. Welcome! You are now part of a vibrant learning community where every student is supported to grow, succeed, and become the best version of themselves.</p>

        <p>At <strong>${schoolName}</strong>, we believe every learner is unique. That’s why we focus not only on strong academics, but also on helping you build confidence, character, creativity, and curiosity. Here, your talents will be nurtured, your questions will be encouraged, and your goals will be supported every step of the way.</p>

        <p>By joining our school, you are stepping into an environment filled with exciting opportunities, in the classroom, on the field, on stage, in clubs, and beyond. Our dedicated teachers and staff are eager to guide you, challenge you, and celebrate your progress as you begin this new and exciting chapter.</p>

        <p><strong>Once again, congratulations!</strong> We can’t wait to meet you and watch you grow.</p>

        <h3>Your Login Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Student Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Applicant ID:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${studentNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Password:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${password}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Portal:</strong></td>
            <td style="padding: 8px;"><a href="${loginUrl}" style="color: #337ab7; text-decoration: none;">${loginUrl}</a></td>
          </tr>
        </table>

        <div style="background-color: #fff8dc; padding: 12px; margin-top: 15px; border-left: 4px solid #f0ad4e;">
          <strong>Important:</strong> Keep your Applicant ID and Password safe and private. Do not share them with anyone. These credentials are unique to you.
        </div>

        <h3>What You Should Do Next</h3>
        <ol style="padding-left: 20px;">
          <li>Log in to your portal using the credentials above.</li>
          <li>Download your official admission letter and student handbook.</li>
          <li>Confirm your acceptance of the admission offer.</li>
          <li>Review and complete any outstanding tasks</li>
          <li>Check the portal regularly for class updates, term information, and announcements.</li>
        </ol>

        <h3>Need Help?</h3>
        <p>If you need help logging in, completing your next steps, or understanding anything related to your admission, we're here for you:</p>
        <ul style="padding-left: 20px;">
          <li><strong>Email:</strong> <a href="mailto:${supportEmail}" style="color: #337ab7;">${supportEmail}</a></li>
          <li><strong>Phone:</strong> ${supportPhone} (Monday–Friday, 9 AM–5 PM)</li>
          <li><strong>Live Chat:</strong> Available at <a href="${websiteUrl}" style="color: #337ab7;">${websiteUrl}</a></li>
        </ul>

        <p>Thank you for choosing <strong>${schoolName}</strong>. We’re honored to be part of your educational journey and look forward to helping you achieve great things.</p>
        <p style="text-align: center; margin-top: 30px;"><strong>See you soon!</strong></p>
  
      </div>
    `;
}
