import React, { useContext } from 'react'
import { Mystore } from '../MyContext';

const About = () => {
    console.log('About Rendring');
 let data =    useContext(Mystore)

    // console.log();
    
  return (
    <div>About</div>
  )
}

export default About