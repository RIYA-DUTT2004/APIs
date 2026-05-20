import Post from "../models/Post.js";


// CREATE
export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // validation
    if (!title || !content) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const post = await Post.create({
      title,
      content,
      createdBy: req.user.id,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// READ
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("createdBy");

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(
      req.params.id
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    // admin OR owner
    if (
      req.user.role !== "Admin" &&
      post.createdBy.toString() !== req.user.id
    ) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    post.title =
      req.body.title || post.title;

    post.content =
      req.body.content || post.content;

    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(
      req.params.id
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    // only admin
    if (req.user.role !== "Admin") {
      return res.status(403).json({
        message: "Only admin can delete",
      });
    }

    await post.deleteOne();

    res.json({
      message: "Post deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};