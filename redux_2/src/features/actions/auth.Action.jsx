import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export let loginUser  =  createAsyncThunk('auth/login', async (cradentials, thunkApi)=>{

  try {
    let res  = async  = axios.post('https://dummyjson.com/auth/login', cradentials)
      localStorage.setItem('acessToken' , res.data.accessToken)
    //   localStorage.setItem('accessToken', res.data.accessToken)
   return res
    
  } catch (error) {
     return thunkApi.rejectWithValue('login failed')
     
  }

})