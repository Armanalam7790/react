import React, { useState } from "react";
import { useRef } from "react";

const App = () => {
 console.log('app rendring');
 
 const  inpref =   useRef({
  
  
 })
 
 console.log(inpref);
 
  

  return (
    <div className="h-screen  flex flex-col gap-5 bg-black text-white justify-center items-center ">
      <h1 className="text-xl">Create Account</h1>

      <form  onSubmit={(e)=>{
        e.preventDefault()
        console.log(inpref.current.name.value);
        console.log(inpref.current.email.value);
        console.log(inpref.current.mobile.value);
        console.log(inpref.current.password.value);
       
       
        
      }}
     

      className="border w-[400px] border-gray-600 p-5 rounded-2xl flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="name">
            Name
          </label>

          <input
         name="name"
        //  ref={inpref}
         ref={(e)=> {
  inpref.current.name =e
}}
          
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
        //  ref={inpref}
ref={(e)=>{
  inpref.current.email = e
}}
        // ref={inpref2}

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
       ref={(e)=> {
  inpref.current.password =e
}}
         name="password"
 
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
        
          ref={(e)=> {
  inpref.current.mobile =e
}}

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
