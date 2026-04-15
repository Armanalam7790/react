import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/register'

const AuthLayout = () => {
    const [toggle, settoggle] = useState(false)
  return (
    <div>
        {
 toggle ? <Register settoggle={settoggle} /> : <Login settoggle={settoggle} />
        }
    </div>
  )
}

export default AuthLayout