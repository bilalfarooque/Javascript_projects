import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import authRouter from "./routes/authRoute.js"
import { dbConnection } from "./utils/config.js"

dotenv.config()

dbConnection()

const app = express()

//middleware
app.use(express.json())
// app.use(helmet())
app.use(morgan('dev'))

app.use("/auth",authRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

