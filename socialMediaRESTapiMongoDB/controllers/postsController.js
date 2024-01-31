import Post from "../models/Post.js";
import User from "../models/Register.js"

export const createPostController = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const postData = await newPost.save();
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json({
      status: false,
      error: "Internal server Error",
    });
  }
};

export const updatePostController = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      if (post.userId === req.body.userId) {
        let updatedPost = await post.updateOne({ $set: req.body });
        res.status(200).json({
          status: true,
          message: "Post Updated Successfully",
          data: updatedPost,
        });
      } else {
        return res.status(401).json({
          status: false,
          message: "Unauthorized User",
        });
      }
    } else {
      return res.status(404).json({
        status: false,
        message: "No Post Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "internal server error",
      error: error,
    });
  }
};

// delete a specific post by id
export const deletePostController = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json({
          status: true,
          message: "Post deleted Successfully",
        });
      } else {
        return res.status(401).json({
          status: false,
          message: "Unauthorized User",
        });
      }
    } else {
      return res.status(404).json({
        status: false,
        message: "No Post Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "internal server error",
      error: error,
    });
  }
};

//like post
export const likePostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.body.userId;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(400).json({
        status: false,
        message: "Post ID is required",
      });
    }
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json({
        status: true,
        message: "post liked by " + userId,
      });
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json({
        status: true,
        message: "post disliked by " + userId,
      });
    }
  } catch (error) {
    console.log("Error in Like Controller : ", error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

//comment post
export const commentPostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.body.userId;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(400).json({
        status: false,
        message: "Post ID is required",
      });
    }
    if (!post.comments.includes(userId)) {
      await post.updateOne({ $push: { comments: userId } });
      res.status(200).json({
        status: true,
        message: "post commented by " + userId,
      });
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json({
        status: true,
        message: "comment deleted by " + userId,
      });
    }
  } catch (error) {
    console.log("Error in comment Controller : ", error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export const getPostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        status: false,
        message: "No post found with given id!",
      });
    }

    res.status(200).json({
      status: true,
      message: "single post data",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      data: error,
    });
  }
};


export const getAllPostsController = async (req, res) => {
  try {
   
    const currentUser = await User.findById(req.body.userId);

    const userPosts = await Post.find({ userId: currentUser._id });
 
    //promise all is used for map function otherwise it will not work  properly because the map function doesnot wait for one request to complete
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId }).sort({ createdAt: -1 });
      })
    );

    if (!userPosts) {
      return res.status(404).json({
        status: false,
        message: "No post found of userId",
      });
    }

    if (!friendPosts) {
      return res.status(404).json({
        status: false,
        message: "friends posts not found",
      });
    }

    res.status(200).json(userPosts.concat(...friendPosts));

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
