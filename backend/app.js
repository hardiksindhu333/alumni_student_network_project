import express from 'express';
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()



// app.use(cors(
//     {origin: process.env.CORS_ORIGIN,
//     credentials:true
// }
// ))
app.use(cors({
    origin: "*",  // Allow all origins (only for testing)
    methods: ["GET", "POST"]
}));
app.use(express.json({limit:"500kb"}))
app.use(express.urlencoded({extended:true ,limit:"500kb"}))
app.use(express.static("public")) 

app.use(cookieParser())




//routes import

import userRouter from './routes/user.routes.js'

//routes declaration 
app.use("/api/v1/users" ,userRouter)

import jobsRouter from './routes/job.routes.js'
app.use("/api/v1/jobs",jobsRouter)

import eventRouter from './routes/events.routes.js'
app.use("/api/v1/events" ,eventRouter)

import projectRouter from './routes/projects.routes.js'
app.use("/api/v1/projects",projectRouter)

export {app}