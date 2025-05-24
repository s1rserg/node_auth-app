const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = ({ to, subject, text, html }) => {
  transporter.sendMail({
    to,
    subject,
    text,
    html,
  });
};

module.exports = {
  sendEmail,
};
