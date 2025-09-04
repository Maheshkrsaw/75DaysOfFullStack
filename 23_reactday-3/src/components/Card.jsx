import React, { useState } from 'react'



function Card() {
const[val , setval]=useState(12);

  return (
    <div className='p-3'>
      <h1 className='px-10'>{val}</h1>
     <button onClick={()=>setval((prev)=>prev+1)} 
     className='px-2 py-2 text-white bg-sky-300 rounded-full'>increament karo </button>
     
    </div>
  )
}

export default Card