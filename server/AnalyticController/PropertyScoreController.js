import PropertyScore from "../AnalyticModel/PropertyScore.js";

export const addPropertyScore = async ({ property_id, property_score }) => {
  try {
    if ((!property_score, !property_id)) {
      throw new Error("All Fields are required");
    }

    const existingScore = await PropertyScore.findOne({ property_id });

    if (existingScore) {
      existingScore.property_score += property_score;
      await existingScore.save();
    } else {
      const lastScore = await PropertyScore.findOne().sort({ uniqueId: -1 });
      const uniqueId = lastScore ? lastScore.uniqueId + 1 : 1;

      const newScore = new PropertyScore({
        uniqueId,
        property_score,
        property_id,
      });

      await newScore.save();
    }
  } catch (error) {
    console.error("Error adding property score:", error);
    throw new Error("Internal Server Error");
  }
};

export const getPropertyScoreById = async (req, res) => {
  try {
    const { property_id } = req.params;

    if (!property_id) {
      return res.status(400).json({ error: "Property ID is required" });
    }

    const score = await PropertyScore.findOne({ property_id });

    if (!score) {
      return res.status(404).json({ error: "Property score not found" });
    }

    return res.status(200).json(score);
  } catch (error) {
    console.error("Error fetching property score:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
