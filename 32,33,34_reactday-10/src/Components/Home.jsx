import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { Productcontext } from "../utils/Context";
import Loading from "../utils/Loading";
import axios from "../utils/Axios"; // use your axios instance with baseURL

function Home() {
  const [products] = useContext(Productcontext);
  const [filteredProducts, setFilteredProducts] = useState([]); // always an array

  const { search } = useLocation();
  // robust way to read ?category=... (handles missing or encoded values)
  const category = new URLSearchParams(search).get("category") || "";

  useEffect(() => {
    // Do nothing until context products are loaded
    if (!products) return;

    // If no category → show all products from context
    if (!category) {
      setFilteredProducts(Array.isArray(products) ? products : []);
      return;
    }

    // If products already contain items for this category, use them (fast)
    const fromContext = Array.isArray(products)
      ? products.filter((p) => String(p.category) === String(category))
      : [];

    if (fromContext.length > 0) {
      setFilteredProducts(fromContext);
      return;
    }

    // Fallback — call API for category (async IIFE)
    (async () => {
      try {
        const { data } = await axios.get(`/products/category/${encodeURIComponent(category)}`);
        setFilteredProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Category fetch error:", err);
        setFilteredProducts([]); // fallback to empty array
      }
    })();
  }, [category, products]);

  // Show loading while context hasn't loaded yet
  if (!products) return <Loading />;

  return (
    <div className="flex w-screen h-screen">
      <Nav />
      <div className="w-[85%] p-5 flex flex-wrap items-start gap-5 overflow-x-hidden overflow-y-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
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
