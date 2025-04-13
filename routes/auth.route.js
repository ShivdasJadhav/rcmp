import express from "express";
import {
  loginAdmin,
  registerAdmin,
  getAdminById,
  logout,
} from "../controllers/auth.controller.js";
import { authenticateAdmin } from "../utils/authenticate.js";

const router = express.Router();

// 🔹 Public routes (No authentication required)
router.post("/login", loginAdmin);
router.post("/register", authenticateAdmin, registerAdmin);
router.post("/logout", logout);

// 🔹 Protected routes (Require authentication)
router.get("/", authenticateAdmin, getAdminById);

export default router;
