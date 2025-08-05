import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const userDocSchema = await mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const UserDoc = regularDatabase.model("user-docs", userDocSchema);
export default UserDoc;
