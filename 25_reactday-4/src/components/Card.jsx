import React from 'react'

function card({data , handelclick , index}) {

    const {image , artist , added , name}=data;


  return (
    <div className='w-60 bg-zinc-100 rounded-md flex gap-4 p-4 pb-6 mt-5 relative'>
      <div className='w-20 h-20 bg-orange-400 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover ' src={image} alt="" />
      </div>
      <div className='' >
        <h3 className='text-xl leading-none font-semibold'>{name}</h3>
        <h6 className='text-xs'>{artist}</h6>
        <button onClick={()=>handelclick(index)}
         className={` ${added=== false ? "bg-orange-600" : "bg-teal-500" } text-white rounded-full px-1 py-2 whitespace-nowrap absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2 text-xs`}>
  {added === false ? "Add to Favourite" : "Added"}
</button>

      </div>
    </div>
  )
}

export default card 