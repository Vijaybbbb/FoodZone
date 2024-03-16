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
              category:null
              
             }
       },
       reducers:{
              singleProduct:(state,action)=>{
                     const { id, name, img, details ,price, category } = action.payload;
                      state.productData = { id, name, img, details , price, category };
              }
       }
})

export const {singleProduct}  = loginSlice.actions
export default loginSlice.reducer