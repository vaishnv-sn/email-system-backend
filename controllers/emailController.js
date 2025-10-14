import { sendEmail } from "../utils/mailEngine.js";

export const sendEmailController = async (req, res) => {
  try {
    const {
      to,
      subject,
      recipientName,
      role,
      skills,
      customMessage,
      applicantName,
      applicantRole,
      applicantEmail,
      applicantPhone,
      companyName,
    } = req.body;

    // Basic validation
    if (!to || !subject || !recipientName || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields." });
    }

    await sendEmail(
      to,
      subject,
      recipientName,
      role,
      skills,
      customMessage,
      applicantName,
      applicantRole,
      applicantEmail,
      applicantPhone,
      companyName
    );

    res
      .status(200)
      .json({ success: true, message: `Email successfully sent to ${to}` });
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
};
