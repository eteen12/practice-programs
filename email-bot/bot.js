const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function sendEmail() {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: "user@gmail.com",
    subject: "Daniel",
    text: "Hi daniel",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error: " + error);
    }
    console.log("Email sent: " + info.response);
  });
}

for (let i = 0; i < 1; i++) {
  sendEmail();
}
