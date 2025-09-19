import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: true,
    },

  ];

  return (
    <div className="mt-15">
      {products.map((elem,index)=> <Product val={elem} key={index} />)}
    </div>
  );
}

export default Products;
