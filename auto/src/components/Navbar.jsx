import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white p-4 flex justify-center items-center gap-10'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        
    </div>
  )
}

export default Navbar