import React from 'react'

function Card() {
  const data = [
    {
      name: "mahiya ve",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, quas?",
    },
    {
      name: "tere sang",
      description: "text quia, quae eum? Mahesh Kumar saw",
    },
  ];
const downloadclick=()=>{alert("chal raha h")}
  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center flex-col gap-4">
      {data.map((elem, index) => (
        <div
          key={index}
          className="px-3 py-2 bg-zinc-100 w-80 rounded shadow-md"
        >
          <h1 className="font-semibold">{elem.name}</h1>
          <p className="text-xs mt-2">{elem.description}</p>
          <button onClick={downloadclick} className="font-semibold text-xs text-white bg-blue-400 px-2 py-1 mt-2 rounded">
            Download now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
