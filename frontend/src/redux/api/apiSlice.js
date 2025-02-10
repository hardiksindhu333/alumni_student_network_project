import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from '../constant.js'


// const baseQuery = fetchBaseQuery(
//     {
//         baseUrl: MAIN_URL
//     }
// )

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints:()=>({}),
})

export default apiSlice;