const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Your Email", // Access the environment variable
    pass: "Your Password",
  },
});

app.post("/contact-form", async (req, res) => {
  try {
    const { email, name, message } =
      req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "Your Email",
      subject: `Contact from ${name}`,
      html: `
        <h1>From: ${email}</h1>
        <h3>${message}</h3>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
