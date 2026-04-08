import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between px-10 py-3 bg-fuchsia-700'>
        <h1>logo</h1>
        <div className='flex gap-10'>
            <NavLink to='/' className={({isActive})=> isActive? 'text-red-500 font-semibold': 'white'}>
                home
            </NavLink>

              <NavLink to='/about' className={({isActive})=> isActive? 'text-red-500 font-semibold': 'white'}>
                About
            </NavLink>


              <NavLink to='/products' className={({isActive})=> isActive? 'text-red-500 font-semibold': 'white'}>
                products
            </NavLink>

              <NavLink to='users' className={({isActive})=> isActive? 'text-red-500 font-semibold': 'white'}>
                users
            </NavLink>
            
        </div>
        <div></div>
    </div>
  )
}

export default Navbar