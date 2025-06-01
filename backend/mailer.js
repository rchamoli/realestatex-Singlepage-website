const nodemailer = require("nodemailer");

const sendEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Real Estate Lead" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER, // can be same as user or separate
    subject: "📨 New Lead Submission!",
    html: `
      <h3>New Lead Details</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
