import React, { useState } from 'react'

function Card() {
const [val,setval]=useState([1,2,3,4,5])

  return (
    <div className='p-4'>
     {val.map(item => <h1>{item}</h1>)}
     <button onClick={ ()=> setval (()=> val.filter ((elem,index)=> index != val.length-1))}
     className='px-2 py-1 text-white rounded-full bg-sky-300 text-x '>click</button>
    </div>
  )
}

export default Card