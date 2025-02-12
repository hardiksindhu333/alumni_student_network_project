import { useEffect } from "react";
import { useGetalljobsQuery } from "../../redux/api/jobs.ApiSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { useGetJobsQuery } from "../redux/api/jobApi";



function GetAllJobs() {
    const { data: jobs, error, isLoading, isSuccess, isError } = useGetalljobsQuery();

    const {userInfo} = useSelector((state)=>(state.auth))
    
    const navigate = useNavigate()
    // console.log(userInfo.data.user.role)
  
    

  

  if (isLoading) return <p className="text-center text-gray-500">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching jobs</p>;

  const Handle =()=>{
    navigate('/jobsposting')
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Available Jobs</h2>
    { userInfo.data.user.role=="alumni" ?<button className="bg-red-500 w-72 py-3 rounded-2xl my-4" onClick={Handle}>post</button> :null }
      <div className="grid gap-6">
        {jobs?.map((job) => (
          <div key={job.id} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
            <p className="text-gray-700 font-medium">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-600 font-medium">Type: {job.jobType}</p>
            <p className="text-green-600 font-semibold">Salary: {job.salary}</p>
          </div>

        ))}

      </div>
    </div>
  );
}

export default GetAllJobs;












//job portal frontend



// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const JobPortal = () => {
//   const { user } = useContext(AuthContext); // Retrieve user from context
//   const [searchTitle, setSearchTitle] = useState('');
//   const [searchLocation, setSearchLocation] = useState('');
//   const [searchType, setSearchType] = useState('');
//   const [jobListings, setJobListings] = useState([]);
//   const [jobForm, setJobForm] = useState({
//     title: '',
//     description: '',
//     company: '',
//     location: '',
//     type: 'Full-Time'
//   });

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log('Search Filters:', { searchTitle, searchLocation, searchType });
//   };

//   const handleJobFormChange = (e) => {
//     const { id, value } = e.target;
//     setJobForm((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleJobFormSubmit = (e) => {
//     e.preventDefault();
//     setJobListings([...jobListings, jobForm]);
//     setJobForm({ title: '', description: '', company: '', location: '', type: 'Full-Time' });
//   };

//   return (
//     <main className="p-6 bg-[#e0f2f1] min-h-screen">
//       <div className="container mx-auto">
//         {/* Header */}
//         <header className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-gray-800">Alumni Job Portal</h1>
//           <p className="mt-2 text-lg text-gray-600">
//             Find your dream job or post your opportunities
//           </p>
//         </header>

//         {/* Search Filters */}
//         <section id="search-filters" className="mb-10 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//             Search &amp; Filter
//           </h2>
//           <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="flex flex-col">
//               <label htmlFor="search-title" className="font-medium text-gray-700">
//                 Job Title
//               </label>
//               <input
//                 type="text"
//                 id="search-title"
//                 value={searchTitle}
//                 onChange={(e) => setSearchTitle(e.target.value)}
//                 placeholder="e.g., Software Engineer"
//                 className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="search-location" className="font-medium text-gray-700">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="search-location"
//                 value={searchLocation}
//                 onChange={(e) => setSearchLocation(e.target.value)}
//                 placeholder="e.g., New York"
//                 className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="search-type" className="font-medium text-gray-700">
//                 Job Type
//               </label>
//               <select
//                 id="search-type"
//                 value={searchType}
//                 onChange={(e) => setSearchType(e.target.value)}
//                 className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//               >
//                 <option value="">All Types</option>
//                 <option value="Full-Time">Full-Time</option>
//                 <option value="Part-Time">Part-Time</option>
//                 <option value="Internship">Internship</option>
//               </select>
//             </div>
//             <div className="md:col-span-3 flex justify-center">
//               <button
//                 type="submit"
//                 className="mt-4 px-6 py-3 bg-[#004d40] text-white font-semibold rounded hover:bg-[#00796b] transition duration-300"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//         </section>

//         {/* Job Posting Section */}
//         {user ? (
//           user.role === 'alumni' ? (
//             <section id="post-job" className="mb-10 bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                 Post a Job
//               </h2>
//               <form onSubmit={handleJobFormSubmit} className="space-y-6 max-w-2xl mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <label htmlFor="title" className="font-medium text-gray-700">
//                       Job Title
//                     </label>
//                     <input
//                       type="text"
//                       id="title"
//                       value={jobForm.title}
//                       onChange={handleJobFormChange}
//                       placeholder="Enter job title"
//                       required
//                       className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="company" className="font-medium text-gray-700">
//                       Company
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       value={jobForm.company}
//                       onChange={handleJobFormChange}
//                       placeholder="Company name"
//                       required
//                       className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="description" className="font-medium text-gray-700">
//                     Job Description
//                   </label>
//                   <textarea
//                     id="description"
//                     value={jobForm.description}
//                     onChange={handleJobFormChange}
//                     placeholder="Enter job description"
//                     required
//                     className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//                   ></textarea>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <label htmlFor="location" className="font-medium text-gray-700">
//                       Location
//                     </label>
//                     <input
//                       type="text"
//                       id="location"
//                       value={jobForm.location}
//                       onChange={handleJobFormChange}
//                       placeholder="Job location"
//                       required
//                       className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="type" className="font-medium text-gray-700">
//                       Job Type
//                     </label>
//                     <select
//                       id="type"
//                       value={jobForm.type}
//                       onChange={handleJobFormChange}
//                       required
//                       className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#004d40]"
//                     >
//                       <option value="Full-Time">Full-Time</option>
//                       <option value="Part-Time">Part-Time</option>
//                       <option value="Internship">Internship</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     className="px-6 py-3 bg-[#004d40] text-white font-semibold rounded hover:bg-[#00796b] transition duration-300"
//                   >
//                     Post Job
//                   </button>
//                 </div>
//               </form>
//             </section>
//           ) : user.role === 'student' ? (
//             <section className="mb-10 text-center">
//               <p className="text-red-500 font-bold">
//                 Only alumni can post jobs.
//               </p>
//             </section>
//           ) : null
//         ) : null}

//         {/* Job Listings Section */}
//         <section id="job-listings" className="mb-10">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">Job Listings</h2>
//           {jobListings.length === 0 ? (
//             <p className="text-gray-600">No job listings yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {jobListings.map((job, index) => (
//                 <div
//                   key={index}
//                   className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition duration-300"
//                 >
//                   <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
//                   <p className="mt-2 text-gray-700">{job.description}</p>
//                   <p className="mt-4 text-sm text-gray-500">
//                     <span className="font-medium">Company:</span> {job.company} |{' '}
//                     <span className="font-medium">Location:</span> {job.location} |{' '}
//                     <span className="font-medium">Type:</span> {job.type}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// };

// export default JobPortal;
