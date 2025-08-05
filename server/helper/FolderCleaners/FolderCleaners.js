import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import User from "../../models/Users.js";
import Course from "../../models/Courses.js";
import Category from "../../models/Category.js";
import Property from "../../models/Property.js";
import Gallery from "../../models/Gallery.js";
import Achievements from "../../models/Achievements.js";
import Teachers from "../../models/Teachers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const UserFolderCleaners = async () => {
  try {
    const allUsers = await User.find();

    const profileImages = new Set();
    allUsers.forEach((user) => {
      if (user.profile && Array.isArray(user.profile)) {
        user.profile.forEach((img) => profileImages.add(img));
      }
    });

    const userMediaFolder = path.join(__dirname, "../../media/users");

    const filesInFolder = await fs.readdir(userMediaFolder);

    await Promise.all(
      filesInFolder.map(async (file) => {
        const filePath = `media/users/${file}`;

        if (!profileImages.has(filePath)) {
          await fs.unlink(path.join(userMediaFolder, file));
        }
      })
    );
  } catch (error) {
    console.error("Error during cleanup");
  }
};

export const courseFolderCleaners = async () => {
  try {
    const allCourses = await Course.find();

    const courseImages = new Set();
    allCourses.forEach((course) => {
      if (course.image && Array.isArray(course.image)) {
        course.image.forEach((img) => {
          if (img) courseImages.add(img);
        });
      }
    });

    const courseMediaFolder = path.join(__dirname, "../../media/course");

    const filesInFolder = await fs.readdir(courseMediaFolder);

    await Promise.all(
      filesInFolder.map(async (file) => {
        const filePath = `media/course/${file}`;

        if (!courseImages.has(filePath)) {
          await fs.unlink(path.join(courseMediaFolder, file));
        }
      })
    );
  } catch (error) {
    console.error("Error during cleanup:");
  }
};

export const categoryFolderCleaners = async () => {
  try {
    const allCategories = await Category.find();

    const categoryImages = new Set();
    allCategories.forEach((category) => {
      if (category.category_icon && Array.isArray(category.category_icon)) {
        category.category_icon.forEach((icon) => {
          if (icon) categoryImages.add(icon);
        });
      }

      if (category.featured_image && Array.isArray(category.featured_image)) {
        category.featured_image.forEach((image) => {
          if (image) categoryImages.add(image);
        });
      }
    });

    const categoryMediaFolder = path.join(__dirname, "../../media/category");

    const filesInFolder = await fs.readdir(categoryMediaFolder);

    await Promise.all(
      filesInFolder.map(async (file) => {
        const filePath = `media/category/${file}`;

        if (!categoryImages.has(filePath)) {
          await fs.unlink(path.join(categoryMediaFolder, file));
        }
      })
    );
  } catch (error) {
    console.error("Error during cleanup:");
  }
};

export const propertyMainFolderCleaners = async () => {
  try {
    const allProperties = await Property.find();

    for (const property of allProperties) {
      const uniqueId = property.uniqueId;
      const propertyFolder = path.join(
        __dirname,
        `../../media/${uniqueId}/main`
      );

      try {
        const filesInFolder = await fs.readdir(propertyFolder);

        const validImages = new Set();

        if (property.property_logo && Array.isArray(property.property_logo)) {
          property.property_logo.forEach((logo) => {
            if (logo) validImages.add(logo);
          });
        }

        if (property.featured_image && Array.isArray(property.featured_image)) {
          property.featured_image.forEach((image) => {
            if (image) validImages.add(image);
          });
        }
        await Promise.all(
          filesInFolder.map(async (file) => {
            const filePath = `media/${uniqueId}/main/${file}`;

            if (!validImages.has(filePath)) {
              await fs.unlink(path.join(propertyFolder, file));
            }
          })
        );
      } catch (error) {
        console.warn(`Skipping cleanup for property`);
      }
    }
  } catch (error) {
    console.error("Error during property folder cleanup");
  }
};

export const propertyGalleryFolderCleaners = async () => {
  try {
    const allGalleries = await Gallery.find();

    for (const gallery of allGalleries) {
      const uniqueId = gallery.uniqueId;
      const galleryFolder = path.join(
        __dirname,
        `../../media/${uniqueId}/gallery`
      );

      try {
        const filesInFolder = await fs.readdir(galleryFolder);

        const validImages = new Set(gallery.gallery || []);

        await Promise.all(
          filesInFolder.map(async (file) => {
            const filePath = `media/${gallery?.propertyId}/gallery/${file}`;

            if (!validImages.has(filePath)) {
              await fs.unlink(path.join(galleryFolder, file));
            }
          })
        );
      } catch (error) {
        console.warn(`Skipping gallery cleanup for property`);
      }
    }
  } catch (error) {
    console.error("Error during property gallery cleanup");
  }
};

export const propertyAchievementsFolderCleaners = async () => {
  try {
    const allAchievements = await Achievements.find();

    for (const achievement of allAchievements) {
      const uniqueId = achievement.uniqueId;
      const achievementsFolder = path.join(
        __dirname,
        `../../media/${uniqueId}/achievements`
      );

      try {
        const filesInFolder = await fs.readdir(achievementsFolder);

        const validImages = new Set(achievement.achievements || []);

        await Promise.all(
          filesInFolder.map(async (file) => {
            const filePath = `media/${achievement?.property_id}/achievements/${file}`;

            if (!validImages.has(filePath)) {
              await fs.unlink(path.join(achievementsFolder, file));
            }
          })
        );
      } catch (error) {
        console.warn(`Skipping achievements cleanup for property`);
      }
    }
  } catch (error) {
    console.error("Error during achievements cleanup");
  }
};

export const teacherProfileFolderCleaners = async () => {
  try {
    const allTeachers = await Teachers.find();

    for (const teacher of allTeachers) {
      const { property_id, profile } = teacher;

      if (!property_id) {
        console.warn(`Skipping teacher `);
        continue;
      }

      const teacherFolder = path.join(
        __dirname,
        `../../media/${property_id}/teachers`
      );

      try {
        const filesInFolder = await fs.readdir(teacherFolder);

        const validImages = new Set(profile.filter((img) => img !== null));

        await Promise.all(
          filesInFolder.map(async (file) => {
            const filePath = `media/${property_id}/teachers/${file}`;

            if (!validImages.has(filePath)) {
              await fs.unlink(path.join(teacherFolder, file));
            }
          })
        );
      } catch (error) {
        console.warn(`Skipping teacher profile cleanup for property`);
      }
    }
  } catch (error) {
    console.error("Error during teacher profile cleanup");
  }
};
