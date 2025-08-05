import { downloadImageAndReplaceSrcNonProperty } from "../helper/FolderCleaners/EditorImagesController.js";
import BlogSeo from "../models/BlogSeo.js";

export const CreateBlogSeo = async (req, res) => {
  try {
    const {
      title,
      slug,
      meta_description,
      primary_focus_keyword,
      json_schema,
      blog_id,
    } = req.body;

    if (primary_focus_keyword.length > 2) {
      return res
        .status(400)
        .json({ error: "You can add a maximum of 2 focus keywords." });
    }

    const existSeo = await BlogSeo.findOne({ title, blog_id });
    if (existSeo) {
      return res.status(400).json({ error: "This SEO title already exists!" });
    }

    let updatedDescription = meta_description;
    if (meta_description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        meta_description,
        "blogs"
      );
    }

    const lastSeo = await BlogSeo.findOne().sort({ _id: -1 }).limit(1);
    const uniqueId = lastSeo ? lastSeo.uniqueId + 1 : 1;

    const newSeo = new BlogSeo({
      uniqueId,
      title,
      slug,
      meta_description: updatedDescription,
      primary_focus_keyword,
      json_schema,
      blog_id,
    });

    await newSeo.save();

    return res.status(201).json({ message: "SEO added successfully." });
  } catch (error) {
    console.error("Error adding SEO:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const getSeoByBlogId = async (req, res) => {
  try {
    const { blog_id } = req.params;
    const seo = await BlogSeo.findOne({ blog_id });

    if (!seo) {
      return res.status(404).json({ error: "SEO record not found!" });
    }

    return res.status(200).json(seo);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const deleteBlogSeo = async (req, res) => {
  try {
    const { objectId } = req.params;
    const seo = await BlogSeo.findById(objectId);

    if (!seo) {
      return res.status(404).json({ error: "SEO entry not found." });
    }

    await BlogSeo.findByIdAndDelete(objectId);
    return res.status(200).json({ message: "SEO entry deleted successfully." });
  } catch (error) {
    console.error("Error deleting SEO entry:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const updateBlogSeo = async (req, res) => {
  try {
    const { objectId } = req.params;
    const {
      title,
      slug,
      meta_description,
      primary_focus_keyword,
      json_schema,
      status,
    } = req.body;

    const existSeo = await BlogSeo.findById(objectId);
    if (!existSeo) {
      return res.status(404).json({ error: "SEO record not found." });
    }

    let updatedDescription = meta_description;
    if (meta_description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        meta_description,
        "blogs"
      );
    }

    if (primary_focus_keyword.length > 2) {
      return res
        .status(400)
        .json({ error: "You can add a maximum of 2 focus keywords." });
    }

    await BlogSeo.findByIdAndUpdate(
      objectId,
      {
        title,
        slug,
        meta_description: updatedDescription,
        primary_focus_keyword,
        json_schema,
        status,
      },
      { new: true }
    );

    return res.status(200).json({ message: "SEO updated successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};
