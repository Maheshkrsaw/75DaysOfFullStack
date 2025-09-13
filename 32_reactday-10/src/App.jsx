import React from "react";

function App() {
  return (
    <div className="w-screen h-screen flex"> {/* flex lagana jaruri */}
      {/* Sidebar */}
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
          <li className="flex items-center bg-red-200 mb-3 ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] "></span>{" "}
            Cat 1
          </li>
          <li className="flex items-center bg-red-200 mb-3 ">
            <span className="rounded-full mr-2 w-[15px] h-[15px]"></span>{" "}
            Cat 2
          </li>
          <li className="flex items-center bg-red-200 mb-3 ">
            <span className="rounded-full mr-2 w-[15px] h-[15px] "></span>{" "}
            Cat 3
          </li>
        </ul>
      </nav>

      {/* Right Content */}
      <div className="w-[85%]  p-5 flex flex-wrap overflow-x-hidden overflow-y-auto ">
        {/* Card */}
        <div className=" mb-5 card p-5 border shadow rounded w-[18%] h-[25vh] flex flex-col justify-center items-center bg-white">
          <div
            className="  transform hover:scale-115 w-full h-[80%] bg-contain bg-no-repeat bg-center  "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1611262588019-db6cc2032da3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjfGVufDB8fDB8fHww   ')",
            }}
          ></div>
          <h1 className="text-sm mt-2 text-center">
            Lorem ipsum dolor sit amet.
          </h1>
        </div>


        
        
      </div>
    </div>
  );
}

export default App;
