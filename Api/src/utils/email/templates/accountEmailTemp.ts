export function generateUserActionHTML({
  action,
  message,
  date,
  code,
  authorizerName,
  authorizerPosition,
}: {
  action: string;
  message: string;
  date: string;
  code?: string;
  authorizerName: string;
  authorizerPosition: string;
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Showvanna Email Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @media only screen and (max-width: 600px) {
        .container { width: 100% !important; padding: 10px !important; background-color: #ffffff !important; background: #ffffff !important; }
        .header-panel, .footer-content { flex-direction: column !important; text-align: center !important; }
        .header-panel img, .footer-logo img { margin: 0 auto 10px; }
        .footer-logo p { margin: 0 auto; }
      }
    </style>
  </head>
  <body style="Margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, sans-serif;">
  
    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f5f5f5">
      <tr>
        <td align="center">
          <table class="container" width="800" cellpadding="0" cellspacing="0" border="0" style="width:800px; background-color:#ffffff; padding:20px;">
  
            <tr>
              <td style="border-bottom: 5px solid #0FD46C; padding-bottom: 10px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#00639A; color:#ffffff; margin-top:10px;">
                  <tr>
                    <td style="padding:10px;" valign="middle" width="60">
                      <img src="https://www.uew.edu.gh/themes/custom/pinaman/images/logos/logo-default.png" width="50" style="display:block;">
                    </td>
                    <td style="padding:10px;">
                      <h3 style="margin:0; font-size:20px; color:#20e55e;text-transform:uppercase;">Skai Version Flow</h3>
                      <p style="margin:5px 0 0; font-size:14px; color:#ffffff !important;">
                        P.O. Box 25, Accra, Ghana<br/>
                        info@skaimount.com | info@showvanna.com<br/>
                        +233 (0) 303 938 714 | +233 (0) 303 938 714
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  
            <!-- Content -->
            <tr>
              <td style="padding-top:6px;">
                <p style="text-align:right; font-size:14px; margin:0;">${date}</p>
                <p style="font-size:15px; line-height:1.6; color:#333;">${message}</p>
  
                ${code ? `
                <p style="font-size:18px; font-weight:bold; background-color:#00639A; color:white; padding:12px; text-align:center;">${code}</p>
                ` : ''}
  
                <p style="font-size:15px; color:#333;">Authorised by,</p>
                <img src="https://cdn.prod.website-files.com/61d7de73eec437f52da6d699/62161cf7328ad280841f653f_esignature-signature.png" alt="signature" width="100" style="margin:10px 0;">
                <p style="text-transform:capitalize; font-size:14px; color:#333;">
                  <br><strong>${authorizerName}</strong><br>${authorizerPosition}
                </p>
              </td>
            </tr>
  
            <!-- Footer -->
            <tr>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                  <tr>
                    <!-- Colored Stripes -->
                    <td>
                      <table cellpadding="0" cellspacing="0" style="height:20px;">
                        <tr>
                          <td width="35" style="background-color:#00639A;"></td>
                          <td width="5" style="background-color:#0FD46C;"></td>
                          <td width="5" style="background-color:#ffffff;"></td>
                          <td width="5" style="background-color:#00639A;"></td>
                          <td width="5" style="background-color:#ffffff;"></td>
                          <td width="5" style="background-color:#0FD46C;"></td>
                          <td width="5" style="background-color:#00639A;"></td>
                          <td width="5" style="background-color:#ffffff;"></td>
                          <td width="5" style="background-color:#0FD46C;"></td>
                          <td width="5" style="background-color:#00639A;"></td>
                          <td width="5" style="background-color:#ffffff;"></td>
                          <td width="5" style="background-color:#0FD46C;"></td>
                        </tr>
                      </table>
                    </td>
                    <!-- Logo + Text -->
                    <td bgcolor="#00639A" style="padding:0 10px; text-align:right; white-space:nowrap;">
                      <img src="https://www.uew.edu.gh/themes/custom/pinaman/images/logos/logo-default.png" width="13" style="vertical-align:middle; margin-right:5px;">
                      <span style="color:#ffffff; font-size:14px;">Powered by SkaiMount</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
  
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}
