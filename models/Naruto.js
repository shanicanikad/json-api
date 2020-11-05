const mongoose = require("../db/connections")

const narutoSchema = new mongoose.Schema ({

title: String,
airing: Boolean,
synopsis: String,
type: String,
episodes: Number,
score: Number,
start_date: Date,
end_date: Date,
members: Number,
rated: String
})

module.exports = mongoose.model("Naruto",narutoSchema)   