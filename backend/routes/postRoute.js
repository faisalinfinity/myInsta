const express=require("express")
const { getPost, postComments, postLikes, newPost } = require("../controller/postController")
const postRoute=express.Router()

postRoute.get("/posts",getPost)
postRoute.post("/posts",newPost)
postRoute.post("/comments",postComments)
postRoute.post("likes",postLikes)

module.exports={
    postRoute
}