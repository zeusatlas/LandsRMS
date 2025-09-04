// =========tableTemplateUpdated=========
export function generateEventEmailHTML({
  action,
  message,
  date,
  departmentName,
  authorizerPosition,
}: {
  action: string;
  message: string,
  date: string;
  departmentName: string;
  authorizerPosition: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Showvaana Email Template</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    /* Responsive adjustments */
    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        padding: 10px !important;
        background-color: #ffffff !important;
        background: #ffffff !important;
      }

      .header-panel, .footer-content {
        flex-direction: column !important;
        text-align: center !important;
      }

      .header-panel img,
      .footer-logo img {
        margin: 0 auto 10px;
      }

      .footer-logo p {
        margin: 0 auto;
      }
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
              <h2 style="font-family:'Poppins', sans-serif; font-weight:900; color:#00639A; margin:0; text-transform:uppercase;">SkaiMount Incorporations</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#00639A; color:#ffffff; margin-top:10px;">
                <tr>
                  <td style="padding:10px;" valign="middle" width="60">
                    <img src="https://www.uew.edu.gh/themes/custom/pinaman/images/logos/logo-default.png" width="50" style="display:block;">
                  </td>
                  <td style="padding:10px;">
                    <h3 style="margin:0; font-size:20px; color:#20e55e;text-transform:uppercase;">Showvaana Division</h3>
                    <h5 style="margin:0; font-size:16px; color:#20e55e;text-transform:uppercase;">Office of the ${departmentName}</h5>
                    <p style="margin:5px 0 0; font-size:14px; color:#ffffff;">
                      P.O. Box 25, Accra, Ghana<br/>
                      info@skaimount.com | info@showvaana.com<br/>
                      +233 (0) 303 938 714 | +233 (0) 303 938 714
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding-top:20px;">
              <p style="text-align:right; font-size:14px; margin:0;">
                ${date}
              </p>

              <h2 style="border-bottom:1px solid #0FD46C; font-size:20px; font-weight:bold; font-family:'Poppins', sans-serif; text-transform:uppercase; color:#00639A;">${action}</h2>

              <p style="font-size:15px; line-height:1.6; color:#333;">
                ${message}
              </p>

              <img src="https://cdn.prod.website-files.com/61d7de73eec437f52da6d699/62161cf7328ad280841f653f_esignature-signature.png" alt="signature" width="100" style="margin:10px 0;">

              <p style="text-transform:uppercase; font-size:14px; color:#333;">
                <strong>Authorised by:</strong><br>
                ${authorizerPosition}<br>
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
                    <span style="color:#ffffff; font-size:14px;">Powered by Skai Team</span>
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
