import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const ArchiveEnquiryModel = mongoose.Schema(
  {
    property_name: {
      type: String,
      required: true,
    },
    property_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    people: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ArchiveEnquiry = regularDatabase.model("archive-enquiries", ArchiveEnquiryModel);

export default ArchiveEnquiry;
