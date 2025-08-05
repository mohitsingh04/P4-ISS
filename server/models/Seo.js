import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const SeoSchema = new mongoose.Schema({
  uniqueId: {
    type: Number,
  },
  title: {
    type: String,
  },
  slug: {
    type: String,
  },
  primary_focus_keyword: {
    type: Array,
  },
  json_schema: {
    type: String,
  },
  meta_description: {
    type: String,
  },
  property_id: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Seo = regularDatabase.model("Seo", SeoSchema);

export default Seo;
