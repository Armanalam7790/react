import React, { lazy, Suspense } from 'react'
import Skelton from '../components/Skelton'
// import UserCart from '../components/UserCart'

let UserCart = lazy(()=> import('../components/UserCart'))

const Users = () => {
  return (
    <div>Users

     <Suspense fallback={<Skelton />}>
       <UserCart />
     </Suspense>
    </div>
  )
}

export default Users