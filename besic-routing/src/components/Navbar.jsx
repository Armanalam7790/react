import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[10%] flex justify-between items-center px-[100px]  bg-black text-white  '>
        <h1 className='text-3xl  font-semibold'>logo</h1>

        <div className='flex items-center gap-10 text-xl font-semibold '>
            <p>Home</p>
            <p>About</p>
            <p>Contect</p>
        </div>

        <button className='text-xl px-4 py-3 rounded bg-black border-white border text-white cursor-pointer'>Light</button>
    </div>
  )
}

export default Navbar