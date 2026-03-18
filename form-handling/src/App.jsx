import React, { useState } from "react";

const App = () => {
  const [formvalue, setformvalue] = useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
  })

  
  console.log('formvalue', formvalue);
  
  
  

  return (
    <div className="h-screen  flex flex-col gap-5 bg-black text-white justify-center items-center ">
      <h1 className="text-xl">Create Account</h1>

      <form
      onSubmit={(e)=>{
        e.preventDefault()
console.log('after on change',formvalue);

      }}
      className="border w-[400px] border-gray-600 p-5 rounded-2xl flex flex-col gap-3">


        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="name">
            Name
          </label>

          <input
         
         onChange={(e)=> setformvalue({...formvalue , name:e.target.value})
         }
          
            className="bg-[#1e2323] p-2 rounded text-white"
            type="text"
            placeholder="John doe"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="name">
            Email
          </label>
          <input
          onChange={(e)=>setformvalue({...formvalue, email:e.target.value})}
            className="bg-[#1e2323] p-2 rounded text-white"
            type="text"
            placeholder="John@xyz.com"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="name">
            Password
          </label>
          <input
        onChange={(e)=>setformvalue({...formvalue , password:e.target.value})}
            className="bg-[#1e2323] p-2 rounded text-white"
            type="text"
            placeholder="12345678"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="name">
            Mobile
          </label>
          <input
           
         onChange={(e)=>setformvalue({...formvalue , mobile:e.target.value})}

            className="bg-[#1e2323] p-2 rounded text-white"
            type="number"
            placeholder="6203054603"
            id="name"
          />
        </div>

        <button className="bg-blue-700 p-2 rounded  cursor-pointertext-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
