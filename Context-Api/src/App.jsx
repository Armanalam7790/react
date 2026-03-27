import React, { useContext } from 'react'
import { ContextProvider, Mystore } from './context/MyContext'
import Home from './context/Components/Home'
import About from './context/Components/About'

const App = () => {
 console.log('app rendring');
 useContext(Mystore)
 
 
  return (
    <div>
      <ContextProvider >
  <Home />
      <About />

</ContextProvider>
    
    </div>
  )
}

export default App