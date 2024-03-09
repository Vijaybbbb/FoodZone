import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
       name:'Login',
       initialState:{
              cart:[]
       },
       reducers:{
              addToCart:(state,action)=>{
                     state.cart.push(action.payload)
              },
              clearCart:(state)=>{
                     console.log("cartcleared");
                     state.cart = []
              }
       }
})

export const {addToCart,clearCart}  = cartSlice.actions
export default cartSlice.reducer