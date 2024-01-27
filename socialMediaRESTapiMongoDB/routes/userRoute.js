import express  from "express";
import { deleteController, followController, getAllUsersController, getUserController, unfollowController, updateController } from "../controllers/userController.js";


//user API
const userRouter = express.Router()

//get user
userRouter.get("/:id", getUserController)
//get all users
userRouter.get("/", getAllUsersController)
//update user
userRouter.put("/:id", updateController)
// //delete user
userRouter.delete("/:id", deleteController)
// //follow user
userRouter.put("/follow/:id", followController)
// //unfollow user
userRouter.put("/unfollow/:id", unfollowController)


export default userRouter