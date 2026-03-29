import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen flex flex-col gap-6 bg-gray-800'>
      <Navbar />


      <div className='h-[90%] px-[100px] '>
        <Home />
      </div>

    </div>
  )
}

export default App