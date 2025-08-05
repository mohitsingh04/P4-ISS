import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const PropertyCourseSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
    },
    uniqueId: {
      type: Number,
    },
    course_type: {
      type: Number,
    },
    course_short_name: {
      type: String,
    },
    certification_type: {
      type: String,
    },
    prices: {
      type: Object,
    },
    course_level: {
      type: Number,
    },
    duration: {
      type: String,
    },
    course_id: {
      type: Number,
    },
    status: {
      type: String,
      default: "Active",
    },
    property_id: {
      type: Number,
    },
    requirements: {
      type: Array,
    },
    cerification_info: {
      type: Boolean,
    },
    best_for: {
      type: Array,
    },
    languages: {
      type: Array,
    },
    key_outcomes: {
      type: Array,
    },
    course_format: {
      type: Number,
    },
  },
  { timestamps: true }
);

const PropertyCourse = regularDatabase.model(
  "PropertyCourse",
  PropertyCourseSchema
);

export default PropertyCourse;
