import mongoose from "mongoose";
import { regularDatabase } from "../Databases/Databases.js";

const BlogSeoSchema = mongoose.Schema(
  {
    uniqueId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
    },
    slug: {
      type: String,
    },
    primary_focus_keyword: {
      type: Array,
    },
    json_schema: {
      type: String,
    },
    meta_description: {
      type: String,
    },
    blog_id: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamp: true }
);

const BlogSeo = regularDatabase.model(`blog_seo`, BlogSeoSchema);
export default BlogSeo;
