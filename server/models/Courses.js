import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const CourseSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  uniqueId: {
    type: Number,
  },
  course_type: {
    type: String,
  },
  course_name: {
    type: String,
  },
  course_short_name: {
    type: String,
  },
  price: {
    type: String,
  },
  duration: {
    type: String,
  },
  description: {
    type: String,
  },
  property_id: {
    type: Number,
  },
  property_name: {
    type: String,
  },
  course_level: {
    type: String,
  },
  course_slug: {
    type: String,
  },
  image: {
    type: Array,
  },
  status: {
    type: String,
    default: "Active",
  },
  certification_type: {
    type: String,
  },
  requirements: {
    type: Array,
  },
  best_for: {
    type: Array,
  },
  key_outcomes: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Course = regularDatabase.model("Course", CourseSchema);

export default Course;
