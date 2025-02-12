// import React from 'react' 
// import { useNavigate } from 'react-router'
// import {  useLogoutMutation } from '../redux/api/userApiSlice.js'
// import { useDispatch } from 'react-redux'
// import { logout } from '../redux/auth/authSlice.js'

// function Register() {
//   const [logoutApiCall]=useLogoutMutation()
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const click =()=>{
//     navigate('/')
//   }
//   const logouthandler = async()=>{
//    try {
//     await logoutApiCall().unwrap();
//     dispatch(logout());
//     navigate('/')
//    } catch (error) {
//     console.log(error)
    
//    }

//   }
//   return (
//   <>
//   {/* <div>hello this is register page </div>
//   <button className='bg-red-500 w-36 rounded border-2 my-12' onClick={logouthandler}> logout</button>
//   <button onClick={click} className='bg-green-500 w-36 rounded border-2 my-12'>go to home page </button> */}
  
  
//   </>
    
//   )
// }

// export default Register



// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
// import { useRegisterMutation } from "../redux/api/userApiSlice";

// import React from 'react'

// function Register() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const [registerApiCall ,{isLoading}] = useRegisterMutation();
//   const [fullName , setfullName] = useState("")
//   const [userName , setuserName] = useState("")
//   const [email , setemail] = useState("")
//   const [password , setpassword] = useState("")
//   const [role , setrole] = useState("")
//   const [skills , setskills] = useState("")
//   const [batch , setbatch] = useState("")
//   const [education , seteducation] = useState("")
//   const [bio , setbio] = useState("")
//   const [interests , setinterests] = useState("")
//   const [linkedin , setlinkedin] = useState("")
//   const [github , setgithub] = useState("")
//   const [image , setimage] = useState("")

//   return (
//     <div>
//       <div>
//         <label htmlFor=""></label>
//       </div>


//     </div>
//   )
// }

// export default Register



  
// export default function Register() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     userName: "",
//     email: "",
//     password: "",
//     role: "",
//     skills: "",
//     batch: "",
//     education: "",
//     bio: "",
//     interests: "",
//     linkedin: "",
//     github: "",
//     image: null,
//   });
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const [registerApiCall ,{isLoading}] = useRegisterMutation();


//   const loginpage=()=>{
//     navigate('/login')
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//     console.log(e.target.files[0])
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log("Registration Data:", formData);
//     // console.log(formData.image)

// try{
//  const res =  await registerApiCall(formData)
//  if(res){
//   // navigate('/login')
//  }


// }catch(err){
//   console.log(err)
// }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-600">
//       <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl p-6 bg-white shadow-xl rounded-2xl">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {Object.keys(formData).map((key) => (
//             key !== "image" ? (
//               <div key={key}>
//                 <label className="block text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                 <input
//                   type={key === "password" ? "password" : "text"}
//                   name={key}
//                   placeholder={`Enter your ${key}`}
//                   value={formData[key]}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 />
//               </div>
//             ) : (
//               <div key={key}>
//                 <label className="block text-gray-700">Upload Image</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 />
//               </div>
//             )
//           ))}
//           <button type="submit" className="w-72 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
//             Register
//           </button>
          
//         </form>
//         <button className="w-72 bg-blue-600 text-white py-2 rounded-lg hover:bg-green-700 transition my-2" onClick={loginpage}>login</button>
//       </motion.div>
//     </div>
//   );
// }



import { useState } from "react";
import { useRegisterMutation } from "../../redux/api/userApiSlice.js"
import {useNavigate} from 'react-router-dom'
import Loader from  '../../components/Loader.jsx'

function Register() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [batch, setBatch] = useState("");
  const [education, setEducation] = useState("");
  const [bio, setBio] = useState("");
  const [intrests, setInterests] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState(null);
  
  const [register, { isLoading, error }] = useRegisterMutation(); 
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("skills", skills);
    formData.append("batch", batch);
    formData.append("education", education);
    formData.append("bio", bio);
    formData.append("intrests", intrests);
    formData.append("linkedin", linkedin);
    formData.append("github", github);
    formData.append("avatar", image); // 'image' matches Multer field name

    try {
      const result = await register(formData).unwrap(); // Call RTK Query mutation
      console.log("Response:", result);
      if(result){
        navigate('/login')
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Register</h2>
      <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 border rounded-md" required />
      <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full p-2 border rounded-md" required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md" required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-md" required />
      <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded-md" />
      <input type="text" placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full p-2 border rounded-md" />
      <input type="text" placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} className="w-full p-2 border rounded-md" />
      <input type="text" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} className="w-full p-2 border rounded-md" />
      <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="w-full p-2 border rounded-md"></textarea>
      <input type="text" placeholder="intrests" value={intrests} onChange={(e) => setInterests(e.target.value)} className="w-full p-2 border rounded-md" />
      <input type="text" placeholder="LinkedIn" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="w-full p-2 border rounded-md" />
      <input type="text" placeholder="GitHub" value={github} onChange={(e) => setGithub(e.target.value)} className="w-full p-2 border rounded-md" />
      <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-md" required />
      <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Register</button>
      {error && <p className="text-red-500 text-center">{error.data?.message || "Something went wrong"}</p>}
      {isLoading && <Loader/>}
    </form>
  );
}

export default Register;














// register frontend 





// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const { register } = useContext(AuthContext);
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     batch: '',
//     role: '',
//     profilePicture: '',
//     education: '',
//     bio: '',
//     linkedin: '',
//     github: '',
//     skills: [],
//   });
//   const [skillInput, setSkillInput] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const addSkill = (e) => {
//     e.preventDefault();
//     if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
//       setFormData((prev) => ({
//         ...prev,
//         skills: [...prev.skills, skillInput.trim()],
//       }));
//       setSkillInput('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       register(formData);
//       alert('Registration successful! Please log in.');
//       navigate('/login');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#e0f2f1] p-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
//         <h2 className="text-2xl font-bold text-[#004d40] mb-6 text-center">Register</h2>
//         {error && <p className="text-red-600 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
//             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="password" className="block font-semibold text-gray-700">Password</label>
//             <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="batch" className="block font-semibold text-gray-700">Batch</label>
//             <input type="text" id="batch" name="batch" value={formData.batch} onChange={handleChange} placeholder="e.g., 2024" required className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="role" className="block font-semibold text-gray-700">Role</label>
//             <select id="role" name="role" value={formData.role} onChange={handleChange} required className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]">
//               <option value="">Select Role</option>
//               <option value="alumni">Alumni</option>
//               <option value="student">Student</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="profilePicture" className="block font-semibold text-gray-700">Profile Picture URL</label>
//             <input type="url" id="profilePicture" name="profilePicture" value={formData.profilePicture} onChange={handleChange} placeholder="https://..." className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="education" className="block font-semibold text-gray-700">Education</label>
//             <input type="text" id="education" name="education" value={formData.education} onChange={handleChange} placeholder="e.g., B.Tech in Computer Science" required className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="bio" className="block font-semibold text-gray-700">Bio</label>
//             <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows="3" placeholder="Tell us about yourself..." className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]"></textarea>
//           </div>
//           <div>
//             <label htmlFor="linkedin" className="block font-semibold text-gray-700">LinkedIn URL</label>
//             <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/username" className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="github" className="block font-semibold text-gray-700">GitHub URL</label>
//             <input type="url" id="github" name="github" value={formData.github} onChange={handleChange} placeholder="https://github.com/username" className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:border-[#004d40]" />
//           </div>
//           <div>
//             <label htmlFor="skills" className="block font-semibold text-gray-700">Skills</label>
//             <div className="flex gap-2 mt-1">
//               <input type="text" id="skills" name="skills" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Enter a skill" className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#004d40]" />
//               <button onClick={addSkill} className="bg-[#004d40] text-white p-3 rounded-lg">
//                 Add
//               </button>
//             </div>
//             <div className="mt-2">
//               {formData.skills.map((skill, index) => (
//                 <span key={index} className="inline-block bg-gray-200 text-gray-800 py-1 px-2 mr-2 mb-2 rounded">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <button type="submit" className="w-full p-3 bg-[#004d40] text-white rounded-lg uppercase font-semibold hover:bg-[#00332a] transition">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
