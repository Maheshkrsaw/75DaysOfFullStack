import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='flex items-center justify-between p-5 '>
        <h1 className='font-bold text-2xl'>Mahesh</h1>
        <div className='flex gap-10 font-semibold'>
          <NavLink style={(e)=>{
            return {
                color: e.isActive ? "tomato" : "",
            }
          }}  to="/">Home</NavLink>
          <NavLink style={(e)=>{
            return {
                color: e.isActive ? "tomato" : "",
            }
          }} to="/users">Users</NavLink>
          <NavLink style={(e)=>{
            return {
                color: e.isActive ? "tomato" : "",
            }
          }} to="/about">About</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav