import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const TeamSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  uniqueId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  profile: {
    type: Array,
  },
  property_id: {
    type: Number,
  },
  status: {
    type: String,
    default: "Active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Team = regularDatabase.model("team", TeamSchema);

export default Team;
