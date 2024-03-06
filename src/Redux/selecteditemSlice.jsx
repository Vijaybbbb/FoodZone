import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
       name:'product',
       initialState:{
             productData:{
              id:null,
              name:null,
              imag:null,
              details:null,
              price:null,
              
             }
       },
       reducers:{
              singleProduct:(state,action)=>{
                     const { id, name, img, details ,price } = action.payload;
                      state.productData = { id, name, img, details , price };
              }
       }
})

export const {singleProduct}  = loginSlice.actions
export default loginSlice.reducer