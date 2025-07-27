import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
// import { verifyToken } from "./middleware/auth.js";
import clientRoutes from "./routes/client.route.js";
// import connectCloudinary from "./config/cloudinary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/clients", clientRoutes);
// app.use("/api/clients", verifyToken , clientRoutes);

app.listen(PORT, () => {
  connectDB();
  // connectCloudinary();
  console.log(`Server running at http://localhost:${PORT}`);
});
