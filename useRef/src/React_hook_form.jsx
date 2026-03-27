import React, { useState } from "react";
import { useForm } from "react-hook-form";

const React_hook_form = () => {
  const [form, setform] = useState(null)
  const { register, handleSubmit,reset } = useForm();



  return (
    <div className="flex gap-5  flex-col items-center justify-center h-screen bg-black text-white">
      <h1>react hook form</h1>

      <form onSubmit={handleSubmit((data)=>{
          // console.log(data);
          setform(data)
          console.log(form);
         reset()

      })}>

        <input
          {...register("name")}
          className="border p-2 rounded"
          type="text"
          placeholder="name"
        />{" "}
        <br /> <br />


        <input
          className="border p-2 rounded"
          type="email"
          placeholder="email"
           {...register('email')}
        />
        <br /> <br />


        <button className="bg-red-600 px-6 py-2 rounded">submit</button>
      </form>
    </div>
  );
};

export default React_hook_form;
