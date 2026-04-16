import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./actions/auth.Action";

let authSlice = createSlice({
    name:"auth",
    initialState:{
            user:null,
            isAuthenticated:false,
            isLoading: true,
    },
    reducers:{
       
        removeUser:(state, action)=>{
            state.user = null
                            state.isAuthenticated = false
                            state.isLoading = false
        },


        extraReducers  :(builder)=>{
            builder.addCase(loginUser.pendding, (state)=>{
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action)=>{
state.user = action.payload
state.isAuthenticated = true
state.isLoading = false
            })
            .addCase(loginUser.rejected , (state)=>{
state.user  = null
state.isAuthenticated = false
state.isLoading = false
            })
        }
    }
})


export const {addUser,removeUser} = authSlice.actions
export default authSlice.reducer