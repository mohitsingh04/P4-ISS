import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const legalSchema = mongoose.Schema(
  {
    privacyPolicy: {
      type: String,
    },
    terms: {
      type: String,
    },
    disclaimer: {
      type: String,
    },
    cancelationPolicy: {
      type: String,
    },
  },
  { timestamps: true }
);

const Legal = regularDatabase.model("Legal", legalSchema);
export default Legal;
