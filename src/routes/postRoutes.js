import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", authMiddleware, createPost);

router.get("/", authMiddleware, getPosts);

router.put("/:id", authMiddleware, updatePost);

router.delete("/:id", authMiddleware, deletePost);

export default router;