// import React, { useContext, useEffect, useState, useRef } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Header = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setDropdownVisible((prev) => !prev);
//   };

//   const handleLogout = () => {
//     logout();
//     setDropdownVisible(false);
//     navigate('/');
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownVisible(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Optional: Animate nav items on load
//   useEffect(() => {
//     const navItems = document.querySelectorAll('nav ul li');
//     navItems.forEach((item, index) => {
//       item.style.opacity = 0;
//       item.style.transform = 'translateX(-30px)';
//       setTimeout(() => {
//         item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//         item.style.opacity = 1;
//         item.style.transform = 'translateX(0)';
//       }, 100 * index);
//     });
//   }, []);

//   return (
//     <header className="bg-[#004d40]">
//       <nav className="container mx-auto flex justify-between items-center py-4 px-4">
//         {/* Left-side Navigation */}
//         <div className="flex space-x-6">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-50 underline text-lg font-bold transition duration-200"
//                 : "text-white text-lg font-bold transition duration-200 hover:text-blue-50"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/events"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-50 underline text-lg font-bold transition duration-200"
//                 : "text-white text-lg font-bold transition duration-200 hover:text-blue-50"
//             }
//           >
//             Events
//           </NavLink>
//           <NavLink
//             to="/donation"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-50 underline text-lg font-bold transition duration-200"
//                 : "text-white text-lg font-bold transition duration-200 hover:text-blue-50"
//             }
//           >
//             Donation
//           </NavLink>
//           <NavLink
//             to="/jobportal"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-50 underline text-lg font-bold transition duration-200"
//                 : "text-white text-lg font-bold transition duration-200 hover:text-blue-50"
//             }
//           >
//             Job Postings
//           </NavLink>
//           <NavLink
//             to="/batches"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-50 underline text-lg font-bold transition duration-200"
//                 : "text-white text-lg font-bold transition duration-200 hover:text-blue-50"
//             }
//           >
//             Batches
//           </NavLink>
//         </div>

//         {/* Right-side Authentication/Profile */}
//         <div className="flex items-center">
//           {!user ? (
//             <div className="flex space-x-4">
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "bg-blue-600 text-white text-lg font-bold rounded-md px-4 py-2 transition duration-200 hover:bg-blue-50 hover:text-blue-700"
//                     : "bg-blue-600 text-white text-lg font-bold rounded-md px-4 py-2 transition duration-200 hover:bg-blue-50 hover:text-blue-700"
//                 }
//               >
//                 Login
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "bg-blue-600 text-white text-lg font-bold rounded-md px-4 py-2 transition duration-200 hover:bg-blue-50 hover:text-blue-700"
//                     : "bg-blue-600 text-white text-lg font-bold rounded-md px-4 py-2 transition duration-200 hover:bg-blue-50 hover:text-blue-700"
//                 }
//               >
//                 Register
//               </NavLink>
//             </div>
//           ) : (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center space-x-2 text-white focus:outline-none"
//               >
//                 {user.profilePicture ? (
//                   <img
//                     src={user.profilePicture}
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
//                     <span className="text-lg text-gray-800">{user.name[0]}</span>
//                   </div>
//                 )}
//                 <span className="hidden sm:block">{user.name}</span>
//               </button>
//               {dropdownVisible && (
//                 <div
//                   ref={dropdownRef}
//                   className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-20 transition transform origin-top-right"
//                 >
//                   <div className="p-4 border-b border-gray-200">
//                     <div className="flex items-center space-x-3">
//                       {user.profilePicture ? (
//                         <img
//                           src={user.profilePicture}
//                           alt="Profile"
//                           className="w-12 h-12 rounded-full object-cover"
//                         />
//                       ) : (
//                         <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
//                           <span className="text-xl text-gray-800">{user.name[0]}</span>
//                         </div>
//                       )}
//                       <div>
//                         <h3 className="font-bold text-gray-800 text-lg">{user.name}</h3>
//                         <p className="text-sm text-gray-600">{user.email}</p>
//                       </div>
//                     </div>
//                     {user.role && (
//                       <p className="mt-2 text-sm text-gray-600 capitalize">
//                         Role: {user.role}
//                       </p>
//                     )}
//                     {user.role === 'student' && (
//                       <div className="mt-2">
//                         <p className="text-sm text-gray-600">
//                           Skills: {user.skills && user.skills.length ? user.skills.join(', ') : 'None'}
//                         </p>
//                         {user.interestedDomain && (
//                           <p className="text-sm text-gray-600">
//                             Interested Domain: {user.interestedDomain}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                     {user.role === 'alumni' && (
//                       <div className="mt-2">
//                         {user.techStack && (
//                           <p className="text-sm text-gray-600">
//                             Tech Stack: {user.techStack}
//                           </p>
//                         )}
//                         {user.company && (
//                           <p className="text-sm text-gray-600">
//                             Company: {user.company}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-4 space-y-2">
//                     <button
//                       onClick={() => {
//                         setDropdownVisible(false);
//                         navigate('/profile');
//                       }}
//                       className="w-full text-left px-4 py-2 font-semibold text-gray-800 rounded transition duration-200 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Update Profile
//                     </button>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 font-semibold text-gray-800 rounded transition duration-200 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
