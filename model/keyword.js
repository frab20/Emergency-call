const mongoose = require("mongoose");

// Membuat Schema
const Keyword = mongoose.model("Keyword", {
  keyword: { type: String, required: true },
  respon: { type: String, required: true },
});

module.exports = Keyword;
