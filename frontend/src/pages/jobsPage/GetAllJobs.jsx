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
