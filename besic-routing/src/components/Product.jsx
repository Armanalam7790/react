import React from 'react'

const Product = () => {
  return (
    <div className='w-[30%] flex flex-col gap-8 rounded-xl p-6 bg-black text-white'>
        <div>
            <img src="https://images.unsplash.com/photo-1756137842382-8870b42f49ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div>
            <h1>Product Name </h1>
            <p>Product Price</p>
        </div>

        <div className='flex justify-between w-full'>
            <button>update</button>
            <button>delete</button>

        </div>
    </div>
  )
}

export default Product