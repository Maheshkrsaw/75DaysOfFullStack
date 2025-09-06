import React from 'react'

function Card({ values, index, handleClick }) {
  const { image, name, profession, friends } = values;

  return (
    <div className='w-52 bg-white rounded-md overflow-hidden shadow-md'>
      <div className='w-full h-40 bg-sky-500'>
        <img className='w-full h-full object-cover' src={image} alt={name} />
      </div>
      <div className='w-full p-3 font-semibold'>
        <h3 className='text-2xl'>{name}</h3>
        <h5 className='text-sm text-gray-600'>{profession}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`mt-2 px-3 py-1 text-xs text-white font-semibold rounded-md 
            ${friends ? "bg-green-500" : "bg-blue-500"}`}
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  )
} 

export default Card
