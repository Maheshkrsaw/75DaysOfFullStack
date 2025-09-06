import React, { useState } from 'react'
import Card from './components/card'

function App() {
  const raw = [
    { name: "Mahesh", profession: "coder", image: "https://images.unsplash.com/photo-1621179314026-0f23b2835c1e?w=500&auto=format&fit=crop&q=60", friends: false },
    { name: "sohan", profession: "artist", image: "https://plus.unsplash.com/premium_photo-1732117940281-e1598445016c?w=500&auto=format&fit=crop&q=60", friends: false },
    { name: "rohan", profession: "painter", image: "https://images.unsplash.com/photo-1558357896-5e2eb7aff45b?w=500&auto=format&fit=crop&q=60", friends: false },
    { name: "mohan", profession: "graphics", image: "https://images.unsplash.com/photo-1548842149-376b275ff705?w=500&auto=format&fit=crop&q=60", friends: false },
  ]

  const [data, setData] = useState(raw)

  const handleClick = (changingIndex) => {
    setData((prev) =>
      prev.map((item, index) =>
        index === changingIndex ? { ...item, friends: !item.friends } : item
      )
    )
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center gap-4 justify-center'>
      {data.map((item, index) => (
        <Card key={index} values={item} index={index} handleClick={handleClick} />
      ))}
    </div>
  )
}

export default App
