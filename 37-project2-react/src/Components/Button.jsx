import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
  return (
    <div className='min-w-30 bg-zinc-100 rounded-full px-4 gap-2 py-1 text-black flex items-center justify-between '>
        <span className='text-sm font-medium'>Get Started</span>
        <FaArrowRightLong />
    </div>
  )
}

export default Button