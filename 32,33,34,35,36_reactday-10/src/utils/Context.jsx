import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Productcontext = createContext();

const Context = (props) => {
  // Load from localStorage if available, else empty array
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  // Fetch products from API if localStorage is empty
  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    if (!products || products.length === 0) {
      getProducts();
    }
  }, []);

  return (
    <Productcontext.Provider value={[products, setProducts]}>
      {props.children}
    </Productcontext.Provider>
  );
};

export default Context;
