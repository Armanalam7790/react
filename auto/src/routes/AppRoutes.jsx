import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../layout/Home'
import About from '../layout/About'
import App from '../App'

const AppRoutes = () => {
   let gigi  = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"home",
                element:<Home />
            },

             {
                path:"about",
                element:<About />
            },
        ]
    }
   ])
    return <RouterProvider router={gigi}>

    </RouterProvider>
}

export default AppRoutes