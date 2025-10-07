import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto flex gap-2'>
        <Card width="basis-1/3" para={true} start={false} />
        <Card 
          width="basis-2/3" 
          para={false} 
          start={true} 
          hover="hover:bg-purple-600" 
        />
      </div>
    </div>
  )
}

export default Cards
