import express  from "express";
import dotenv from  'dotenv';

const app = express();

dotenv.config()

app.listen(PORT , ()=>{
    console.log("Server started at port  : "+ PORT);
})

