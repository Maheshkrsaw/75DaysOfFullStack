import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({title = "Get Started"}) => {
  return (
    <button className='bg-zinc-100 hover:bg-zinc-200 transition-all rounded-full px-6 py-2 flex 
    items-center gap-3 text-black'>
      <span className='text-sm font-light'>{title}</span>
      <FaArrowRightLong className='text-base' />
    </button>
  )
}

export default Button
