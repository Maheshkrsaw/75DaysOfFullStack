import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {



     const data = [
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842910de1189f26accda_jologo-onLight.svg", number: "10" },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg", number: "20" },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg", number: "30" },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg", number: "40" },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg", number: "50" },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg", number: "60" },
  ];




  return (
    <div className='flex items-center justify-between '>
        {data.map((item, i) => (
         <Stripe val={item} key={i} />
      ))}
    </div>
  )
}

export default Stripes