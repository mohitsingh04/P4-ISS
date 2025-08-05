import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const CategorySchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  uniqueId: {
    type: Number,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
    unique: true,
  },
  category_icon: {
    type: Array,
  },
  featured_image: {
    type: Array,
  },
  description: {
    type: String,
  },
  parent_category: {
    type: String,
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

const Category = regularDatabase.model("Category", CategorySchema);

export default Category;
