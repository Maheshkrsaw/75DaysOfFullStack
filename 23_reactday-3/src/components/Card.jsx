import React, { useState } from "react";

function Card() {
  const [val, setval] = useState({ name: "mahesh", isBanned: false });

  return (
    <div className="px-2 py-4 ">
      <h1> name :{val.name}</h1>
      <h2>banned : {val.isBanned.toString()}</h2>
      <button
        onClick={() => setval({ ...val, isBanned: !val.isBanned })}
        className={`px-2 py-2 ${
          val.isBanned ? "bg-blue-500" : "bg-red-500"
        } rounded-full text-sm mt-2  text-white`}
      >
        Change{" "}
      </button>
    </div>
  );
}

export default Card;
