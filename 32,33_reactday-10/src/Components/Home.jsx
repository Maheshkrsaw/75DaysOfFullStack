import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { Productcontext } from "../utils/Context";
import Loading from "../utils/Loading";

function Home() {
  const [products] = useContext(Productcontext); 
  const [filteredProducts, setFilteredProducts] = useState([]); // default empty array

  // Initial load → show all products
  useEffect(() => {
    if (products) setFilteredProducts(products);
  }, [products]);

  // Filter handler → pass to Nav
  const handleFilter = (category) => {
    if (!products) return;
    if (category) {
      const filtered = products.filter((p) => p.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // All products
    }
  };

  if (!products || filteredProducts.length === 0) return <Loading />;

  return (
    <div className="flex w-screen h-screen">
      <Nav onFilter={handleFilter} />
      <div className="w-[85%] p-5 flex flex-wrap items-start gap-5 overflow-x-hidden overflow-y-auto">
        {filteredProducts.map((p, i) => (
          <Link
            key={i}
            to={`/Details/${p.id}`}
            className="mb-5 card p-5 border shadow rounded w-[18%] h-auto flex flex-col justify-start items-center bg-white"
          >
            <div
              className="transform hover:scale-105 w-full h-[150px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            ></div>
            <h1 className="text-sm mt-2 text-center">{p.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
