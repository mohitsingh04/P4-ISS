import User from "../../models/Users.js";

const ExpireVerification = async (req, res) => {
  try {
    const AllUsers = await User.find();
    let expiredCount = 0;

    for (const user of AllUsers) {
      if (
        user?.verifyToken &&
        Date.now() > new Date(user.verifyTokenExpiry).getTime()
      ) {
        const expireToken = await User.findOneAndUpdate(
          { uniqueId: user.uniqueId },
          {
            $unset: {
              verifyToken: "",
              verifyTokenExpiry: "",
            },
          },
          { new: true }
        );

        if (expireToken) {
          console.log(`Verify token expired for user: ${user.uniqueId}`);
          expiredCount++;
        }
      }
    }

    return res
      .status(200)
      .json({ message: `${expiredCount} verification token(s) expired.` });
  } catch (error) {
    console.error("Error expiring verification tokens:", error);
    return res.status(500).json({ error: error.message });
  }
};

export default ExpireVerification;
