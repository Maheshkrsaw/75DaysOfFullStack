import React from 'react'

function Navbar({data}) {


  return (


  <div className='px-20 py-3 w-full flex justify-between items-center'>
        <h3>Orange</h3>
        <div className='flex p-2 px-4 text-white rounded-md text-xs bg-orange-600 gap-2'>
            <h3>Favourites </h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>

    </div> 


  )
}

export default Navbar