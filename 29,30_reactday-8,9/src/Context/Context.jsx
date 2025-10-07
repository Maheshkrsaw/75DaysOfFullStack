import React from 'react'
import { createContext,useState } from "react";


export const Usercontext = createContext();

const Context= (props) => {
    const [user , setuser ] =useState([
        {id:0 , username :"john doe" , city:"usa"},
        {id:1 , username :"Krishna" , city:"India"},
        {id:3 , username :"sunny  doe" , city:"usa"},
    ])

    console.log(props);
    return <Usercontext.Provider value={{user,setuser}}>{props.children}</Usercontext.Provider>
}

export default Context;
