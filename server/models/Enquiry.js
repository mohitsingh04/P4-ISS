import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const enquiryModel = mongoose.Schema(
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
      type: String,
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

const Enquiry = regularDatabase.model("enquiry", enquiryModel);

export default Enquiry;
