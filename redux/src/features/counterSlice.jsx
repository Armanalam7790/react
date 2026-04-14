import { createSlice } from "@reduxjs/toolkit";

 var countSlice  = createSlice({
    name:"count",
    initialState:{
        count  :0,
    },
    reducers:{
        increament:(state)=>{
            state.count+=1
        },
        decreament:(state)=>{
            state.count-=1
        },

        increamentbyvalue:(state , action)=>{
  state.count += +action.payload
        }
    }
})



// export actions
export const { increament, decreament, increamentbyvalue } = countSlice.actions;

// export reducer
export default countSlice.reducer;


