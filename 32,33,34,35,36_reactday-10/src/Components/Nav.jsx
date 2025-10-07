import React, { useContext } from "react";
import { Productcontext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(Productcontext);

  let Unique_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  Unique_category = [...new Set(Unique_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
               ${(Math.random() * 255).toFixed()},
               ${(Math.random() * 255).toFixed()},
               0.6)`; // thoda dark for hover
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="text-blue-200 border rounded border-blue-200 px-2 py-3"
        href="/create"
      >
        Add New product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl w-[80%] mb-2 font-semibold">Category Filter</h1>

      <div className="w-[80%]">
        {Unique_category.map((c, i) => {
          const bg = color(); // random color har category ke liye fix
          return (
            <Link
              to={`/?category=${c}`}
              key={i}
              style={{
                "--hoverColor": bg, // custom CSS variable
              }}
              className="flex items-center mb-3 px-2 py-1 rounded cursor-pointer transition-all duration-200 hover:bg-[var(--hoverColor)] hover:text-white"
            >
              <span
                style={{ backgroundColor: bg }}
                className="rounded-full mr-2 w-[15px] h-[15px]"
              ></span>
              {c}
            </Link>
          );
        })}
      </div>

      <Link
        to="/"
        className="m-6 px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-md hover:from-green-500 hover:to-green-700 hover:shadow-lg transition-all duration-200 text-center"
      >
        🏠 Go Home
      </Link>
    </nav>
  );
}

export default Nav;
