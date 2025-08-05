import { downloadImageAndReplaceSrcNonProperty } from "../helper/FolderCleaners/EditorImagesController.js";
import Blog from "../models/Blog.js";

export const CreateBlog = async (req, res) => {
  try {
    const { title, author, status, category, tags, blog } = req.body;

    const featuredFileWebp = req.files?.["featured_image"]?.[0]?.webpFilename;
    const featuredFilOriginal =
      req.files?.["featured_image"]?.[0]?.originalFilename;

    const existingBlog = await Blog.findOne({ title });
    if (existingBlog) {
      return res
        .status(400)
        .json({ message: "Title already exists for another blog" });
    }

    const lastBlog = await Blog.findOne().sort({ uniqueId: -1 });
    const uniqueId = lastBlog ? lastBlog?.uniqueId + 1 : 1;

    let updatedDescription = blog;
    if (blog) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        blog,
        "blogs"
      );
    }

    const featured_image = [featuredFileWebp, featuredFilOriginal];
    const newBlog = Blog({
      uniqueId,
      title,
      author,
      status,
      category,
      tags,
      blog: updatedDescription,
    });

    if (featured_image) {
      newBlog.featured_image = featured_image;
    }

    await newBlog.save();

    return res.status(200).json({ message: "Blog Created Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const UpdateBlog = async (req, res) => {
  try {
    const { objectId } = req.params;
    const { title, author, status, category, tags, blog } = req.body;

    const blogToUpdate = await Blog.findById(objectId);
    if (!blogToUpdate) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const existingBlog = await Blog.findOne({ title, _id: { $ne: objectId } });
    if (existingBlog) {
      return res
        .status(400)
        .json({ message: "Title already exists for another blog" });
    }

    const featuredFileWebp = req.files?.["featured_image"]?.[0]?.webpFilename;
    const featuredFilOriginal =
      req.files?.["featured_image"]?.[0]?.originalFilename;

    let updatedDescription = blog;
    if (blog) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        blog,
        "blogs"
      );
    }

    const featured_image = [featuredFileWebp, featuredFilOriginal];

    blogToUpdate.title = title || blogToUpdate.title;
    blogToUpdate.author = author || blogToUpdate.author;
    blogToUpdate.status = status || blogToUpdate.status;
    blogToUpdate.category = category || blogToUpdate.category;
    blogToUpdate.tags = tags || blogToUpdate.tags;
    blogToUpdate.blog = updatedDescription || blogToUpdate.blog;

    if (featured_image && featured_image[0] && featured_image[1]) {
      blogToUpdate.featured_image = featured_image;
    }

    await blogToUpdate.save();

    return res.status(200).json({ message: "Blog Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ uniqueId: -1 });

    if (!blogs) {
      return res.status(404).json({ error: "Blog Not Found" });
    }

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { objectId } = req.params;

    const blogs = await Blog.findOne({ _id: objectId }).sort({ uniqueId: -1 });

    if (!blogs) {
      return res.status(404).json({ error: "Blog Not Found" });
    }

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const getBlogByUniqueId = async (req, res) => {
  try {
    const { uniqueId } = req.params;

    const blogs = await Blog.findOne({ uniqueId: uniqueId }).sort({
      uniqueId: -1,
    });
    if (!blogs) {
      return res.status(404).json({ error: "Blog Not Found" });
    }

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { objectId } = req.params;

    const isExisting = await Blog.findById(objectId);
    if (!isExisting) {
      return res.status(404).json({ error: "Blog Not Existing" });
    }

    await Blog.findOneAndDelete({ _id: objectId });
    return res.status(200).json({ message: "Blog Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
