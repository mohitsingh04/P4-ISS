import Traffic from "../AnalyticModel/Traffic.js";

export const createOrUpdateTraffic = async (req, res) => {
  try {
    const { property_id } = req.body;
    if (!property_id) {
      return res.status(400).json({ error: "property_id is required" });
    }

    const now = new Date();
    // now.setDate(now.getDate() + 2);
    // now.setMonth(now.getMonth() + 1);
    const year = now.getFullYear();
    const month = now
      .toLocaleString("default", { month: "short" })
      .toLowerCase();
    const day = String(now.getDate()).padStart(2, "0");

    const lastDoc = await Traffic.findOne().sort({ createdAt: -1 });
    const uniqueId = lastDoc
      ? (parseInt(lastDoc.uniqueId) + 1).toString()
      : "1";

    let trafficDoc = await Traffic.findOne({ property_id, year, month });

    if (!trafficDoc) {
      trafficDoc = new Traffic({
        uniqueId,
        property_id,
        year,
        month,
        daily: [{ day, clicks: 1 }],
      });
    } else {
      const dayEntry = trafficDoc.daily.find((entry) => entry.day === day);
      if (dayEntry) {
        dayEntry.clicks += 1;
      } else {
        trafficDoc.daily.push({ day, clicks: 1 });
      }
    }

    await trafficDoc.save();
    res
      .status(200)
      .json({ message: "Traffic updated successfully", traffic: trafficDoc });
  } catch (error) {
    console.error("Error updating traffic:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTrafficByPropertyId = async (req, res) => {
  try {
    const { property_id } = req.params;

    if (!property_id) {
      return res.status(400).json({ error: "property_id is required" });
    }

    const trafficData = await Traffic.find({
      property_id: Number(property_id),
    });

    if (!trafficData || trafficData.length === 0) {
      return res
        .status(404)
        .json({ message: "No traffic data found for this property_id" });
    }

    res.status(200).json(trafficData);
  } catch (error) {
    console.error("Error fetching traffic:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
