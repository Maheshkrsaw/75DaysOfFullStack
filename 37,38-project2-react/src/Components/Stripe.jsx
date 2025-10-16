import React from 'react'

const Stripe = ({ val }) => {
  return (
    <div className='w-[17.66%] mt-10 px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex items-center justify-between'>
      <img src={val.url} alt="" className="h-10 w-auto" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  );
}

export default Stripe;
