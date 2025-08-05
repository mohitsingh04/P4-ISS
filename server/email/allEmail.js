import nodemailer from "nodemailer";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import ejs from "ejs";
import path from "path";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: Number(process.env.EMAIL_PORT) === 465 ? true : false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmailVerification = async ({ uniqueId, email }) => {
  try {
    const token = jwt.sign({ uniqueId }, process.env.JWT_SECRET_VALUE, {
      expiresIn: "1h",
    });

    const saveVerifyToken = await User.findOneAndUpdate(
      { uniqueId },
      {
        $set: {
          verifyToken: token,
          verifyTokenExpiry: new Date(Date.now() + 60000),
        },
      },
      { new: true }
    );

    if (!saveVerifyToken) {
      console.error("User not found or token update failed.");
      return { success: false, message: "User not found." };
    }

    const verificationUrl = `${process.env.FRONTEND_DASHBOARD_URL}/verify-email/${token}`;

    const templatePath = path.resolve("Templates", "EmailVerification.ejs");

    const html = await ejs.renderFile(templatePath, {
      verificationUrl,
      user: saveVerifyToken,
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Email Verification",
      html,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Verification email sent. Check your inbox.",
    };
  } catch (err) {
    console.error("Error in sendEmailVerification:", err);
  }
};

export const sendResetEmail = async (user, res) => {
  try {
    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET_VALUE,
      { expiresIn: "1h" }
    );

    const userInfo = await User.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          resetToken: token,
          resetTokenExpiry: new Date(Date.now() + 3600000),
        },
      },
      { new: true }
    );

    const resetUrl = `${process.env.FRONTEND_DASHBOARD_URL}/reset-password/${token}`;

    const templatePath = path.resolve("Templates", "ResetPassword.ejs");

    const html = await ejs.renderFile(templatePath, {
      resetUrl,
      user: userInfo,
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Password Reset Request",
      html: html,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const newUserInfoEmail = async ({ email, password }) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const templatePath = path.resolve("Templates", "NewUserInfoMail.ejs");

    const html = await ejs.renderFile(templatePath, {
      email,
      password,
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome! Here is your login password",
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    if (!info || !info.messageId) {
      throw new Error("Failed to send email.");
    }

    return { message: "Email sent successfully." };
  } catch (error) {
    console.error("Email sending error:", error.message);
  }
};

export const policyMail = async ({ legalPolicy }) => {
  try {
    const allUsers = await User.find();
    if (!legalPolicy) {
      throw new Error("Legal Policy is required.");
    }

    allUsers.forEach(async (user) => {
      if (user.role === "Property Manager") {
        const templatePath = path.resolve("Templates", "PolicyUpdate.ejs");

        const html = await ejs.renderFile(templatePath, {
          legalPolicy,
          user,
        });
        const mailOptions = {
          from: process.env.EMAIL,
          to: user.email,
          subject: legalPolicy,
          html,
        };

        await transporter.sendMail(mailOptions);
      }
    });
  } catch (error) {
    console.error("Email sending error:", error.message);
  }
};
