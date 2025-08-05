import User from "../models/Users.js";
import bcrypt from "bcrypt";
import { newUserInfoEmail } from "../email/allEmail.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res.status(404).json({ message: "No users found." });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { objectId } = req.params;

    const user = await User.findById(objectId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await User.findByIdAndDelete(objectId);
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!objectId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid user ID format." });
    }

    const user = await User.findById(objectId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!objectId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const {
      name,
      email,
      mobile_no,
      pincode,
      address,
      city,
      state,
      role,
      status,
      permission,
      country,
    } = req.body;

    const user = await User.findById(objectId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Prepend '+' only if mobile_no is present and doesn't already start with '+'
    let updatedMobileNo = mobile_no || user.mobile_no;
    if (mobile_no && !mobile_no.startsWith("+")) {
      updatedMobileNo = `+${mobile_no}`;
    }

    const profileFile =
      req?.files?.profile?.[0]?.webpFilename || user?.profile?.[0];
    const profileOriginal =
      req?.files?.profile?.[0]?.filename || user?.profile?.[1];

    await User.findByIdAndUpdate(
      objectId,
      {
        $set: {
          name,
          email,
          mobile_no: updatedMobileNo,
          pincode,
          address,
          city,
          state,
          role,
          status,
          country,
          profile: [profileFile, profileOriginal],
          permissions: permission,
        },
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addNewUser = async (req, res) => {
  try {
    const { name, email, mobile_no, role, permission } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { mobile_no }],
    });

    if (existingUser) {
      return res.status(400).json({
        error:
          existingUser.email === email
            ? "This email already exists."
            : "This mobile number already exists.",
      });
    }

    const password = String(Math.floor(100000 + Math.random() * 899999));
    const hashedPassword = bcrypt.hashSync(password, 10);

    const uniqueId = (await User.countDocuments()) + 1;

    const newUser = new User({
      uniqueId,
      name,
      email,
      mobile_no,
      role,
      password: hashedPassword,
      permissions: permission,
    });

    const savedUser = await newUser.save();

    if (savedUser) {
      await newUserInfoEmail({ email, password });
    }

    return res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!objectId) {
      return res.status(400).json({ error: "Object ID is required." });
    }

    const user = await User.findById(objectId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const updatedUser = await User.findByIdAndUpdate(
      objectId,
      { $unset: { profile: "" } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(500).json({ error: "Failed to update user profile." });
    }

    return res.status(200).json({ message: "Profile removed successfully." });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

//? check Above
// export const UpdateUserProfile = async (req, res) => {
//   try {
//     const { uniqueId } = req.params;
//     let profile = req.files.profile[0].path;
//     let originalProfile = req.files.profile[0].originalPath;
//     const user = await User.findOne({ uniqueId: uniqueId });

//     if (!profile) {
//       profile = user.profile;
//     }

//     await User.findOneAndUpdate(
//       { uniqueId: uniqueId },
//       {
//         $set: {
//           profile: [profile, originalProfile],
//         },
//       }
//     );
//     return res
//       .status(200)
//       .json({ message: "User Profile Updated Successfully" });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };
