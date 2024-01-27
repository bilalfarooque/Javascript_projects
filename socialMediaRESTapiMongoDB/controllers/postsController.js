import User from "../models/Post.js";

export const createPostController = async(req, res)=>{
    const newPost = new Post(req.body)

    try {
        const postData = await  newPost.save()
        res.status(200).json(postData)

    } catch (error) {
        res.status(500).json({
            status : false,
            error: 'Internal server Error'
        })
    }
}