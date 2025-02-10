import apiSlice from "./apiSlice.js";
import { JOBS_URL } from "../constant.js";



export const  jobsApiSlice = apiSlice.injectEndpoints({

endpoints:(builder)=>({

jobPosting:builder.mutation({
    query:(data)=>({
        url:`${JOBS_URL}/jobposting`,
        method:"Post"
        ,body:data
    })
}),


getalljobs: builder.query({
    query: () => `${JOBS_URL}/alljobs`,
    transformResponse: (response) => {
      console.log("API Response:", response); // Log to check the structure
      return response.data; // Since the jobs are inside the `data` field
    },
  }),

})

})

export const {useJobPostingMutation,
    useGetalljobsQuery,
    
} = jobsApiSlice;