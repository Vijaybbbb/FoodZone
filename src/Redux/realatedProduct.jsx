import { createSlice } from "@reduxjs/toolkit";


const relatedProduct = createSlice({
       name:'Login',
       initialState:{
              relatedProduct:null
             
       },
       reducers:{
              findRelatedProducts:(state,action)=>{
                     const {relatedProduct} = action.payload
                     console.log(relatedProduct);
                     state.relatedProduct = relatedProduct       
              }
       }
})

export const {findRelatedProducts}  = relatedProduct.actions
export default relatedProduct.reducer