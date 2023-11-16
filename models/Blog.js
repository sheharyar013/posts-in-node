const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true }, // Making the title field unique
    content: String,
    createdAt: { type: Date, default: Date.now },
    // other fields as needed
  },
  { timestamps: true }
);

const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
