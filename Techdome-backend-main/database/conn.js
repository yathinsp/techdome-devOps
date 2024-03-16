const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB || "mongodb://localhost:27017/userBlog")
  .then(() => {
    console.log("connection established...!");
  })
  .catch((error) => {
    console.log(error);
  });