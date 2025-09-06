import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'


function App() {

  const raw = [
  {
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60", // Album cover
    name: "Blinding Lights",
    artist: "The Weeknd",
    added: false
  },
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60",
    name: "Levitating",
    artist: "Dua Lipa",
    added: false
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
    name: "Peaches",
    artist: "Justin Bieber",
    added: false
  },
  {
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60",
    name: "Save Your Tears",
    artist: "The Weeknd",
    added: false
  }
];


   const [songData , setsongData]=useState(raw);
  const handleClick = (index) => {
  setsongData((prev) =>
    prev.map((item, itemIndex) =>
      itemIndex === index ? { ...item, added: !item.added } : item
    )
  );
};

  return (
    <>
    <div className='w-full h-screen bg-zinc-300 '>
      <Navbar data={songData} />
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
        {songData.map((obj , index) => {
         return <Card data={obj} index={index} handelclick={handleClick} key={index}/>
        })}       
      </div>
      </div>
    </>
  )
}

export default App