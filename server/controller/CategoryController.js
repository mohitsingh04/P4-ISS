import { downloadImageAndReplaceSrcNonProperty } from "../helper/FolderCleaners/EditorImagesController.js";
import Category from "../models/Category.js";

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!objectId) {
      return res.status(400).json({ error: "Category ID is required" });
    }

    const category = await Category.findById(objectId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    return res.status(200).json(category);
  } catch (err) {
    console.error("Error fetching category by ID:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const addCategory = async (req, res) => {
  try {
    const { userId, category_name, parent_category, description } = req.body;

    if (!userId || !category_name) {
      return res
        .status(400)
        .json({ error: "User ID and Category Name are required" });
    }

    const category_icon =
      req?.files?.["category_icon"]?.[0]?.webpFilename || null;
    const category_original_icon =
      req?.files?.["category_icon"]?.[0]?.filename || null;
    const featured_image =
      req?.files?.["featured_image"]?.[0]?.webpFilename || null;
    const featured_original_image =
      req?.files?.["featured_image"]?.[0]?.filename || null;

    const existCategory = await Category.findOne({ category_name });

    if (existCategory) {
      return res.status(400).json({ error: "This category already exists." });
    }

    const lastCategory = await Category.findOne().sort({ _id: -1 });
    const uniqueId = lastCategory ? lastCategory.uniqueId + 1 : 1;

    let updatedDescription = description;
    if (description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        description,
        "category"
      );
    }

    const newCategory = new Category({
      uniqueId,
      userId,
      category_name,
      parent_category,
      category_icon: [category_icon, category_original_icon],
      featured_image: [featured_image, featured_original_image],
      description: updatedDescription,
    });

    await newCategory.save();

    return res.status(201).json({ message: "Category added successfully." });
  } catch (err) {
    console.error("Error adding category:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { objectId } = req.params;

    if (!objectId) {
      return res.status(400).json({ error: "Category ID is required" });
    }

    const category = await Category.findById(objectId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await Category.findByIdAndDelete(objectId);

    return res.status(200).json({ message: "Category deleted successfully." });
  } catch (err) {
    console.error("Error deleting category:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { objectId } = req.params;
    const { userId, category_name, parent_category, description, status } =
      req.body;

    const category = await Category.findById(objectId);
    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }

    const existingCategory = await Category.findOne({ category_name });
    if (existingCategory && existingCategory._id.toString() !== objectId) {
      return res.status(400).json({ error: "Category name already exists." });
    }

    const category_icon =
      req.files?.category_icon?.[0]?.webpFilename ||
      category.category_icon?.[0];
    const category_original_icon =
      req.files?.category_icon?.[0]?.filename || category.category_icon?.[1];

    const featured_image =
      req.files?.featured_image?.[0]?.webpFilename ||
      category.featured_image?.[0];
    const featured_original_image =
      req.files?.featured_image?.[0]?.filename || category.featured_image?.[1];

    let updatedDescription = description;
    if (description) {
      updatedDescription = await downloadImageAndReplaceSrcNonProperty(
        description,
        "category"
      );
    }

    await Category.findByIdAndUpdate(
      objectId,
      {
        userId,
        category_name,
        parent_category,
        category_icon: [category_icon, category_original_icon],
        featured_image: [featured_image, featured_original_image],
        description: updatedDescription,
        status,
      },
      { new: true }
    );

    return res.status(200).json({ message: "Category updated successfully." });
  } catch (err) {
    console.error("Error updating category:", err);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};
