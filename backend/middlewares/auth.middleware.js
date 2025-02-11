import jwt from 'jsonwebtoken'
import {ApiError} from '../utils/ApiError.js'
import { asyncHandler} from '../utils/asyncHandler.js'
import {User} from '../models/user.model.js'
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

export const verifyJWT= asyncHandler(async(req ,_,next)=>{
    try{
       const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer" , "")
    if(!token){
        throw new ApiError(401 , "unauthorized req")
    }

  const decodedToken =   jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
  const user = await User.findById(decodedToken._id).
  select("-password -refreshToken")
  if(!user){
    throw new ApiError(401 , "invalid access token ")

  }
  req.user = user;
  next()
    }
    catch(err){
       throw new ApiError(401  , err?.message || "invalid access token ")
       
    }
})


const authorizeAlumni = (req, res ,next)=>{
  if(req.user && req.user.role=="alumni"){
      next()
  }else{
      res.status(401).send("not authorized as alumni")
  }
}


export {authorizeAlumni}
