import React from 'react'
import { fetchProduct } from './api/ProductApi'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import ProductCard from './components/ProductCard'
import ProductSkeleton from './components/ProductSkeleton'

const App = () => {
const { data,fetchNextPage, hasNextPage, isLoading  } = useInfiniteQuery({
  queryKey: ['products'],
  queryFn: fetchProduct,
  getNextPageParam: (lastPage, pages)=>{

    // let total  = lastPage.total
    
    // let loded = pages.length * 10
    



  return pages.length + 1

  // console.log(data);
  
   
  }
})
  console.log(data);


  if (isLoading) {
  return (
    <div className="grid grid-cols-4 gap-5 p-5 place-items-center">
      {Array(8).fill(0).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  )
}


 
  
  return (
    // grid grid-cols-4 gap-5 place-items-center
    <div className='bg-amber-100 '>

     <div className='grid grid-cols-5 gap-5 p-5 place-items-center'>
      {
     data.pages.map((page) =>
       page.products.map((elem)=> <ProductCard product={elem} />))

      }
     </div>

    <div className="flex justify-center">
  <button className="bg-blue-500 p-4 text-white font-medium rounded active:scale-95 py-2" onClick={fetchNextPage}>
    Load More
  </button>
</div>
     
    </div>
  )
}

export default App