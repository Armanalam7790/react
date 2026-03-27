import React, { useContext } from 'react'
import { Mystore } from '../MyContext'

const Home = () => {
    console.log('home rendring');
    
  const  {count, setcount}  =  useContext(Mystore)
  return (
    <div>
        <h1>home</h1>
        <h1>count  - {count}</h1>
        <button onClick={()=> setcount(count+1)}>inc</button>
    </div>
  )
}

export default Home