import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth";

const Login = ({settoggle}) => {
 let dispatch =  useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode:"onChange"
  });

  const submitHandler = async (data) => {
  
  try {
     let res = await   axios.post('https://dummyjson.com/auth/login', data)
     console.log(res);
     dispatch(addUser(res.data))
     localStorage.setItem('acessToken' , res.data.accessToken)
     

  } catch (error) {
    console.log('erros in  login api', error);
    
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              {...register("username", { required: "username is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
          
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p 
        onClick={()=>settoggle(prev => !prev)}
        className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;