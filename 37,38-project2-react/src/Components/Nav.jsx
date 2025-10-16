import React from 'react'
import Button from './Button'

const Nav = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-4 px-6 flex items-center justify-between border-b-[1px] border-zinc-500">
      <div className="nleft flex items-center ">
          {/* Logo */}
        <img 
          className="h-8" 
          src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1146610/60c6708b1aef5530497173.png" 
          alt="logo" 
        />

        {/* Links */}
        <div className="Links flex items-center gap-10 px-6">
          {["Home", "Work", "Culture", "", "News"].map((elem, idx) => (
            <a 
              key={idx}
              href="#" 
              className='text-sm flex items-center gap-2 font-["Satoshi"]'
            >
              {/* Green dot for "Work" (before text) */}
              {idx === 1 && (
                <span 
                  style={{ boxShadow: "0 0 0.25em #00FF19" }} 
                  className="bg-green-400 inline-block w-2 h-2 rounded-full"
                ></span>
              )}

              {/* Normal text or vertical line */}
              {elem.length === 0 ? (
                <span className="w-[2px] h-7 bg-zinc-600 inline-block"></span>
              ) : (
                elem
              )}
            </a>
          ))}
        </div>
      </div>
      <Button />
      </div>
    </>
  )
}

export default Nav
