import { downloadImageAndReplaceSrcNonProperty } from "../helper/FolderCleaners/EditorImagesController.js";
import Course from "../models/Courses.js";

export const getCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error!" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { objectId } = req.params;

    const course = await Course.findById(objectId);
    if (!course) {
      return res.status(404).json({ error: "Course not found!" });
    }

    await Course.findByIdAndDelete(objectId);
    return res.status(200).json({ message: "Course deleted successfully." });
  } catch (error) {
    console.error("Error deleting course:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { objectId } = req.params;
    const course = await Course.findById(objectId);
    if (!course) {
      return res.status(404).json({ error: "Course not found!" });
    }

    const {
      course_name,
      course_short_name,
      course_type,
      course_level,
      duration,
      description,
      status,
      certification_type,
      requirements,
      best_for,
      key_outcomes,
    } = req.body;

    let updatedDescription = description;
    if (description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        description,
        "course"
      );
    }

    const imageFile = req.files?.["image"];
    const existImage = imageFile
      ? imageFile[0]?.webpFilename
      : course.image?.[0];
    const existImageOriginal = imageFile
      ? imageFile[0]?.filename
      : course.image?.[1];

    await Course.findByIdAndUpdate(
      objectId,
      {
        $set: {
          course_name,
          course_short_name,
          course_type,
          image: [existImage, existImageOriginal],
          duration,
          course_level,
          description: updatedDescription,
          status,
          requirements,
          certification_type,
          best_for,
          key_outcomes,
        },
      },
      { new: true }
    );

    return res.status(200).json({ message: "Course updated successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const addCourse = async (req, res) => {
  try {
    const {
      userId,
      course_name,
      course_short_name,
      course_level,
      course_type,
      duration,
      description,
      certification_type,
      requirements,
      best_for,
      key_outcomes,
    } = req.body;

    const course_image = req.files?.["image"]?.[0]?.webpFilename || "";
    const course_original_image = req.files?.["image"]?.[0]?.filename || "";

    const courseSlug = course_name?.trim().replace(/\s+/g, "-").toLowerCase();

    const existCourse = await Course.findOne({ course_name });

    if (existCourse) {
      return res.status(400).json({ error: "This course already exists." });
    }

    const lastCourse = await Course.findOne().sort({ _id: -1 }).limit(1);
    const uniqueId = lastCourse ? lastCourse.uniqueId + 1 : 1;

    let updatedDescription = description;
    if (description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        description,
        "course"
      );
    }

    const newCourse = new Course({
      userId,
      uniqueId,
      course_name,
      course_short_name,
      course_type,
      course_level,
      image: [course_image, course_original_image],
      duration,
      description: updatedDescription,
      course_slug: courseSlug,
      certification_type,
      requirements,
      best_for,
      key_outcomes,
    });

    await newCourse.save();
    return res.status(201).json({ message: "Course added successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { objectId } = req.params;
    const course = await Course.findById(objectId);
    if (!course) {
      return res.status(404).json({ error: "Course not found!" });
    }
    return res.status(200).json(course);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const getCourseByUniqueId = async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const course = await Course.findOne({ uniqueId });
    if (!course) {
      return res.status(404).json({ error: "Course not found!" });
    }
    return res.status(200).json(course);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const softDeleteCourse = async (req, res) => {
  try {
    const { objectId } = req.params;
    const course = await Course.findById(objectId);
    if (!course) {
      return res.status(404).json({ error: "Course not found!" });
    }

    await Course.findOneAndUpdate(
      { _id: objectId },
      { $set: { isDeleted: true, status: "Suspended" } }
    );

    return res.status(200).json({ message: "Course is Softly Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const restoreCourse = async (req, res) => {
  try {
    const { objectId } = req.params;
    const course = await Course.findById(objectId);
    if (!course) {
      return res.status(404).json({ error: "Course not found!" });
    }

    await Course.findOneAndUpdate(
      { _id: objectId },
      { $set: { isDeleted: false, status: "Active" } }
    );

    return res.status(200).json({ message: "Course is Softly Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
