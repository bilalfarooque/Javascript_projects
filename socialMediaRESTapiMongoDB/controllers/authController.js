import User from "../models/Register.js";
import bcrypt from "bcrypt";

//signup
export const signupController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password)
      return res.json({
        status: false,
        message: "Missing fields",
      });

    //Generating Hashed Password for security
    // const salt =  await bcrypt.genSalt(10);
    // const  hashedPassword = await bcrypt.hash(password,salt)

    //User.create method is used to create and save a new document (user) in the MongoDB database.
    const user = await User.create({
      userName,
      email,
      password,
    });

    res.json({
      status: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

//login
export const loginController = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    //check missing fields
    if (!userEmail || !password)
      return res.status(400).json({
        status: false,
        message: "Missing Fields",
      });

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ userName }, { email }] });

    if (existingUser) {
      return res.json({
        status: false,
        message: "Username or email already exists",
      });
    }

    const isUserExist = await User.findOne({ email: userEmail });
    console.log(isUserExist, "====>>> isUserExist");

    if (isUserExist) {
      //decrypt password to check and match
      //const validPass = await bcrypt.compare(password, isUserExist.password.toString())

      if (isUserExist.password === password)
        return res.status(200).json({
          status: true,
          message: "User Found",
          data: isUserExist,
        });

      res.status(400).json({
        status: false,
        message: "Invalid Credentials",
      });
    } else {
      res.status(400).json({
        status: false,
        message: "User Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

//logout
export const logoutController = (req, res) => {
  res.json({
    status: true,
    message: "Logout Successfully",
  });
};

//forgetPassword
export const forgetPasswordController = (req, res) => {
  res.json({
    status: true,
    message: "forget Password Successfully",
  });
};
