import React from 'react'

const App = () => {
  let count  = 1
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl'>Count is {count}</h1>
      <button onClick={()=>{
        count++
        console.log(count);
        
      }} className=' bg-blue-600 rounded text-md'>Inc Count</button>
    </div>
  )
}

export default App