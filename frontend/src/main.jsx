import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router'
import { Route } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import Login from './pages/Login.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Layout from './Layout.jsx'
import Register from './pages/Register.jsx'
import JobPosting from './pages/JobsPosting.jsx'
import GetAllJobs from './pages/GetAllJobs.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import Batches from './pages/Batches.jsx'
import ChatPage from './components/ChatPage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<LandingPage/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>}/>
      <Route path='alljobs' element={<GetAllJobs/>}/>
      <Route path='jobsposting' element={<JobPosting/>}/>
      <Route path='getCurrentUser' element={<UserDashboard/>}/>
      <Route path='batches' element={<Batches/>}/>
      <Route path="/chat/:userId" element={<ChatPage />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <App/>
   <RouterProvider router={router}/>
   </Provider>
  </StrictMode>,
)

