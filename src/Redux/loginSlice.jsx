import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
       name:'Login',
       initialState:{
              email:null,
              username:null,
              id:null
       },
       reducers:{
              findUser:(state,action)=>{
                     console.log(action.payload);
              }
       }
})

export const {findUser}  = loginSlice.actions
export default loginSlice.reducer