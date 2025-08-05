import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const YogaTypeSchema = mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    yoga_type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const YogaType = regularDatabase.model("yoga-type", YogaTypeSchema);
export default YogaType;
