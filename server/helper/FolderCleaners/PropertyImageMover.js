import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import Property from "../../models/Property.js";
import Team from "../../models/Team.js";
import Gallery from "../../models/Gallery.js";
import Hostel from "../../models/Hostel.js";

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};
export const MainImageMover = async (req, res, propertyId, fieldName) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldDir = path.join(__dirname, "../../images");
    const newDir = path.join(__dirname, `../../../media/${propertyId}/main`);
    await fs.mkdir(newDir, { recursive: true });

    const property = await Property.findOne({ uniqueId: propertyId });
    if (!property) {
      console.warn(`Property not found for ID: ${propertyId}`);
      return;
    }

    if (!["property_logo", "featured_image"].includes(fieldName)) {
      console.warn(`Invalid field name: ${fieldName}`);
      return;
    }

    const imageArray = property[fieldName];
    if (!Array.isArray(imageArray) || imageArray.length === 0) {
      console.warn(`No images found in field: ${fieldName}`);
      return;
    }

    const updatedImagePaths = [];
    const skippedFiles = [];

    for (const imgPath of imageArray) {
      const imgName = imgPath.split(/\\|\//).pop();

      // If already moved
      if (imgPath.startsWith(`${propertyId}/main/`)) {
        updatedImagePaths.push(imgPath);
        continue;
      }

      const oldPath = path.join(oldDir, imgName);
      const newPath = path.join(newDir, imgName);

      if (await fileExists(oldPath)) {
        try {
          await fs.rename(oldPath, newPath);
          updatedImagePaths.push(`${propertyId}/main/${imgName}`);
        } catch (err) {
          console.warn(`Failed to move ${imgName}: ${err.message}`);
          skippedFiles.push(imgName);
        }
      } else {
        console.warn(`File not found: ${oldPath}`);
        skippedFiles.push(imgName);
      }
    }

    if (updatedImagePaths.length > 0) {
      property[fieldName] = updatedImagePaths;
      await property.save();
      console.log(`${fieldName} images for property ${propertyId} updated.`);

      if (skippedFiles.length > 0) {
        console.warn(`Some files were skipped: ${skippedFiles.join(", ")}`);
      }
    } else {
      console.warn(`No files were moved. Nothing saved for ${fieldName}`);
    }
  } catch (error) {
    console.error("Error in MainImageMover:", error);
  }
};

export const GalleryImageMover = async (req, res, propertyId) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldDir = path.join(__dirname, "../../images");
    const newDir = path.join(__dirname, `../../../media/${propertyId}/gallery`);
    await fs.mkdir(newDir, { recursive: true });

    const property = await Property.findOne({ uniqueId: propertyId });
    if (!property) {
      console.warn(`Property not found for ID: ${propertyId}`);
      return;
    }

    const galleryEntries = await Gallery.find({ propertyId: propertyId });

    for (const gallery of galleryEntries) {
      if (!Array.isArray(gallery.gallery)) continue;

      const updatedGalleryPaths = [];

      for (const imgPath of gallery.gallery) {
        const imgName = imgPath.split(/\\|\//).pop();

        if (imgPath.startsWith(`${propertyId}/gallery/`)) {
          updatedGalleryPaths.push(imgPath);
          continue;
        }

        const oldPath = path.join(oldDir, imgName);
        const newPath = path.join(newDir, imgName);

        if (await fileExists(oldPath)) {
          try {
            await fs.rename(oldPath, newPath);
            updatedGalleryPaths.push(`${propertyId}/gallery/${imgName}`);
          } catch (moveErr) {
            console.warn(`Failed to move ${imgName}: ${moveErr.message}`);
          }
        } else {
          console.warn(`File not found: ${oldPath}`);
        }
      }

      if (updatedGalleryPaths.length === gallery.gallery.length) {
        gallery.gallery = updatedGalleryPaths;
        await gallery.save();
      }
    }

    console.log(
      `Gallery images for property ${propertyId} moved successfully.`
    );
  } catch (error) {
    console.error("Error in GalleryImageMover:", error);
  }
};

export const HostelImageMover = async (req, res, propertyId) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldDir = path.join(__dirname, "../../images");
    const newDir = path.join(__dirname, `../../../media/${propertyId}/hostel`);
    await fs.mkdir(newDir, { recursive: true });

    const property = await Property.findOne({ uniqueId: propertyId });
    if (!property) {
      console.warn(`Property not found for ID: ${propertyId}`);
      return;
    }

    const HostelEntries = await Hostel.find({
      property_id: propertyId,
    });

    for (const hostel of HostelEntries) {
      if (!Array.isArray(hostel.hostel_images)) continue;

      const updatedHostelPaths = [];

      for (const imgPath of hostel.hostel_images) {
        const imgName = imgPath.split(/\\|\//).pop();

        if (imgPath.startsWith(`${propertyId}/hostel/`)) {
          updatedHostelPaths.push(imgPath);
          continue;
        }

        const oldPath = path.join(oldDir, imgName);
        const newPath = path.join(newDir, imgName);

        if (await fileExists(oldPath)) {
          try {
            await fs.rename(oldPath, newPath);
            updatedHostelPaths.push(`${propertyId}/hostel/${imgName}`);
          } catch (moveErr) {
            console.warn(`Failed to move ${imgName}: ${moveErr.message}`);
          }
        } else {
          console.warn(`File not found: ${oldPath}`);
        }
      }

      if (updatedHostelPaths.length === hostel.hostel_images.length) {
        hostel.hostel_images = updatedHostelPaths;
        await hostel.save();
      }
    }

    console.log(`hostel images for property ${propertyId} moved successfully.`);
  } catch (error) {
    console.error("Error in hostelImageMover:", error);
  }
};

export const TeamImageMover = async (req, res, propertyId) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldDir = path.join(__dirname, "../../images");
    const newDir = path.join(__dirname, `../../../media/${propertyId}/team`);
    await fs.mkdir(newDir, { recursive: true });

    const teams = await Team.find({ property_id: propertyId });

    for (const team of teams) {
      const newProfilePaths = [];
      const skippedFiles = [];

      for (const imgPath of team.profile) {
        const imgName = imgPath?.split(/\\|\//).pop();

        if (imgPath?.startsWith(`${propertyId}/team/`)) {
          newProfilePaths.push(imgPath);
          continue;
        }

        const oldPath = path.join(oldDir, imgName);
        const newPath = path.join(newDir, imgName);

        if (await fileExists(oldPath)) {
          try {
            await fs.rename(oldPath, newPath);
            newProfilePaths.push(`${propertyId}/team/${imgName}`);
          } catch (err) {
            console.warn(`Failed to move ${imgName}: ${err.message}`);
            skippedFiles.push(imgName);
          }
        } else {
          console.warn(`File not found: ${oldPath}`);
          skippedFiles.push(imgName);
        }
      }

      // Only update if we moved both
      if (newProfilePaths.length === 2) {
        team.profile = newProfilePaths;
        await team.save();
        console.log(`Updated team ${team.name}`);
      } else {
        console.warn(
          `Mismatch in profile image count for ${team.name}. Expected 2, got ${newProfilePaths.length}`
        );
      }
    }

    console.log(`team images moved successfully for property: ${propertyId}`);
  } catch (error) {
    console.error("Error in teamImageMover:", error);
  }
};
