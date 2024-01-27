import User from "../models/Register.js";

export const getUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json({
      success: true,
      message: "single user data",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "user data not found",
      data: error,
    });
  }
};
export const getAllUsersController = async (req, res) => {
  try {
    const allusers = await User.find();
    res.status(200).json({
      success: true,
      message: "all users data",
      data: allusers,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "user data not found",
    });
  }
};

export const updateController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    //update if the user is himself or it is admin  who can update any user info
    if (req.params.id === req.body.userId || user.isAdmin) {
      // Find user by ID and update only the specified fields
      //findByIdAndUpdate function takes three parameters: the first is the query to find the document, the second is the update, and the third is an options object
      let updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        { new: true }
      );

      if(!updatedUser){
        res.status(404).json({ error: "User not found" });
      }
      // Send the updated user as the response
      res.status(200).json({
        success: true,
        message: "User data successfully updated",
        data: updatedUser,
      })
    }
      else {
        res.status(404).json({ error: "authorization failed to update user" });
      }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      data: error.message,
    });
  }
};

export const deleteController = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      //update if the user is himself or it is admin  who can update any user info
      if (req.params.id === req.body.userId || user.isAdmin) {
        // Find user by ID and update only the specified fields
        //findByIdAndUpdate function takes three parameters: the first is the query to find the document, the second is the update, and the third is an options object
        let updatedUser = await User.findByIdAndDelete(
          req.params.id
        );
  
        if(!updatedUser){
          res.status(404).json({ error: "User not found" });
        }
        // Send the updated user as the response
        res.status(200).json({
          success: true,
          message: "User deleted successfully",
          data: updatedUser,
        })
      }
        else {
          res.status(404).json({ error: "authorization failed to delete user" });
        }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "internal server error",
        data: error.message,
      });
    }
  };

  export const followController =  async(req,res)=>{
    if(req.params.id !== req.body.userId){
        try{
        //user who is being followed
        const user = await  User.findById(req.params.id);
        //currentUser who is following
        const currentUser = await  User.findById(req.body.userId);

        if (!user.followers.includes(req.params.id)){
            await user.updateOne({$push : {followers: req.body.userId}})
            await currentUser.updateOne({$push : {following: req.body.userId}})
            res.status(200).json({
                success:true,
                message:  'successful following',
                data:{
                    userId: user._id,
                    username:  'You are now following' +  user.userName
                    }
            })
        }else{
            return res.status(409).send("You are already following this user");
        }
 
    }catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      data: error.message,
    });
  }
    }else{
    res.status(403).json({
        success: false,
        message: "you can't follow yourself"
      });
    }
    }
  export const unfollowController =  async(req,res)=>{
    if(req.params.id !== req.body.userId){
        try{
        //user who is being followed
        const user = await  User.findById(req.params.id);
        //currentUser who is following
        const currentUser = await  User.findById(req.body.userId);

        if (currentUser.followers.includes(req.params.id)){
            await user.updateOne({$pull : {followers: req.body.userId}})
            await currentUser.updateOne({$pull : {following: req.body.userId}})
            res.status(200).json({
                success:true,
                message:  'successfully unfollowed',
                data:{
                    userId: user._id,
                    username:  'You have unfollowed ' +  user.userName
                    }
            })
        }else{
            return res.status(409).send("You are already don't follow this user");
        }
 
    }catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      data: error.message,
    });
  }
    }else{
    res.status(403).json({
        success: false,
        message: "you can't follow yourself"
      });
    }
    }