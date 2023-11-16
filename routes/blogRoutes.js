const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// GET all blogs
router.get("/", blogController.getAllBlogs);
router.post("/", blogController.createBlog);

// Other routes: POST, PUT, DELETE, etc.

module.exports = router;
