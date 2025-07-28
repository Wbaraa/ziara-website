import Client from "../models/client.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res) => {
  try {
    const { serviceType, businessName, phoneNumber, email, password } =
      req.body;
    if (!serviceType || !businessName || !phoneNumber || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Client already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newClient = new Client({
      serviceType,
      businessName,
      phone: phoneNumber,
      email,
      password: hashPassword,
    });
    await newClient.save();

    const token = jwt.sign({ id: newClient._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const { password: _, ...clientData } = newClient.toObject();

    res.status(201).json({
      success: true,
      message: "Client registered successfully",
      token,
      user: clientData,
    });
  } catch (error) {
    console.error("Error during client registration:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const client = await Client.findOne({ email });
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const { password: _, ...clientData } = client.toObject();
    const token = jwt.sign({ id: client._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: clientData,
    });
  } catch (error) {
    console.error("Error during client login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updates = req.body;

    // Handle single image upload
    if (req.files?.profileImage?.[0]) {
      updates.profileImage = req.files.profileImage[0].path;
    }

    // Handle multiple image upload
    if (req.files?.referenceImages) {
      updates.referenceImages = req.files.referenceImages.map(
        (img) => img.path
      );
    }

    const updatedUser = await Client.findByIdAndUpdate(
      // req.userId,
      updates.userId,
      { $set: updates },
      { new: true, runValidators: true } //  new option returns the updated document and runValidators ensures validation rules are applied
    ).select("-password");
    if (!updatedUser) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
