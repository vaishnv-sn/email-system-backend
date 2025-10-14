export const jobMailTemplate = (
  subject,
  recipientName,
  role,
  skills,
  customMessage,
  applicantName,
  applicantRole,
  applicantEmail,
  applicantPhone,
  companyName = "your esteemed company"
) => {
  const currentYear = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);">
    <table align="center" cellpadding="0" cellspacing="0" width="100%" style="min-height: 100vh; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);">
        <tr>
            <td align="center" style="padding: 50px 20px;">
                <!-- Main Card -->
                <table cellpadding="0" cellspacing="0" width="600" style="background: linear-gradient(180deg, #1c1c1c 0%, #161616 100%); border-radius: 16px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05); overflow: hidden; margin: 0 auto;">
                    
                    <!-- Accent Bar -->
                    <tr>
                        <td style="height: 4px; background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%);"></td>
                    </tr>

                    <!-- Header -->
                    <tr>
                        <td style="background: #1a1a1a; padding: 48px 40px 36px; position: relative;">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center">
                                        <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0; letter-spacing: -0.5px; line-height: 1.3;">
                                        ${subject}
                                        </h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Content Area -->
                    <tr>
                        <td style="padding: 44px 40px;">
                            <!-- Greeting -->
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="padding-bottom: 32px;">
                                        <p style="font-size: 15px; color: #9ca3af; margin: 0 0 8px; font-weight: 400;">
                                            Hello,
                                        </p>
                                        <p style="font-size: 26px; font-weight: 600; color: #ffffff; margin: 0; letter-spacing: -0.5px;">
                                            ${recipientName}
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Main Content -->
                            <table cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td style="padding-bottom: 32px;">
      <p style="font-size: 15.5px; line-height: 1.8; color: #d1d5db; margin: 0 0 22px; font-weight: 400;">
        I'm writing to express my interest in the 
        <strong style="color: #ffffff; font-weight: 600; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          ${role}
        </strong> 
        position at <strong style="color: #f3f4f6;">${companyName}</strong>. My seasoned skills in 
        <strong style="color: #f3f4f6; font-weight: 500;">${skills}</strong> 
        and hands-on experience in building scalable applications equips me to contribute effectively to your team.
      </p>
      
      <p style="font-size: 15.5px; line-height: 1.8; color: #d1d5db; margin: 0 0 22px; font-weight: 400;">
${customMessage}
      </p>

      <p style="font-size: 15.5px; line-height: 1.8; color: #d1d5db; margin: 0; font-weight: 400;">
        Please find my resume attached. I would love to discuss how my skills and experiences align with your organizational goals.
      </p>
    </td>
  </tr>
</table>


                            <!-- Applicant Info Card -->
                            <table cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(135deg, #232323 0%, #1a1a1a 100%); border-radius: 12px; padding: 28px 28px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);">
                                <tr>
                                    <td>
                                        <!-- Decorative line accent -->
                                        <div style="width: 40px; height: 3px; background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%); border-radius: 2px; margin-bottom: 16px;"></div>
                                        
                                        <!-- Name -->
                                        <p style="margin: 0 0 6px; font-size: 18px; font-weight: 600; color: #ffffff; letter-spacing: -0.3px;">
                                            ${applicantName}
                                        </p>
                                        
                                        <!-- Role -->
                                        <p style="margin: 0 0 18px; font-size: 14px; color: #9ca3af; font-weight: 400;">
                                            ${applicantRole}
                                        </p>
                                        
                                        <!-- Contact info -->
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="padding: 0;">
                                                    <p style="margin: 0; font-size: 14px; line-height: 1.6;">
                                                        <a href="mailto:${applicantEmail}" style="color: #a5b4fc; text-decoration: none; transition: color 0.2s; font-weight: 400;">
                                                            ${applicantEmail}
                                                        </a>
                                                    </p>
                                                    <p style="margin: 8px 0 0; font-size: 14px; line-height: 1.6;">
                                                        <a href="tel:${applicantPhone}" style="color: #a5b4fc; text-decoration: none; transition: color 0.2s; font-weight: 400;">
                                                            ${applicantPhone}
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background: #0f0f0f; padding: 32px 40px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                            <p style="color: #6b7280; font-size: 13px; margin: 0 0 6px; line-height: 1.6; font-weight: 400;">
                                © ${currentYear} ${applicantName} — All Rights Reserved
                            </p>
                            <p style="color: #4b5563; font-size: 12px; margin: 0; font-weight: 400;">
                                Professional Correspondence
                            </p>
                        </td>
                    </tr>
                </table>
                
                <!-- Bottom spacing -->
                <table cellpadding="0" cellspacing="0" width="600" style="margin-top: 24px;">
                    <tr>
                        <td align="center">
                            <p style="color: #4b5563; font-size: 12px; margin: 0; line-height: 1.5;">
                                This email was sent regarding a professional job application
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
};
