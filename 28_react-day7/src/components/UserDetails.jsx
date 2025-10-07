import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export const UserDetails = () => {
  const {name}= useParams()
  const navigate =useNavigate()
  const goBackHandler= ()=>{
    navigate("/users")
    
  }
  return (
    <div className='w-1/2 m-auto mt-10 '>
        <h1 className='text-red-200 text-5xl mb-2'>Userdetails</h1>
        <h1 className='text-xl'>hii! {name}</h1>


        <button onClick={goBackHandler} className='mt-5 px-3 py-2  bg-red-300'>Go Back</button>
    </div>
  )
}

export default UserDetails