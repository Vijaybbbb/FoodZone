import { configureStore } from "@reduxjs/toolkit";
import LoginStatus from './loginSlice'
import  singleProduct  from "./selecteditemSlice";

export const store  =  configureStore({
       reducer:{
              data : LoginStatus,
              product:singleProduct
       }
})