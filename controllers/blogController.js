const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(500).json({ message: "Title and Content are required!" });
  }

  const post = new Blog({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.title === 1) {
      res.status(400).json({ message: "Title must be unique" });
    } else {
      res.status(500).json({ message: err.message });
    }
  }
};

// Other controller actions for creating, updating, deleting blogs, etc.
