import { Children, createContext } from "react";
import { Firebase } from "../Firebase/config";
import React from 'react'

//creating context for firbase
export const FirebaseContext = createContext(null)
export const paymentContext = createContext(null)

const Context = ({children}) => {
  return (

    
    <FirebaseContext.Provider value={{Firebase}}>

      {children}

    </FirebaseContext.Provider>
    
  )
}

export default Context
