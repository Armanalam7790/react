import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const Home = () => {

  let fetchproducts  = async ()=>{
    console.log('api call triggerd...');
    
  let  res = await axios.get(`https://dummyjson.com/products`)
  return res
  
  }

  let {data} = useQuery({
    queryKey:['products'],
    queryFn:fetchproducts,
    staleTime:3000
  })

  console.log(data);
  

  return (
    <div>Home</div>
  )
}

export default Home