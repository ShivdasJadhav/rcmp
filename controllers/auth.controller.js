import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a new admin
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({
      name,
      email,
      contact,
      password: hashedPassword,
    });
    if (!newAdmin)
      return res.status(400).json({ message: "Admin registration failed" });
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login admin
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate Access Token (expires in 1 hour)
    const accessToken = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Generate Refresh Token (expires in 7 days)
    const refreshToken = jwt.sign(
      { id: admin._id },
      process.env.REFRESH_SECRET_KEY,
      { expiresIn: "7d" }
    );

    // Store refresh token in HTTP-only cookie
    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      });

    res.json({ message: "Login successful", accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an admin by ID
export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ error: "Server error during logout" });
  }
};
