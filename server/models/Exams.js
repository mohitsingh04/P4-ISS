import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const examSchema = mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    exam_name: {
      type: String,
      required: true,
    },
    exam_short_name: {
      type: String,
    },
    upcoming_exam_date: {
      type: Date,
    },
    result_date: {
      type: Date,
    },
    application_form_date: {
      type: Date,
    },
    application_form_link: {
      type: String,
    },
    exam_form_link: {
      type: String,
    },
    exam_mode: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    exam_logo: {
      type: [String],
    },
    featured_image: {
      type: [String],
    },
  },
  { timestamps: true }
);
const Exam = regularDatabase.model("exams", examSchema);
export default Exam;
