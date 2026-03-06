const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  author: String,
  tags: [String],
  status: {
    type: String,
    enum: ["Want to Read", "Reading", "Completed"],
    default: "Want to Read",
  },
});

module.exports = mongoose.model("Book", BookSchema);