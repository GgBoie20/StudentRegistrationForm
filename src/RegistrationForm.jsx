import React from 'react'
import Home from './Home'
import Layout from './Layout'
import SingleStudent from './SingleStudent'
import Update from './Update'
import Errorpage from './Errorpage'
import ViewAll from './ViewAll'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


let r =createBrowserRouter([
  {
    path:"*",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/ViewAll",
        element: <ViewAll/>
      },
      {
        path: "/singlestu/:id",
        element: <SingleStudent/>
      },
      {
        path: "/edit/:id",
        element: <Update/>
      },
      {
        path: "/",
        element: <Errorpage/>
      }
    ]
  }
])


const RegistrationForm = () => {
  return (
    <>
        <div><Toaster/></div>
        <RouterProvider router={r}></RouterProvider>
    </>
  )
}

export default RegistrationForm



