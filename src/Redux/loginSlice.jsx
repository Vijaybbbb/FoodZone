import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
       name:'Login',
       initialState:{
              email:null,
              password:null,
             
       },
       reducers:{
              findUser:(state,action)=>{
                     const {email,password} = action.payload
                     state.email = email,
                     state.password = password
              }
       }
})

export const {findUser}  = loginSlice.actions
export default loginSlice.reducer