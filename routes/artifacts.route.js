import express from "express";
import {
  createArtifact,
  getAllArtifacts,
} from "../controllers/artifact.controller.js";
import { toggleLike, getLikes } from "../controllers/likes.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// Apply auth middleware to protect these routes
router.post("/", authMiddleware,upload.single("file"), createArtifact);
router.get("/", authMiddleware, getAllArtifacts);

// Like routes
router.post("/:id/like", authMiddleware, toggleLike);
router.get("/:id/likes", getLikes);


export default router;