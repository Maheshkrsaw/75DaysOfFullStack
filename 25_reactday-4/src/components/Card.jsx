import React from 'react'

function card({values}) {
  const {image , name ,profession} = values;
  return (
    <div className='w-53 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-42 bg-sky-500'>
        <img className='w-full h-full object-top object-cover' src={image} alt="" />
      </div>
      <div className='w-full p-3 font-semibold'>
        <h3 className='text-2xl'>{name}</h3>
        <h5>{profession}</h5>
        <button className=' mt-2 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>Add Friend </button>
      </div>
    </div>
  )
}

export default card