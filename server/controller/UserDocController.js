import UserDoc from "../models/UserDocs.js";

export const SaveResume = async (req, res) => {
  try {
    const resume = req.files?.resume?.[0]?.filename;
    const { userId } = req.body;

    const isExisting = await UserDoc.findOne({ userId });
    if (!isExisting) {
      const lastDoc = await UserDoc.findOne().sort({ uniqueId: -1 });
      const uniqueId = lastDoc ? lastDoc?.uniqueId + 1 : 1;

      const newResume = await UserDoc({ uniqueId, userId, resume });

      await newResume.save();

      console.log(`Resume is Added`);

      return;
    }

    const updatedResume = await UserDoc.findOneAndUpdate(
      { userId },
      {
        $set: { resume },
      }
    );

    if (updatedResume) {
      console.log(`Resume is Updated for the user`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getResumeByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    const resume = await UserDoc.findOne({ userId });

    if (!resume) {
      return res.status(404).json({ error: "Resume Not Found" });
    }

    return res.status(200).json(resume);
  } catch (error) {
    console.log(error);
  }
};
export const getAllResume = async (req, res) => {
  try {
    const resume = await UserDoc.find();
    if (!resume) {
      return res.status(404).json({ error: "Resume Not Found" });
    }
    return res.status(200).json(resume);
  } catch (error) {
    console.log(error);
  }
};
