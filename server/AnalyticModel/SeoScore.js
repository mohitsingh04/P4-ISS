import mongoose from "mongoose";
import { analyticDatabase } from "../Databases/Databases.js";

const seoSchema = mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
    },
    property_id: {
      type: Number,
      required: true,
    },
    seo_score: {
      type: Number,
    },
  },
  { timestamp: true }
);

const SeoScore = analyticDatabase.model("seo_score", seoSchema);
export default SeoScore;
