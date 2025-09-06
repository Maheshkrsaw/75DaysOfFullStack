import React from 'react'
import Card from './components/card'

function App() {

const data = [
  { name : "Mahesh" , profession : "coder" , image:"https://images.unsplash.com/photo-1621179314026-0f23b2835c1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" },
  { name : "sohan" , profession : "artist" , image:"https://plus.unsplash.com/premium_photo-1732117940281-e1598445016c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" },
  { name : "rohan" , profession : "painter" , image:"https://images.unsplash.com/photo-1558357896-5e2eb7aff45b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" },
  { name : "mohan" , profession : "graphics" , image:"https://images.unsplash.com/photo-1548842149-376b275ff705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" },
]


  return (
    <>
       <div className='w-full h-screen bg-zinc-200 flex items-center gap-4 justify-center'>
      {
        data.map((item,index)=>(
          <Card values={item} />
        ))
      }
    </div>
    </>
  )
}

export default App