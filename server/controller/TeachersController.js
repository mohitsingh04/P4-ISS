import { addPropertyScore } from "../AnalyticController/PropertyScoreController.js";
import { TeacherImageMover } from "../helper/FolderCleaners/PropertyImageMover.js";
import Teachers from "../models/Teachers.js";

export const addTeacher = async (req, res) => {
  try {
    const { userId, teacher_name, designation, experience, property_id } =
      req.body;
    const profile = req?.files?.["profile"]?.[0]?.webpFilename || null;
    const originalProfile =
      req?.files?.["profile"]?.[0]?.originalFilename || null;

    if (!teacher_name || !designation || !experience || !property_id) {
      return res.status(400).send({ error: "Missing required fields." });
    }

    const teacherCount = await Teachers.countDocuments({ property_id });

    const latestTeacher = await Teachers.findOne().sort({ _id: -1 }).limit(1);
    const uniqueId = latestTeacher ? latestTeacher.uniqueId + 1 : 1;

    const newTeacher = new Teachers({
      userId,
      uniqueId,
      teacher_name,
      profile: [profile, originalProfile],
      designation,
      experience,
      property_id,
    });

    await newTeacher.save();
    await TeacherImageMover(req, res, property_id);

    if (teacherCount === 0) {
      await addPropertyScore({
        property_score: 10,
        property_id: property_id,
      });
    }

    return res.status(201).send({ message: "Teacher added." });
  } catch (err) {
    console.error("Add Teacher Error:", err);
    return res.status(500).send({ error: "Internal server error!" });
  }
};

export const getTeacher = async (req, res) => {
  try {
    const allTeachers = await Teachers.find();
    return res.status(200).json(allTeachers);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const { objectId } = req.params;
    const teacher = await Teachers.findById(objectId);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found." });
    }

    return res.status(200).json(teacher);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getTeacherByPropertyId = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const teachers = await Teachers.find({ property_id: propertyId });
    return res.status(200).json(teachers);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const { objectId } = req.params;
    const { teacher_name, designation, experience, status } = req.body;

    const teacher = await Teachers.findById(objectId);
    if (!teacher) {
      return res.status(404).send({ error: "Teacher not found!" });
    }

    const profile =
      req?.files?.["profile"]?.[0]?.webpFilename ||
      teacher.profile?.[0] ||
      null;
    const originalProfile =
      req?.files?.["profile"]?.[0]?.originalFilename ||
      teacher.profile?.[1] ||
      null;

    const updateData = {
      teacher_name,
      designation,
      experience,
      status,
      profile: [profile, originalProfile],
    };

    await Teachers.findByIdAndUpdate(objectId, { $set: updateData });
    await TeacherImageMover(req, res, teacher.property_id);
    return res.status(200).send({ message: "Teacher updated successfully." });
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).send({ error: "Internal server error!" });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const { objectId } = req.params;
    const deletedTeacher = await Teachers.findByIdAndDelete(objectId);

    if (!deletedTeacher) {
      return res.status(404).json({ error: "Teacher not found." });
    }

    const teacherCount = await Teachers.countDocuments({
      property_id: deletedTeacher.property_id,
    });

    if (teacherCount === 0) {
      await addPropertyScore({
        property_score: -10,
        property_id: deletedTeacher.property_id,
      });
    }

    return res.status(200).json({ message: "Teacher deleted." });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};
