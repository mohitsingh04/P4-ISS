import PropertyExam from "../models/PropertyExam.js";
import Exam from "../models/Exams.js";
import { error } from "console";

// Utility function to compare date strings (YYYY-MM-DD)
const isSameDate = (d1, d2) => {
  if (!d1 || !d2) return d1 === d2;
  return (
    new Date(d1).toISOString().slice(0, 10) ===
    new Date(d2).toISOString().slice(0, 10)
  );
};

export const createPropertyExam = async (req, res) => {
  try {
    const {
      exam_id,
      exam_name,
      exam_short_name,
      upcoming_exam_date,
      result_date,
      application_form_date,
      application_form_link,
      exam_form_link,
      exam_mode,
      description,
      property_id,
    } = req.body;

    if (!exam_id || !property_id) {
      return res
        .status(400)
        .json({ error: "Both exam_id and property_id are required" });
    }

    const originalExam = await Exam.findOne({ uniqueId: exam_id });
    if (!originalExam) {
      return res.status(404).json({ error: "Exam not found" });
    }

    // ✅ Check for existing property_id + exam_id combination
    const existingEntry = await PropertyExam.findOne({
      exam_id: exam_id,
      property_id: property_id,
    });

    if (existingEntry) {
      return res
        .status(409)
        .json({ error: "This exam is already linked to the property" });
    }

    // Get the last PropertyExam to calculate next uniqueId
    const lastPropertyExam = await PropertyExam.findOne().sort({
      uniqueId: -1,
    });
    const newUniqueId = lastPropertyExam ? lastPropertyExam.uniqueId + 1 : 1;

    // Build only changed fields
    const fieldsToSave = {
      uniqueId: newUniqueId,
      exam_id: exam_id,
      property_id: property_id,
    };

    if (exam_name && exam_name !== originalExam.exam_name) {
      fieldsToSave.exam_name = exam_name;
    }

    if (exam_short_name && exam_short_name !== originalExam.exam_short_name) {
      fieldsToSave.exam_short_name = exam_short_name;
    }

    if (!isSameDate(upcoming_exam_date, originalExam.upcoming_exam_date)) {
      fieldsToSave.upcoming_exam_date = upcoming_exam_date;
    }

    if (!isSameDate(result_date, originalExam.result_date)) {
      fieldsToSave.result_date = result_date;
    }

    if (
      !isSameDate(application_form_date, originalExam.application_form_date)
    ) {
      fieldsToSave.application_form_date = application_form_date;
    }

    if (
      application_form_link &&
      application_form_link !== originalExam.application_form_link
    ) {
      fieldsToSave.application_form_link = application_form_link;
    }

    if (exam_form_link && exam_form_link !== originalExam.exam_form_link) {
      fieldsToSave.exam_form_link = exam_form_link;
    }

    if (exam_mode && exam_mode !== originalExam.exam_mode) {
      fieldsToSave.exam_mode = exam_mode;
    }

    if (description && description !== originalExam.description) {
      fieldsToSave.description = description;
    }

    // Save new PropertyExam
    const newPropertyExam = new PropertyExam(fieldsToSave);
    await newPropertyExam.save();

    return res.status(201).json({
      message: "Property exam created",
      property_exam: newPropertyExam,
    });
  } catch (error) {
    console.error("Create PropertyExam error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getExamByPropertyId = async (req, res) => {
  try {
    const { property_id } = req.params;
    const exams = await PropertyExam.find({ property_id });
    return res.status(200).json(exams);
  } catch (error) {
    console.log(error);
  }
};

export const deletePropertyExamById = async (req, res) => {
  try {
    const { objectId } = req.params;
    if (!objectId) {
      return res.status(400).json({ error: "ObjectId is Missing" });
    }

    const deleted = await PropertyExam.findOneAndDelete({ _id: objectId });
    if (!deleted) {
      return res.status(404).json({ error: "Exam Not Found" });
    }
    return res.status(200).json({ message: "Exam Deleted Successfully" });
  } catch (error) {}
};
