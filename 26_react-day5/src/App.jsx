import React, { useState } from 'react'

function App() {
  const[val , setval]=useState({name : "" , email :""})
  const handelSubmit =(dets)=>{
    dets.preventDefault();
  }
  
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <input onChange={(event)=>setval({...val,name:event.target.value})} type="text" placeholder='Enter your name ' />
        <input onChange={(event)=>setval({...val,email:event.target.value})} type="email" placeholder='Email ' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App