import mongoose from "mongoose";
import { analyticDatabase } from "../Databases/Databases.js";

const propertyScoreSchema = mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    property_id: {
      type: Number,
      required: true,
    },
    property_score: {
      type: Number,
    },
  },
  { timestamp: true }
);

const PropertyScore = analyticDatabase.model(
  "property_score",
  propertyScoreSchema
);
export default PropertyScore;
