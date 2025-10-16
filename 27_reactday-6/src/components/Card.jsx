import React from 'react'

function Card({user , handelremove,id}) {
  return (
   <>
 
      <div  className='w-32 h-full bg-zinc-100 rounded-lg flex items-center flex-col p-2'> 
      <div className='w-10 h-10 rounded-full bg-zinc-50 overflow-hidden'>
        <img className='object-cover h-full w-full' src={user.image} alt="" />
      </div>
      <h1 className='mt-1 font-bold text-center leading-none'>{user.name}</h1>
<h4 className='opacity-50 text-xs font-semibold text-center truncate w-28'>
  {user.email}
</h4>
      <p className='mt-1 text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
      <button onClick={()=> handelremove(id)} className='px-2 py-1 mt-3 bg-red-500 text-white text-xs rounded-xl'>Remove it</button>
    </div>
   
   </>
  )
}

export default Card