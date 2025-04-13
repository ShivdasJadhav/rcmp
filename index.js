import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

// Routes
import jobRoutes from "./routes/jobListing.route.js";
import galleryRoutes from "./routes/gallery.route.js";
import enquiryRoute from "./routes/enquiry.route.js";
import tcRequestRoute from "./routes/tcRequest.route.js";
import admissionRoute from "./routes/admission.route.js";
import adminRoute from "./routes/auth.route.js";
// razorpay
import createPaymentOrder from "./utils/razorpay.js";

const app = express();
dotenv.config();

app.use(cors({ credentials: true, origin: process.env.Front_End_URL }));
app.use(express.json());
app.use(cookieParser());

const __dirname = path.resolve();
app.use(
  "/v1/uploads/gallery",
  express.static(path.join(__dirname, "uploads/gallery"))
);

// 🔹 Apply auth middleware globally, but exclude login/register routes
app.use("/v1/api/auth", adminRoute);
app.use("/v1/api/jobs", jobRoutes);
app.use("/v1/api/gallery", galleryRoutes);
app.use("/v1/api/enquiry", enquiryRoute);
app.use("/v1/api/tc-request", tcRequestRoute);
app.use("/v1/api/admission", admissionRoute);
// razorpay
app.use("/v1/api/create-razorpay-order", createPaymentOrder);

// serving frontend files
app.use("/", express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ DB connected:", process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", process.env.MONGO_URL);
    console.error(err);
    process.exit(1);
  });
