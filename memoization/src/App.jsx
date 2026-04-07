import React, { useCallback, useMemo, useState } from 'react'
import About from './components/About';

const App = () => {
      console.log('app rendring' ,  );
   const  [count,setcount] =    useState(0)

//  let greet  = useCallback( ()=> {
//    console.log('hello');
   
//  }, [])


let heavycalc  = useMemo( ()=>{
   return 10
},[])
  

  return (
    <div>
      <h1>APP
      </h1>

<h1>name is </h1>
<h1>heavy calulation value {heavycalc}</h1>
      <h1>count - {count}</h1>
            <About   />
      <button onClick={()=> setcount(count+1)}>inc</button>

      


    </div>
  )
}

export default App