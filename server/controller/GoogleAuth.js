import User from "../models/Users.js";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(process.env.GOOGLE_ID);

export const GoogleLoginAuth = async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_ID,
    });
    const payload = ticket.getPayload();

    const { name, email, picture } = payload;

    let existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser.isGoogleLogin) {
        const accessToken = jwt.sign(
          { id: existingUser._id, email: existingUser.email },
          process.env.JWT_SECRET_VALUE
        );

        res.cookie("token", accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 10 * 24 * 60 * 60 * 1000 * 365,
        });

        return res.status(200).json({
          message: "Login success",
          user: existingUser,
          isGoogleLogin: true,
        });
      } else {
        return res.status(400).json({
          message: "This email is not linked with Google login",
        });
      }
    }

    const lastUser = await User.findOne().sort({ uniqueId: -1 });
    const newUniqueId = lastUser ? lastUser.uniqueId + 1 : 1;

    const newUser = new User({
      name,
      email,
      profile: [picture],
      isGoogleLogin: true,
      uniqueId: newUniqueId,
    });

    const savedUser = await newUser.save();

    const accessToken = jwt.sign(
      { id: savedUser._id, email: savedUser.email },
      process.env.JWT_SECRET_VALUE
    );

    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 10 * 24 * 60 * 60 * 1000 * 365,
    });

    return res.status(201).json({
      message: "User created and login success",
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
