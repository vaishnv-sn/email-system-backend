export const jobMailTemplate = (
  subject,
  recipientName,
  role,
  skills,
  customMessage,
  portfolioLink,
  applicantName,
  applicantRole,
  applicantEmail,
  year
) => {
  return `<body
    style="
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background-color: #f4f5f7;
      "
  >
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      width="600"
      style="
          background-color: #ffffff;
          margin: 40px auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        "
    >
      <tr>
        <td
          align="center"
          style="background-color: #0a66c2; padding: 24px; color: #ffffff"
        >
          <h2 style="margin: 0; font-weight: 600; font-size: 22px">
            ${subject}  
          </h2>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px 40px">
          <p style="font-size: 16px; color: #222">Dear ${recipientName},</p>
          <p style="font-size: 15px; line-height: 1.7; color: #444">
            I’m writing to express my interest in the <b>${role}</b> position.
            My background in <b>${skills}</b> and hands-on experience in
            building scalable applications make me confident I can add strong
            value to your team.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444">
            ${customMessage}
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444">
            Please find my resume attached, and feel free to review my portfolio
            below:
          </p>
          <a
            href="${portfolioLink}"
            style="
                display: inline-block;
                margin-top: 12px;
                padding: 10px 20px;
                background-color: #0a66c2;
                color: #ffffff;
                text-decoration: none;
                border-radius: 4px;
                font-size: 15px;
                font-weight: 500;
              "
          >
            View Portfolio
          </a>
          <p style="font-size: 15px; color: #444; margin-top: 25px">
            Regards,
            <br />
            <b>${applicantName}</b>
            <br />
            <span style="color: #555">${applicantRole}</span>
            <br />
            <a
              href="mailto:${applicantEmail}"
              style="color: #0a66c2; text-decoration: none"
            >
              ${applicantEmail}
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <td
          align="center"
          style="
              background-color: #f1f3f5;
              padding: 14px;
              color: #888;
              font-size: 12px;
            "
        >
          © ${year} ${applicantName} — All Rights Reserved
        </td>
      </tr>
    </table>
  </body>`;
};
