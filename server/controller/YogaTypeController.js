import YogaType from "../models/YogaType.js";

export const getYogaType = async (req, res) => {
  try {
    const yoga_types = await YogaType.find();

    if (!yoga_types) {
      return res.status(400).json({ error: "Yoga Types Not Found" });
    }

    return res.status(200).json(yoga_types);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
