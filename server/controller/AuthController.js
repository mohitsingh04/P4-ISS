import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmailVerification, sendResetEmail } from "../email/allEmail.js";

const Salt = 10;

export const register = async (req, res) => {
  try {
    const { name, email, mobile_no, password, confirm_password } = req.body;

    if (!name || !email || !mobile_no || !password || !confirm_password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (password !== confirm_password) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    const [existEmail, existMobile] = await Promise.all([
      User.findOne({ email }),
      User.findOne({ mobile_no }),
    ]);

    if (existEmail) {
      return res
        .status(400)
        .json({ error: "This email is already registered." });
    }
    if (existMobile) {
      return res
        .status(400)
        .json({ error: "This mobile number is already registered." });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const lastUser = await User.findOne().sort({ _id: -1 }).limit(1);
    const uniqueId = lastUser ? lastUser.uniqueId + 1 : 1;

    const newUser = new User({
      uniqueId,
      name,
      email,
      mobile_no: `+${mobile_no}`,
      password: passwordHash,
    });

    await newUser.save();

    await sendEmailVerification({ uniqueId, email, emailType: "VERIFY" });

    return res
      .status(201)
      .json({ message: "Registered successfully. You can now log in." });
  } catch (err) {
    console.error("Registration Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found. Please check your email." });
    }

    await sendEmailVerification({
      uniqueId: user.uniqueId,
      email,
      emailType: "VERIFY",
    });

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error verifying email:", error);
    return res.status(500).json({
      error: "Internal Server Error. Please try again later.",
    });
  }
};

export const getEmailVerification = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ error: "Token is required." });
    }

    const user = await User.findOne({ verifyToken: token });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token." });
    }

    const verifiedUser = await User.findOneAndUpdate(
      { uniqueId: user.uniqueId },
      {
        $set: { verified: true },
        $unset: { verifyToken: "", verifyTokenExpiry: "" },
      },
      { new: true }
    );

    if (!verifiedUser) {
      return res.status(500).json({ error: "Failed to verify email." });
    }

    return res.status(200).json({ message: "Email verified successfully." });
  } catch (error) {
    console.error("Email verification error:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User does not exist!" });
    }

    if (user.status === "Suspended") {
      return res
        .status(400)
        .json({ error: "Sorry Your Are Blocked. Please Support." });
    }

    if (!user.isGoogleLogin) {
      const isMatch = await bcrypt.compare(password, user?.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password!" });
      }
    }

    if (user.isGoogleLogin) {
      return res
        .status(401)
        .json({ error: "Your Account is Signed Up with Google" });
    }

    if (!user?.verified) {
      await sendEmailVerification({
        uniqueId: user.uniqueId,
        email,
        emailType: "VERIFY",
      });
      return res.status(403).json({
        error: "Email not verified. Verification email sent.",
        flag: "UnVerified",
      });
    }

    const accessToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_VALUE
    );

    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 10 * 24 * 60 * 60 * 1000 * 365,
    });

    const { password: _, ...userData } = user.toObject();

    return res.status(200).json({
      message: "Logged in successfully.",
      accessToken,
      user: userData,
      sameSite: "lax",
      domain: ".yoprerna.com",
      path: "/",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found. Please check your email." });
    }

    await sendResetEmail(user, res);

    return res
      .status(200)
      .json({ message: "Password reset email sent. Check your email." });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error. Please try again later." });
  }
};

export const getResetToken = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ error: "Token is required." });
    }

    const user = await User.findOne({ resetToken: token });

    if (!user) {
      return res.status(404).json({ error: "Invalid or expired token." });
    }

    return res.status(200).json({ message: "Valid token", token });
  } catch (error) {
    console.error("Error fetching reset token:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const postResetToken = async (req, res) => {
  try {
    const { new_password, confirm_password, token } = req.body;

    if (!new_password || !confirm_password || !token) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (new_password !== confirm_password) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    const passwordHash = await bcrypt.hash(new_password, 10);

    const user = await User.findOneAndUpdate(
      { resetToken: token },
      {
        $set: { password: passwordHash, resetToken: null },
      },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({
        error: "Invalid or expired token. Please request a new password reset.",
      });
    }

    return res
      .status(200)
      .json({ message: "Password reset successfully. You can login now." });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const profile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Access Denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_VALUE);
    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      });
      return res.status(404).json({ error: "User not found" });
    }
    if (user.status === "Suspended") {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      });
      return res.status(404).json({ error: "Sorry You Are Blocked" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { id, current_password, new_password, confirm_password } = req.body;

    if (!id || !current_password || !new_password || !confirm_password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (current_password === new_password) {
      return res
        .status(400)
        .json({ error: "New password cannot be the same as the old password" });
    }

    if (new_password !== confirm_password) {
      return res
        .status(400)
        .json({ error: "New password and confirm password must match" });
    }

    const isMatch = await bcrypt.compare(current_password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Current password is incorrect" });
    }

    const passwordHash = await bcrypt.hash(new_password, Salt);

    user.password = passwordHash;
    await user.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getToken = async (req, res) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Please log in.", flag: "NotFound" });
    }

    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error fetching token:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
