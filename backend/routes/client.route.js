import express from "express";
import { logIn, SignUp, updateProfile } from "../controllers/client.controller";

const clientRoutes = express.Router();

clientRoutes.post("/signup", SignUp);
clientRoutes.post("/login", logIn);
clientRoutes.put(
  "/complete-profile",
  upload.single("profileImage"),
  updateProfile
);
clientRoutes.put(
  "/update-profile",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "referenceImages", maxCount: 5 },
  ]),
  updateProfile
);

export default clientRoutes;
