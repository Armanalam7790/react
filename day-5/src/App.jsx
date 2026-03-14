import React, { useState } from 'react'

const App = () => {
  console.log(' app rendring');
  const [count, setcount] = useState(0)
  const [obj, setobj] = useState({
    name:'Arman',
    age:20,
    skills: 'developer'

  })
  console.log(obj);
  
  return (
    <div>
      <h1> hello - {count}</h1>
      <h1> Name is :  {obj.name}</h1>

      <button onClick={()=>{
        setcount(5)
      }}>Inc</button>

      <button onClick={()=>{
        
       setobj({...obj , name: 'king'})
        
      }}>change name</button>
    </div>
  )
}

export default App