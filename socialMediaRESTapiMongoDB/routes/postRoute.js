import express  from "express";
import { commentPostController, createPostController, deletePostController, getAllPostsController, getPostController, likePostController, updatePostController } from "../controllers/postsController.js";

//user API
const postRouter = express.Router()

//create a post
postRouter.post("/", createPostController)
//update a post
postRouter.put("/:id", updatePostController)
//delete a post
postRouter.delete("/:id", deletePostController)
//like a post
postRouter.put("/:id/like", likePostController)
//comment a post
postRouter.put("/:id/comment", commentPostController)
//get a post
postRouter.get("/", getAllPostsController)
//get all timeline posts
postRouter.get("/:id", getPostController)


export default postRouter