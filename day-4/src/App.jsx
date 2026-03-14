import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [count, setcount] = useState(0)
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl'>Count is {count}</h1>
      <button onClick={()=>{
        setcount(count+1)
        
      }} className=' bg-blue-600 rounded text-md'>Inc Count</button>
    </div>
  )
}

export default App