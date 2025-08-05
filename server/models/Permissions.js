import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const permissionsSchema = mongoose.Schema({
  uniqueId: {
    type: Number,
  },
  name: { type: String },
  description: { type: String },
  status: { type: String },
});

const Permissions = regularDatabase.model("permissions", permissionsSchema);
export default Permissions;
