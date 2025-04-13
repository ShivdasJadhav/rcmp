import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

// 🔹 Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🔹 Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "admission_documents",
    resource_type: "auto", // Ensures Cloudinary handles any type (image/pdf/etc.)
    public_id: `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`,
  }),
});

export const uploadCloud = multer({ storage }).fields([
  { name: "studentAadharFile" },
  { name: "studentPhoto" },
  { name: "studentMigrationDocument" },
  { name: "studentBirthCertificate" },
  { name: "fatherAadharFile" },
  { name: "fatherPhoto" },
  { name: "motherAadharFile" },
  { name: "motherPhoto" },
  { name: "domicileCertificate" },
  { name: "abcCard" },
  { name: "previousSchoolTC" },
  { name: "previousMarksheet" },
  { name: "scholarshipDocument" },
]);
