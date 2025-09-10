import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
   <div className='w-1/2 m-auto mt-10 '>
        <h1 className='text-red-200 text-5xl mb-2'>Users</h1>
        <div className='flex w-1/2 flex-col mt-5'>
            <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/users/john"> John </Link>
            <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/users/Ayush"> Ayush </Link>
            <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300' to="/users/Mahesh"> Mahesh </Link>
           
        </div>
    </div>
  )
}

export default Users 