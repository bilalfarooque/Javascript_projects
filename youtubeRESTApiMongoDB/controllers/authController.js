import User from "../models/User.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";

const jwt  = pkg;
//signup
export const signupController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password)
      return res.status(404).json({
        status: false,
        message: "Missing fields",
      });

    // Generating Hashed Password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //User.create method is used to create and save a new document (user) in the MongoDB database.
    const user = await User.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });

    res.status(200).json({
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
      return res.status(404).json({
        status: false,
        message: "Missing Fields",
      });

    const isUserExist = await User.findOne({ email: userEmail });
    console.log(isUserExist.id, "====>>> isUserExist");

    if (isUserExist) {
      // decrypt password to check and match
      const validPass = await bcrypt.compare(
        password,
        isUserExist.password.toString()
      );

      if (validPass) {
        const token = jwt.sign({ id : isUserExist.id }, process.env.JWT_key);

        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({
            status: true,
            message: "User Found",
            data: isUserExist,
          });
      } else {
        res.status(400).json({
          status: false,
          message: "Invalid Credentials",
        });
      }
    } else {
      res.status(400).json({
        status: false,
        message: "User Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
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
