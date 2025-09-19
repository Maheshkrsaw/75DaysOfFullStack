import React from 'react'

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-10">
        
        {/* Left side big heading */}
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>

        {/* Right side links */}
        <div className="basis-1/2 flex gap-4">
          
          {/* Column 1 */}
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a
                key={`col1-${index}`}
                href="#"
                className="block text-white hover:text-purple-400 mb-2"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">company</h4>
            {["about us", "careers", "contact"].map((item, index) => (
              <a
                key={`col2-${index}`}
                href="#"
                className="block text-white hover:text-purple-400 mb-2"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">resources</h4>
            {["blog", "help center", "privacy"].map((item, index) => (
              <a
                key={`col3-${index}`}
                href="#"
                className="block text-white hover:text-purple-400 mb-2"
              >
                {item}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
