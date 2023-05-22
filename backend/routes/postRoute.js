const express = require("express");
const {
  getPost,
  postComments,
  postLikes,
  newPost,
  removeComment,
  removeLike,
  getSinglePost,
} = require("../controller/postController");
const { authorization } = require("../middlewares/authorization");
const postRoute = express.Router();

postRoute.use(authorization);
postRoute.get("/posts", getPost);
postRoute.get("/posts/:id", getSinglePost);
postRoute.post("/posts", newPost);
postRoute.post("/comments", postComments);
postRoute.post("/likes", postLikes);
postRoute.post("/comments/:postId/:commentId", removeComment);
postRoute.post("/likes/:postId", removeLike);

module.exports = {
  postRoute,
};
