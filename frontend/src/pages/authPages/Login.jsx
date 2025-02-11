import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {useLoginMutation} from '../../redux/api/userApiSlice.js'
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/auth/authSlice.js";
import { useEffect } from "react";

export default function Login() {
    

const {userInfo} = useSelector((state)=>(state.auth))
const navigate = useNavigate();

  // const {search}=useLocation()
  // const sp = new URLSearchParams(search)
 

  
//   const [formData, setFormData] = useState({ username: "", email: "", password: "" });
const [email , setEmail]=useState("")
const [password , setPassword]=useState("")
const [loginApiCall ,{isLoading}] = useLoginMutation()
const dispatch = useDispatch()

  
useEffect(()=>{
if(userInfo){
    navigate('/getCurrentUser')
}
},[navigate , userInfo ])
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       const res = await loginApiCall({email, password}).unwrap();
              dispatch(setCredentials(res))
              navigate('/getCurrentUser')
    }catch(err){
        console.log("something went wrong while sending data to api ",err)
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-96 p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>(setEmail(e.target.value))}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>(setPassword(e.target.value))}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}
