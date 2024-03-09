import { createSlice } from "@reduxjs/toolkit";


const userOrderSlice = createSlice({
       name:'product',
       initialState:{
             orderDetails:[]
             
       },
       reducers:{
              addToOrders:(state,action)=>{
                     const { id, name, img, details ,price } = action.payload;
                      state.productData = { id, name, img, details , price };
              }
       }
})

export const {addToOrders}  = loginSlice.actions
export default userOrderSlice.reducer