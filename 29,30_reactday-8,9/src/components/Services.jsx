import React, { useEffect, useState } from "react";

function Services() {
    const [first,setfirst]=useState("yhis  is normal data ")
    const [second,setsecond]=useState("this is big daat ")

  useEffect(() => {
    
    console.log("🟢 Services Component Created");

    return () => {
      console.log("🔴 Services Component Deleted");
    };
  }, [second]); // [] → sirf mount & unmount par chalega

  return (
    <div className="p-5">
      <h1>{first}</h1>
        <button onClick={()=> setfirst("normal data has beesn chasngedss !!!")} className="px-2 py-1 bg-red-500 rounded mb-5">First</button>
      <h1>{second}</h1>
            <button onClick={()=> setsecond("normal data has beesn chasngedss !!!")} className="px-2 py-1 bg-blue-500 rounded">Second</button>
    </div>
  );
}

export default Services;
