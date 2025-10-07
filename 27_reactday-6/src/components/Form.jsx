import React from 'react'
import { useForm } from 'react-hook-form'

function Form({ handelsubmitdata }) {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    handelsubmitdata(data) // parent se aaya hua function call hoga
    reset() // form clear ho jayega
  }



  return (
    <div className='m-10 flex gap-10 justify-center'>  
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-10'>
        <input 
          {...register("name")} 
          className='rounded-md px-2 py-1 font-semibold outline-none bg-white w-40' 
          type="text" 
          placeholder='Name' 
        />
        <input 
          {...register("email")} 
          className='rounded-md px-2 py-1 font-semibold outline-none bg-white w-40' 
          type="email" 
          placeholder='Email' 
        />
        <input 
          {...register("image")} 
          className='rounded-md px-2 py-1 font-semibold outline-none bg-white w-40' 
          type="text" 
          placeholder='Image Url' 
        />
        <input 
          type="submit" 
          className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold cursor-pointer' 
          value="Submit" 
        />
      </form>
    </div>
  )
}

export default Form
