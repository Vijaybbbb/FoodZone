// import { configureStore } from "@reduxjs/toolkit";
// import LoginStatus from './loginSlice'
// import  singleProduct  from "./selecteditemSlice";

// export const store  =  configureStore({
//        reducer:{
//               data : LoginStatus,
//               product:singleProduct
//        }
// })

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import LoginStatus from './loginSlice'
import  singleProduct  from "./selecteditemSlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
       userData:LoginStatus,
       selectedProduct:singleProduct
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

