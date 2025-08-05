import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const regularDatabase = mongoose.createConnection(
  process.env.MONGODB_URL
);

export const analyticDatabase = mongoose.createConnection(
  process.env.MONGODB_ANALYTIC_URL
);
