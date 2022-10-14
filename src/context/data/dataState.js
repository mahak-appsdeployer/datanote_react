import React , {useState}from "react";

import datacontext from './dataContext';



 const DataState = (props) => {

    const state = {
        "name" : "abc",
        
    }

    const[state1, setstate1] = useState(state)
    const updatestate = () => {
        setTimeout(() => {
           setstate1({
            "name" : "efg"
           })
        }, 1000);
    }
  return (
  <datacontext.Provider value={{state1, updatestate}}>
           {props.children}
  </datacontext.Provider>
  )
}


export default DataState;


