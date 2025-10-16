import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, para, start, hover }) => {
  return (
    <div 
      className={`bg-zinc-800 p-5 rounded-xl ${width} ${hover} min-h-[25rem] flex flex-col justify-between transition-colors duration-300`}
    >
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className='text-2xl mt-10'>Whatever Heading</h1>
      </div>
      
      <div className="down w-full">
        {start && (
          <>
            <h1 className='text-5xl font-semibold tracking-tight leading-none'>
              Start a project
            </h1>
            <button className='rounded-full mt-5 px-5 py-2 border border-zinc-100'>
              Contact us
            </button>
          </>
        )}

        {para && (
          <p className='text-sm text-zinc-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quidem!
          </p>
        )}
      </div>
    </div>
  )
}

export default Card
