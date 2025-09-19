import React from 'react'

const Marquee = ({logourl}) => {
  return (
    <div className='flex items-center w-full py-5 gap-10  whitespace-nowrap overflow-hidden '>
      {logourl.map(url => <img src={url} key={url.id} className='' />)}
      {logourl.map(url => <img src={url}  key={url.id} className='' />)}
    </div>
  )
}

export default Marquee