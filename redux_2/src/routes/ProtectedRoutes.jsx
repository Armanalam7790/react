import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {
  const {isAuthenticated,isLoading} =   useSelector((store)=>store.auth)
  if (isLoading) {
     return <h1>loading</h1>
  }
  if (!isAuthenticated) {
    return <Navigate to={'/'} />
  }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedRoutes