import React from 'react'
import About from './components/About'
import Contect from './Contect'
const App = () => {
  return (
    <div>
      <h1>hello</h1>
      {About('hello')}
      <Contect width='200' />
    </div>
  )
}

export default App