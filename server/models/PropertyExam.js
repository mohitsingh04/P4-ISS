import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const examSchema = mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    exam_id: {
      type: Number,
    },
    property_id: {
      type: Number,
    },
    exam_name: {
      type: String,
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
  },
  { timestamps: true }
);
const PropertyExam = regularDatabase.model("property-exam", examSchema);
export default PropertyExam;
