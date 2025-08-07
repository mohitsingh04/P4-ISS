import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";

// Helper to generate clean slugs
export const generateSlug = (text) => {
  return text
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^a-z0-9\s-]/g, "")
    ?.replace(/\s+/g, "-")
    ?.replace(/-+/g, "-");
};

// Ensure folder exists or create it
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
};

// Multer diskStorage factory with auto folder creation
const createStorage = (destination, prefix = "img") =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      ensureDir(destination);
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      const parsed = path.parse(file.originalname);
      const sluggedName = generateSlug(parsed.name);
      cb(null, `${prefix}-${Date.now()}-${sluggedName}${parsed.ext}`);
    },
  });

// 1. Generic images folder
export const upload = multer({
  storage: createStorage("./images"),
  limits: { fileSize: 50 * 1024 * 1024 },
});

// 2. User images
export const userUpload = multer({
  storage: createStorage("../media/user"),
  limits: { fileSize: 50 * 1024 * 1024 },
});

// 3. Exam images
export const examUploadMulter = multer({
  storage: createStorage("../media/exam"),
  limits: { fileSize: 500 * 1024 * 1024 },
});

// 4. Category images
export const categoryUploadMulter = multer({
  storage: createStorage("../media/category"),
  limits: { fileSize: 50 * 1024 * 1024 },
});

// 5. Blog images
export const blogUploadMulter = multer({
  storage: createStorage("../media/blogs"),
  limits: { fileSize: 100 * 1024 * 1024, fieldSize: 100 * 1024 * 1024 },
});

// 7. Event images
export const eventUploadMulter = multer({
  storage: createStorage("../media/events"),
  limits: { fileSize: 100 * 1024 * 1024, fieldSize: 100 * 1024 * 1024 },
});

// 8. Profile resume uploads
export const ProfileResuemUploadMulter = multer({
  storage: createStorage("./images", "resume"),
  limits: { fileSize: 100 * 1024 * 1024, fieldSize: 100 * 1024 * 1024 },
});

// Image compression middleware preserving original + creating compressed
export const processImage = async (req, res, next) => {
  const files = req.files;
  if (!files) return next();

  try {
    for (const field in files) {
      for (const file of files[field]) {
        const inputPath = file.path;
        const destinationFolder = path.dirname(inputPath);

        // Parse the filename cleanly to avoid "--" issues
        const parsed = path.parse(file.filename);
        const sluggedName = generateSlug(parsed.name);
        const outputFilename = `${parsed.name}-compressed.webp`;
        const outputPath = path.join(destinationFolder, outputFilename);

        // Compress to webp while preserving the original
        await sharp(inputPath).webp({ quality: 40 }).toFile(outputPath);

        // Attach metadata to the file object for controller usage
        file.originalFilename = file.filename;
        file.originalPath = inputPath;
        file.webpFilename = outputFilename;
        file.webpPath = outputPath;
      }
    }
    next();
  } catch (error) {
    console.error("Image processing error:", error);
    return res.status(500).json({ error: "Image processing failed" });
  }
};
