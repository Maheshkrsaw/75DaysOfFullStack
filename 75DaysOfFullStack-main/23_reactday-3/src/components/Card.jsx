import React, { useState } from 'react'

function Card() {

      const[val , setval ] = useState([
        { name: "Mahesh", age: 22 },
    { name: "Amit", age: 24 },
    { name: "Neha", age: 21 }])

  return (
    <div>
      {val.map(elem => 
       <>
        <h1>{elem.name}</h1>
        <h2>{elem.age}</h2>
       </>
      )}

      <button onClick={()=> setval(()=> val.map(item => item.name== "Mahesh" ? ({name: "Mahesh", age: 23}) : item  ))}
      className='px-2 py-2 text-white bg-blue-500 rounded-full'>click</button>
    </div>
  )
}

export default Card