import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const PropertySchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
    },
    uniqueId: {
      type: Number,
      required: true,
    },
    property_name: {
      type: String,
      required: true,
    },
    property_email: {
      type: String,
      required: true,
    },
    property_mobile_no: {
      type: String,
      required: true,
    },
    property_alt_mobile_no: {
      type: String,
    },
    property_logo: {
      type: Array,
    },
    featured_image: {
      type: Array,
    },
    property_description: {
      type: String,
    },
    est_year: {
      type: Number,
    },
    category: {
      type: Number,
    },
    property_slug: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    property_type: {
      type: Number,
    },
    property_website: {
      type: String,
    },
    sponsered: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = regularDatabase.model("Property", PropertySchema);

export default Property;
