import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async ()=>{
    try{
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected connected !! DB HOST: ${connectionInstance.connection.host}`)
        console.log
    }
    catch(error){
        console.log("mongodb connection error RESTART THE SERVER AGAIN IF GET FIX " ,error);
        process.exit(1)
    }
}

export default connectDB;