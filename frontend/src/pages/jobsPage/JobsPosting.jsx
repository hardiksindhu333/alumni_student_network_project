import { useState } from "react";
import {useJobPostingMutation} from '../../redux/api/jobs.ApiSlice.js'
import Loader from '../../components/Loader.jsx'
function JobPosting() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("");

  const [PostJob, {isLoading}]= useJobPostingMutation();

  const handleSubmit = async(e) => {
   
    e.preventDefault();
    

   const jobsData = {
    title ,
    company ,
    location ,
    jobType,
    description,
    requirements,
    salary
   }


    try {
        // console.log(formData)
        const result = await PostJob(jobsData).unwrap(); 
        console.log("Response:", result);
       
      } catch (error) {
        console.error("Upload failed:", error);
      }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 mt-10">
      <h2 className="text-2xl font-semibold text-center">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Job Title" defaultValue={"helloji"} value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-md" required />
        <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-2 border rounded-md" required />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border rounded-md" required />
        <input type="text" placeholder="Job Type (Full-Time/Part-Time)" value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-full p-2 border rounded-md" required />
        <textarea placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded-md" required></textarea>
        <textarea placeholder="Requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} className="w-full p-2 border rounded-md" required></textarea>
        <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full p-2 border rounded-md" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Post Job</button>
        {isLoading && <Loader/>}
      </form>
    </div>
  );
}

export default JobPosting;
