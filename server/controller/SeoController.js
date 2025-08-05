import { addSeoScore } from "../AnalyticController/SeoScoreController.js";
import { downloadImageAndReplaceSrc } from "../helper/FolderCleaners/EditorImagesController.js";
import Seo from "../models/Seo.js";

export const addSeo = async (req, res) => {
  try {
    const {
      title,
      slug,
      meta_description,
      primary_focus_keyword,
      json_schema,
      property_id,
    } = req.body;

    let seoScore = 50;

    if (primary_focus_keyword.length === 1) {
      seoScore += 12.5;
    }
    if (primary_focus_keyword.length === 2) {
      seoScore += 25;
    }

    if (meta_description) {
      seoScore += 25;
    }

    if (primary_focus_keyword.length > 2) {
      return res
        .status(400)
        .json({ error: "You can add a maximum of 2 focus keywords." });
    }

    const existSeo = await Seo.findOne({ title, property_id });
    if (existSeo) {
      return res.status(400).json({ error: "This SEO title already exists!" });
    }

    let updatedDescription = meta_description;
    if (meta_description) {
      updatedDescription = await downloadImageAndReplaceSrc(
        meta_description,
        property_id
      );
    }

    const lastSeo = await Seo.findOne().sort({ _id: -1 }).limit(1);
    const uniqueId = lastSeo ? lastSeo.uniqueId + 1 : 1;

    const newSeo = new Seo({
      uniqueId,
      title,
      slug,
      meta_description: updatedDescription,
      primary_focus_keyword,
      json_schema,
      property_id,
    });

    await newSeo.save();
    await addSeoScore({ seo_score: seoScore, property_id });
    return res.status(201).json({ message: "SEO added successfully." });
  } catch (error) {
    console.error("Error adding SEO:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const updateSeo = async (req, res) => {
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

    const existSeo = await Seo.findById(objectId);
    if (!existSeo) {
      return res.status(404).json({ error: "SEO record not found." });
    }

    let seoScore = 50;

    if (primary_focus_keyword.length === 1) {
      seoScore += 12.5;
    }
    if (primary_focus_keyword.length === 2) {
      seoScore += 25;
    }

    if (meta_description) {
      seoScore += 25;
    }

    let updatedDescription = meta_description;
    if (meta_description) {
      updatedDescription = await downloadImageAndReplaceSrc(
        meta_description,
        existSeo?.property_id
      );
    }

    if (primary_focus_keyword.length > 2) {
      return res
        .status(400)
        .json({ error: "You can add a maximum of 3 focus keywords." });
    }

    await Seo.findByIdAndUpdate(
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

    await addSeoScore({
      seo_score: seoScore,
      property_id: existSeo?.property_id,
    });

    return res.status(200).json({ message: "SEO updated successfully." });
  } catch (error) {
    console.error("Error updating SEO:", error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

export const getSeo = async (req, res) => {
  try {
    const seo = await Seo.find();
    return res.status(200).json(seo);
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const getSeoById = async (req, res) => {
  try {
    const { objectId } = req.params;
    const seo = await Seo.findById(objectId);

    if (!seo) {
      return res.status(404).json({ error: "SEO record not found!" });
    }

    return res.status(200).json(seo);
  } catch (error) {
    console.error("Error fetching SEO by ID:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const getSeoByPropertyId = async (req, res) => {
  try {
    const { property_id } = req.params;
    const seo = await Seo.findOne({ property_id });

    if (!seo) {
      return res.status(404).json({ error: "SEO record not found!" });
    }

    return res.status(200).json(seo);
  } catch (error) {
    console.error("Error fetching SEO by Property ID:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const deleteSeo = async (req, res) => {
  try {
    const { objectId } = req.params;
    const seo = await Seo.findById(objectId);

    if (!seo) {
      return res.status(404).json({ error: "SEO entry not found." });
    }

    await Seo.findByIdAndDelete(objectId);
    await addSeoScore({ seo_score: 0, property_id: seo?.property_id });
    return res.status(200).json({ message: "SEO entry deleted successfully." });
  } catch (error) {
    console.error("Error deleting SEO entry:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};
