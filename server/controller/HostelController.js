import { addPropertyScore } from "../AnalyticController/PropertyScoreController.js";
import { HostelImageMover } from "../helper/FolderCleaners/PropertyImageMover.js";
import path from "path";
import Hostel from "../models/Hostel.js";
import { downloadImageAndReplaceSrc } from "../helper/FolderCleaners/EditorImagesController.js";

export const AddHostel = async (req, res) => {
  try {
    const {
      userId,
      property_id,
      hostel_name,
      hostel_price,
      hostel_description,
    } = req.body;

    const existingHostel = await Hostel.findOne({
      property_id,
      hostel_name: { $regex: new RegExp(`^${hostel_name}$`, "i") },
    });

    if (existingHostel) {
      return res.status(400).json({
        error: "Hostel with the same name already exists for this property",
      });
    }

    let updatedDescription = hostel_description;
    if (hostel_description) {
      updatedDescription = await downloadImageAndReplaceSrc(
        hostel_description,
        property_id
      );
    }

    const lastHostel = await Hostel.findOne().sort({
      uniqueId: -1,
    });
    let newUniqueId = lastHostel ? lastHostel.uniqueId + 1 : 1;

    const newHostel = new Hostel({
      uniqueId: newUniqueId,
      hostel_name,
      hostel_price,
      hostel_description: updatedDescription,
      userId,
      property_id,
      hostel_images: [],
    });

    await newHostel.save();

    const hostelCount = await Hostel.find({
      property_id: property_id,
    });
    if (hostelCount.length === 1) {
      await addPropertyScore({
        property_id,
        property_score: 10,
      });
    }

    return res.status(201).json({ message: "Hostel created successfully" });
  } catch (error) {
    console.error("AddHostel Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getHostelByPropertyId = async (req, res) => {
  try {
    const { property_id } = req.params;
    const hostel = await Hostel.find({ property_id: property_id });
    if (!hostel) {
      return res.status(404).json({ error: "Hostel Not Found" });
    }

    return res.status(200).json(hostel);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const EditHostel = async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const { property_id, hostel_name, hostel_price, hostel_description } =
      req.body;

    const existingHostel = await Hostel.findOne({ uniqueId });
    if (!existingHostel) {
      return res.status(404).json({ error: "Hostel not found." });
    }

    const duplicateHostel = await Hostel.findOne({
      uniqueId: { $ne: uniqueId },
      property_id,
      hostel_name: hostel_name,
    });

    if (duplicateHostel) {
      return res.status(400).json({
        error:
          "Another Hostel with the same name already exists for this property.",
      });
    }

    let updatedDescription = hostel_description;
    if (hostel_description) {
      updatedDescription = await downloadImageAndReplaceSrc(
        hostel_description,
        property_id
      );
    }

    const updatedHostel = await Hostel.findOneAndUpdate(
      { uniqueId },
      {
        $set: {
          hostel_name,
          hostel_price,
          hostel_description: updatedDescription,
        },
      },
      { new: true }
    );

    return res.status(200).json({ message: "Hostel updated successfully" });
  } catch (error) {
    console.error("EditHostel Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const AddHostelImages = async (req, res) => {
  try {
    const { uniqueId } = req.params;

    let newImages = [];
    console.log(uniqueId);

    if (req?.files?.images && req.files.images.length > 0) {
      for (const file of req.files.images) {
        if (file?.originalFilename && file?.webpFilename) {
          newImages.push(file.originalFilename);
          newImages.push(file.webpFilename);
        } else {
          console.warn("Skipping incomplete image pair:", file);
        }
      }

      if (newImages.length % 2 !== 0) {
        return res.status(400).json({
          message: "Uneven number of original and webp images detected.",
        });
      }
    }

    if (newImages.length === 0) {
      return res.status(400).json({
        message: "No valid Hostel images provided.",
      });
    }

    const existingHostel = await Hostel.findOne({ uniqueId });
    if (!existingHostel) {
      return res.status(404).json({
        message: "Hostel not found with the given uniqueId.",
      });
    }

    const currentCount = existingHostel.hostel_images.length;
    const total = currentCount + newImages.length;

    if (total > 16) {
      return res.status(400).json({
        error: `Cannot add more than 8 image. Currently have ${
          currentCount / 2
        } images.`,
      });
    }

    const updatedHostel = await Hostel.findOneAndUpdate(
      { uniqueId },
      { $push: { hostel_images: { $each: newImages } } },
      { new: true }
    );

    await HostelImageMover(req, res, updatedHostel?.property_id);

    return res
      .status(200)
      .json({ message: "Hostel images added successfully." });
  } catch (error) {
    console.error("Error adding Hostel images:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const removeHostelImages = async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const { webpPaths } = req.body;

    if (!Array.isArray(webpPaths) || webpPaths.length === 0) {
      return res.status(400).json({
        message: "Invalid or empty image path array.",
      });
    }

    const hostel = await Hostel.findOne({ uniqueId });
    if (!hostel) {
      return res.status(404).json({
        message: "No Hostel found for this uniqueId.",
      });
    }

    const pathsToRemove = new Set();

    for (const webpPath of webpPaths) {
      pathsToRemove.add(webpPath);

      const webpFileName = path.basename(webpPath);
      const folderPath = path.dirname(webpPath);

      const match = webpFileName.match(/^img-\d+-(.+)-compressed\.webp$/);
      if (!match) {
        console.warn(`Filename pattern not matched for: ${webpFileName}`);
        continue;
      }

      const fileKey = match[1];

      const originalPath = hostel.hostel_images.find((p) => {
        const filename = path.basename(p);
        const dir = path.dirname(p);
        const origMatch = filename.match(/^img-\d+-(.+)\.[a-zA-Z0-9]+$/);

        return (
          dir === folderPath &&
          origMatch &&
          origMatch[1] === fileKey &&
          !filename.endsWith(".webp")
        );
      });

      if (originalPath) {
        pathsToRemove.add(originalPath);
        console.log(`Found original for ${webpFileName}: ${originalPath}`);
      } else {
        console.warn(`Original file not found for key: ${fileKey}`);
      }
    }

    const updatedImages = hostel.hostel_images.filter(
      (img) => !pathsToRemove.has(img)
    );

    hostel.hostel_images = updatedImages;
    await hostel.save();

    return res.status(200).json({
      message: "Selected Hostel images removed from database.",
      Hostel: hostel,
    });
  } catch (error) {
    console.error("Error removing Hostel images:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const DeleteHostel = async (req, res) => {
  try {
    const { objectId } = req.params;
    console.log(objectId);

    if (!objectId) {
      return res.status(400).json({ error: "accommodation ID is Required" });
    }

    const hostel = await Hostel.findById(objectId);
    if (!hostel) {
      return res.status(404).json({ error: "Accommodation not found" });
    }

    await Hostel.findByIdAndDelete(objectId);

    return res
      .status(200)
      .json({ message: "Accommodation deleted successfully" });
  } catch (error) {
    console.error("DeleteHostel Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
