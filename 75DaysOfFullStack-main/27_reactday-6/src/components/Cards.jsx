import React from 'react'
import Card from './Card'
function Cards({users ,handelremove}) {
  return (
    <div className='w-full flex justify-center  max-h-96 overflow-auto flex-wrap gap-4  p-4'>
       { users.map((item,index)=> {
        return <Card handelremove={handelremove} id={index} user={item} key={index}  />
       })}
     
     
     
      </div>
  )
}

export default Cards