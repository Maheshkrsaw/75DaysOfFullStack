import React, { useState } from 'react'

function App() {
  const[val , setval]=useState({name : ""})
  
  return (
    <div>
      <form action="">
        <input onChange={(event)=>setval({name:event.target.value})} type="text" placeholder='Enter your name ' />
      </form>
    </div>
  )
}

export default App