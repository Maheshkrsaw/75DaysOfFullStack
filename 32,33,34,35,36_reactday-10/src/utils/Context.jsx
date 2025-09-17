import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Productcontext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  // API se products fetch karo
  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data)); // save to localStorage
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    // Agar localStorage me data nahi h, to API se fetch karo
    if (!products) {
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
