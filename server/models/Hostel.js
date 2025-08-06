import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const hostelSchema = mongoose.Schema(
  {
    userId: { type: Number },
    property_id: { type: Number },
    uniqueId: {
      type: Number,
      required: true,
      unique: true,
    },
    hostel_name: { type: String },
    hostel_price: { type: Number },
    hostel_description: { type: String },
    hostel_images: {
      type: Array,
      default: "[]",
    },
  },
  { timestamps: true }
);

const Hostel = regularDatabase.model("hostel", hostelSchema);

export default Hostel;
