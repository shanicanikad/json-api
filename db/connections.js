const mongoose = require("mongoose");

let mongoURL = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/Naruto";
  }
module.exports = mongoose;