import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Productcontext = createContext();

const Context = (props) => {
  const [products, setproducts] = useState(null);

const getproducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setproducts(data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <Productcontext.Provider value={[products, setproducts]}>
      {props.children}
    </Productcontext.Provider>
  );
};

export default Context;
