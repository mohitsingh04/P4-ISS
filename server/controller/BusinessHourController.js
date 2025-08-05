import { addPropertyScore } from "../AnalyticController/PropertyScoreController.js";
import BusinessHour from "../models/BusinessHour.js";
import Property from "../models/Property.js";

export const getBusinessHours = async (req, res) => {
  try {
    const businessHours = await BusinessHour.find();
    return res.status(200).json(businessHours);
  } catch (err) {
    return res.send({ error: "Internal Server Error" });
  }
};

export const addBusinessHours = async (req, res) => {
  try {
    const {
      property_id,
      userId,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    } = req.body;

    const isProperty = await BusinessHour.findOne({ property_id: property_id });

    if (isProperty) {
      return res
        .status(400)
        .json({ message: "Business hours already exist for this property" });
    }

    const businessHours = new BusinessHour({
      property_id,
      userId,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    });

    await businessHours.save();
    await addPropertyScore({ property_id, property_score: 9 });
    return res
      .status(201)
      .json({ message: "Business Hours Added Successfully", businessHours });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBusinessHours = async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
      req.body;

    const updatedHours = await BusinessHour.findOneAndUpdate(
      { property_id: uniqueId },
      {
        $set: {
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
        },
      },
      { new: true }
    );

    if (!updatedHours) {
      return res
        .status(404)
        .json({ message: "Business hours not found for this ID" });
    }

    return res.status(200).json({
      message: "Business Hours Updated Successfully",
      updatedHours,
    });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBusinessHoursByPropertyId = async (req, res) => {
  try {
    const { property_id } = req.params;
    const businessHours = await BusinessHour.findOne({
      property_id: property_id,
    });
    return res.status(200).json(businessHours);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const changePropertyCategory = async (req, res) => {
  try {
    const { property_id, activeCategory } = req.body;

    if (!activeCategory) {
      return res.status(400).json({ error: "Please Select Category" });
    }

    const changeCategory = await Property.findOneAndUpdate(
      { uniqueId: property_id },
      {
        $set: {
          category: activeCategory,
        },
      }
    );

    if (changeCategory) {
      return res
        .status(200)
        .json({ message: "Catergory Changed Successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
