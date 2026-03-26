import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import { useEffect } from 'react'

const App = () => {
  const [toggle, settoggle] = useState(false)
  const [count, setcount] = useState(0)
  console.log('app rendring');

  useEffect(()=>{
console.log('hei i am arman');

  },[toggle])
  
  return (
    <div>
      <h1>App</h1>
      {/* {toggle? <Home /> : <About />} */}
      <Home />
      <button onClick={()=> settoggle(prev =>!prev)}>change</button>
    </div>
  )
}

export default App