import express  from "express";
import { createPostController } from "../controllers/postsController.js";

//user API
const postRouter = express.Router()

//create a post
postRouter.post("/", createPostController)

//update a post
//delete a post
//get a post
//get all timeline posts
//like a post
//comment a post


export default postRouter