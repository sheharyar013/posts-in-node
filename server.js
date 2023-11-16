// server.js
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Usersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/blogs", blogRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
