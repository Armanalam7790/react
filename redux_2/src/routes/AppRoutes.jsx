import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../pages/HomePage'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../features/auth'
import axios from 'axios'
import { loginUser } from '../features/actions/auth.Action'

const AppRoutes = () => {
 const dispatch  =     useDispatch()
let token = localStorage.getItem('accessToken')
localStorage.setItem("accessToken", res.data.accessToken);

    useEffect(()=>{
          if (!token) {
    dispatch(removeUser())
  }

            (async()=>{
      try {
         let res  = await  axios.get(`https://dummyjson.com/auth/me`,{
            'headers':{
                'Authorization': `Bearer ${token}`
            }
         })

         console.log(res);

         dispatch(loginUser(res.data))
         

      } catch (error) {
        console.log('error in  me api', error);
        
      }
            })()





    },[])
    let router  =  createBrowserRouter([
        {
            path:"/",
            element:<PublicRoutes />,
            children:[
                 {
                    path:"",
                   element:<AuthLayout />,

                 },
            ]

        },
        {
            path:"/main",
           element:<ProtectedRoutes />,
           children: [
            {
                path:'',
                 element:<MainLayout />,
              children:[
                {
                    path:"",
                    element:<HomePage />
                }
            ]
            }
           ]

        }
    ])
  return  <RouterProvider router={router} />
}

export default AppRoutes