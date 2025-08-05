import mongoose from "mongoose";
import { analyticDatabase } from "../Databases/Databases.js";

const enquiryCountSchema = new mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    property_id: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
      enum: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
    },
    daily: {
      type: [
        {
          day: {
            type: String,
            match: /^(0[1-9]|[12][0-9]|3[01])$/,
            required: true,
          },
          enquiries: {
            type: Number,
            min: 0,
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "enquiryCounts",
  }
);

const EnquiryCount = analyticDatabase.model("EnquiryCount", enquiryCountSchema);
export default EnquiryCount;
