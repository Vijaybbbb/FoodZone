import { createSlice } from "@reduxjs/toolkit";


const userOrderSlice = createSlice({
       name:'product',
       initialState:{
             orderDetails:[]
             
       },
       reducers:{
              addToOrders:(state,action)=>{
                     console.log(action.payload);
                     state.orderDetails.push(action.payload)
              }
       }
})

export const {addToOrders}  = userOrderSlice.actions
export default userOrderSlice.reducer