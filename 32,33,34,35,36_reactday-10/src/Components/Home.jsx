import React, { useContext } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { Productcontext } from "../utils/Context";
import Loader from "../utils/Loading"; // ✅ renamed import

function Home() {
  const [products] = useContext(Productcontext);

  const { search } = useLocation();
  const category = new URLSearchParams(search).get("category") || "";

  if (!products) return <Loader />; // ✅ replaced Loading with Loader

  // Filter products directly from context
  const displayedProducts = category
    ? products.filter((p) => String(p.category) === String(category))
    : products;

  return (
    <div className="flex w-screen h-screen">
      <Nav />
      <div className="w-[85%] p-5 flex flex-wrap items-start gap-5 overflow-x-hidden overflow-y-auto">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((p) => (
            <Link
              key={p.id}
              to={`/Details/${p.id}`}
              className="mb-5 card p-5 border shadow rounded w-[18%] h-auto flex flex-col justify-start items-center bg-white"
            >
              <div
                className="transform hover:scale-105 w-full h-[150px] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <h1 className="text-sm mt-2 text-center">{p.title}</h1>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
