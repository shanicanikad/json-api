const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/naruto", {useNewUrlParser:true});

module.exports = mongoose;