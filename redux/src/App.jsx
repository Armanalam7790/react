import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentbyvalue } from './features/counterSlice'

const App = () => {
  const [number, setnumber] = useState(0)
 const dispatch  =  useDispatch()
 let {count} =  useSelector((store)=> store.count)
 console.log(count);
 
  return (
    <div>App

      <h1>counter is : {count}</h1>
      <input onChange={(e)=> setnumber(e.target.value)} type="text" placeholder='num' />
      <button onClick={()=>{dispatch(increamentbyvalue(number))}}>add amount</button>

      <button onClick={()=>{dispatch(increament())}}>inc</button>
      <button onClick={()=>{dispatch(decreament())}}>dec</button>
     
    </div>
  )
}

export default App