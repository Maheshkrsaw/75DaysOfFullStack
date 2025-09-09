import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='flex items-center justify-between p-5 bg-sky-300'>
        <h1 className='font-bold text-2xl'>Mahesh</h1>
        <div className='flex gap-10 font-semibold'>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav