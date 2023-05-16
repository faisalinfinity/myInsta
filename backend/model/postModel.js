const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
  replierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  replies: [this], // Nested array of sub-replies
});

const commentSchema = new mongoose.Schema({
  commentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  replies: [replySchema], // Array of replies
});

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  image: {
    type: String,
  },
  video: {
    type: String,
  },
  reel: {
    type: String,
  },
  caption: {
    type: String,
    required: true,
  },
  likes:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }],
  comments: [commentSchema], // Array of comments
  public:{type:Boolean,required:true}
});

module.exports = mongoose.model("post", postSchema);
