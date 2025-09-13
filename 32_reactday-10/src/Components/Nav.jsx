import React from 'react'


function Nav() {
  return (
    <>
       <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="text-blue-200 border rounded border-blue-200 px-2 py-3 "
          href="/create"
        >
          Add New product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl w-[80%] mb-2 font-semibold">Category Filter</h1>
        <ul className="w-[80%] ">
          <li className="flex items-center  mb-3 ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-500"></span>{" "}
            Cat 1
          </li>
          <li className="flex items-center  mb-3 ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-500"></span>{" "}
            Cat 2
          </li>
          <li className="flex items-center  mb-3 ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-500"></span>{" "}
            Cat 3
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav