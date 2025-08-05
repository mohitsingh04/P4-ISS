import mongoose from "mongoose";
import { analyticDatabase } from "../Databases/Databases.js";

const rankSchema = mongoose.Schema(
  {
    rank: {
      type: Number,
    },
    overallScore: {
      type: Number,
    },
    property_id: {
      type: Number,
      unique: true,
      required: true,
    },
    lastRank: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Rank = analyticDatabase.model("rank", rankSchema);

export default Rank;
