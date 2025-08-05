import Compare from "../AnalyticModel/Compare.js";

export const AddCompare = async (req, res) => {
  try {
    const { userId, properties } = req.body;

    if (!properties || !Array.isArray(properties) || properties.length === 0) {
      return res.status(400).json({ error: "Properties array is required." });
    }

    if (properties.length <= 1) {
      return res
        .status(400)
        .json({ error: "Properties array must contain more than 1 item." });
    }

    const lastDoc = await Compare.findOne().sort({ uniqueId: -1 }).lean();
    const nextUniqueId = lastDoc ? lastDoc.uniqueId + 1 : 1;

    const filter = {
      properties: { $size: properties.length, $all: properties },
    };

    if (userId !== undefined && userId !== null) {
      filter.userId = userId;
    } else {
      filter.userId = { $exists: false };
    }

    let compareDoc = await Compare.findOne(filter);

    if (compareDoc) {
      compareDoc.count = (compareDoc.count || 0) + 1;
      await compareDoc.save();

      return res
        .status(200)
        .json({ message: "Compare document updated with incremented count." });
    } else {
      const newCompare = new Compare({
        uniqueId: nextUniqueId,
        userId: userId || undefined,
        properties,
        count: 1,
      });

      await newCompare.save();

      return res
        .status(201)
        .json({ message: "Compare document created with count = 1." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
