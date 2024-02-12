import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import authRouter from "./routes/authRoute.js";
import { dbConnection } from "./utils/config.js";
import cookieParser from "cookie-parser";
// import usersRouter from "./routes/usersRoute.js";
// import videosRouter from "./routes/videosRoute.js";
// import commentsRouter from "./routes/commentsRoute.js";
dotenv.config();

const app = express();

dbConnection();

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/auth", authRouter);
// app.use("/users",usersRouter)
// app.use("/videos",videosRouter)
// app.use("/comments",commentsRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
