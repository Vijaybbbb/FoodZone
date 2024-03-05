import { configureStore } from "@reduxjs/toolkit";
import LoginStatus from './loginSlice'

export const store  =  configureStore({
       reducer:{
              data : LoginStatus
       }
})