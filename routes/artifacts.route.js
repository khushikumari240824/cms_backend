import express from "express";
import {
  createArtifact,
  getAllArtifacts,
} from "../controllers/artifact.controller.js";
import { toggleLike, getLikes } from "../controllers/likes.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
import { apiLimiter } from "../middleware/rateLimiter.middleware.js";
import { authorizeRole } from "../middleware/authorizerole.middleware.js";

const router = express.Router();

// Apply auth middleware to protect these routes
router.post("/", authMiddleware,upload.single("file"), createArtifact);
router.get("/",apiLimiter, authMiddleware,authorizeRole("ADMIN"), getAllArtifacts);

// Like routes
router.post("/:id/like", authMiddleware, toggleLike);
router.get("/:id/likes", getLikes);


export default router;