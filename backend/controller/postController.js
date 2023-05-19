const postModel = require("../model/postModel");
const { userModel } = require("../model/userModel");

const getPost = async (req, res) => {
  const { requesterId } = req.body;
  try {
    const requester = await userModel.findOne({ _id: requesterId });
    const followingIds = requester.following;

    const following_posts = await postModel
      .find({ userId: { $in: followingIds } })
      .sort({ createdAt: -1 });

    res.json({
      posts: following_posts,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const newPost = async (req, res) => {
  try {
    let new_post = new postModel(req.body);
    await newPost.save();

    res.send("posted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postLikes = async (req, res) => {
  const { postId } = req.params;
  const { likerId } = req.body;

  try {
    let post = await postModel.findOne({ _id: postId });
    post.likes.push(likerId);

    await post.save();

    res.send("likes updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postComments = async (req, res) => {
  const { postId } = req.params;
  const { commentorId } = req.body;

  try {
    let post = await postModel.findOne({ _id: postId });
    post.comments.push(req.body);

    await post.save();
    res.send("comments updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const removeComment = async () => {
  const { postId } = req.params;
  const { commentId } = req.body;

  try {
    let post = await postModel.findOne({ _id: postId });
   let filtered= post?.comments?.filter((el)=>el._id!==commentId)
   post.comments=filtered;


    await post.save();
    res.send("comment deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const removeLike = async () => {
  const { postId } = req.params;
  const { likerId } = req.body;

  try {
    let post = await postModel.findOne({ _id: postId });
   let filtered= post?.likes?.filter((el)=>el!=likerId)
   post.likes=filtered;


    await post.save();
    res.send("like removed");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  getPost,
  postComments,
  postLikes,
  newPost,
};
