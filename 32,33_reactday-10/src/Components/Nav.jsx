import React, { useContext } from "react";
import { Productcontext } from "../utils/Context";

function Nav({ onFilter }) {
  const [products] = useContext(Productcontext);

  // Unique categories nikalna
  let Unique_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  Unique_category = [...new Set(Unique_category)];

  // Random color for category badge
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
               ${(Math.random() * 255).toFixed()},
               ${(Math.random() * 255).toFixed()},
               0.4)`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a className="text-blue-200 border rounded border-blue-200 px-2 py-3 mb-3" href="/create">
        Add New product
      </a>
      <h1 className="text-2xl w-[80%] mb-2 font-semibold">Category Filter</h1>
      <div className="w-[80%]">
        {Unique_category.map((c, i) => (
          <button
            key={i}
            onClick={() => onFilter(c)}
            className="flex items-center mb-3 w-full text-left"
          >
            <span
              style={{ backgroundColor: color() }}
              className="rounded-full mr-2 w-[15px] h-[15px]"
            ></span>
            {c}
          </button>
        ))}
        {/* Show all button */}
        <button
          onClick={() => onFilter(null)}
          className="flex items-center mb-3 w-full text-left font-semibold"
        >
          
        </button>
      </div>
    </nav>
  );
}

export default Nav;
