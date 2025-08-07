import Exam from "../models/Exams.js";

export const createExam = async (req, res) => {
  try {
    const {
      exam_name,
      exam_short_name,
      upcoming_exam_date,
      result_date,
      application_form_date,
      application_form_link,
      exam_form_link,
      exam_mode,
      description,
    } = req.body;

    const exam_logo = req?.files?.["exam_logo"]?.[0]?.webpFilename || null;
    const exam_original_logo = req?.files?.["exam_logo"]?.[0]?.filename || null;
    const featured_image =
      req?.files?.["featured_image"]?.[0]?.webpFilename || null;
    const featured_original_image =
      req?.files?.["featured_image"]?.[0]?.filename || null;

    if (!exam_name) {
      return res.status(400).json({ message: "exam_name is required." });
    }

    const lastExam = await Exam.findOne().sort({ uniqueId: -1 }).lean();
    const newUniqueId = lastExam ? lastExam.uniqueId + 1 : 1;

    const newExam = new Exam({
      uniqueId: newUniqueId,
      exam_name,
      exam_short_name,
      upcoming_exam_date,
      result_date,
      application_form_date,
      application_form_link,
      exam_form_link,
      exam_mode,
      description,
      exam_logo: [exam_logo, exam_original_logo],
      featured_image: [featured_image, featured_original_image],
    });

    const savedExam = await newExam.save();

    return res
      .status(201)
      .json({ message: "Exam created successfully.", exam: savedExam });
  } catch (error) {
    console.error("Error creating exam:", error);
    return res
      .status(500)
      .json({ message: "Server error while creating exam." });
  }
};

export const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    return res.status(200).json(exams);
  } catch (error) {
    console.error("Error fetching exams:", error);
    return res
      .status(500)
      .json({ message: "Server error while fetching exams." });
  }
};

export const deleteExam = async (req, res) => {
  try {
    const { objectId } = req.params;

    const deletedExam = await Exam.findByIdAndDelete(objectId);

    if (!deletedExam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    return res
      .status(200)
      .json({ message: "Exam deleted successfully.", exam: deletedExam });
  } catch (error) {
    console.error("Error deleting exam:", error);
    return res
      .status(500)
      .json({ message: "Server error while deleting exam." });
  }
};

export const getExamById = async (req, res) => {
  try {
    const { objectId } = req.params;

    const exam = await Exam.findById(objectId);

    if (!exam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    return res.status(200).json(exam);
  } catch (error) {
    console.error("Error fetching exam by ID:", error);
    return res
      .status(500)
      .json({ message: "Server error while fetching exam." });
  }
};
// Update exam by ObjectId (param: objectId)
export const updateExam = async (req, res) => {
  try {
    const { objectId } = req.params;

    const {
      exam_name,
      exam_short_name,
      upcoming_exam_date,
      result_date,
      application_form_date,
      application_form_link,
      exam_form_link,
      exam_mode,
      description,
      status,
    } = req.body;

    const exam = await Exam.findById(objectId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    // Handle image updates
    const new_exam_logo = req?.files?.["exam_logo"]?.[0];
    const new_featured_image = req?.files?.["featured_image"]?.[0];

    const updatedFields = {
      exam_name,
      exam_short_name,
      upcoming_exam_date,
      result_date,
      application_form_date,
      application_form_link,
      exam_form_link,
      exam_mode,
      description,
      status,
    };

    if (new_exam_logo) {
      updatedFields.exam_logo = [
        new_exam_logo.webpFilename || null,
        new_exam_logo.filename || null,
      ];
    }

    if (new_featured_image) {
      updatedFields.featured_image = [
        new_featured_image.webpFilename || null,
        new_featured_image.filename || null,
      ];
    }

    const updatedExam = await Exam.findByIdAndUpdate(objectId, updatedFields, {
      new: true,
    });

    return res.status(200).json({
      message: "Exam updated successfully.",
      exam: updatedExam,
    });
  } catch (error) {
    console.error("Error updating exam:", error);
    return res
      .status(500)
      .json({ message: "Server error while updating exam." });
  }
};

export const softDeleteExam = async (req, res) => {
  try {
    const { objectId } = req.params;

    const exam = await Exam.findById(objectId);
    if (!exam) {
      return res.status(404).json({ error: "Exam not found!" });
    }

    await Exam.findByIdAndUpdate(objectId, {
      $set: {
        isDeleted: true,
        status: "Suspended",
      },
    });

    return res.status(200).json({ message: "Exam has been softly deleted." });
  } catch (error) {
    console.error("Soft delete error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const restoreExam = async (req, res) => {
  try {
    const { objectId } = req.params;

    const exam = await Exam.findById(objectId);
    if (!exam) {
      return res.status(404).json({ error: "Exam not found!" });
    }

    await Exam.findByIdAndUpdate(objectId, {
      $set: {
        isDeleted: false,
        status: "Active",
      },
    });

    return res
      .status(200)
      .json({ message: "Exam has been restored successfully." });
  } catch (error) {
    console.error("Restore error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
