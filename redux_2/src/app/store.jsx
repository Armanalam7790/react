import { configureStore } from "@reduxjs/toolkit";
 import authReducer from '../features/auth'
 export  const stote  = configureStore({
    reducer:{
     auth:authReducer
    }
 })