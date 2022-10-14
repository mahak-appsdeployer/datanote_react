import React, {useContext, useEffect} from 'react';
import datacontext from '../context/data/dataContext';
//rfc


export default function Home() {
    const a = useContext(datacontext)
useEffect(() => {
  a.updatestate()

  
}, [])

    
  return (
    <div>{a.state1.name}</div>
  )
}
