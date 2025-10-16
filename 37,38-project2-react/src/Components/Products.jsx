import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

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
    {
      title: "RRR",
      description:
        "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: false,
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 20);
  };

  return (
    <div className="mt-15 relative">
      {products.map((elem, index) => (
        <Product val={elem} mover={mover} value={index} key={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem`, x: "-50%" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className=" window absolute w-[25rem] h-[20rem] bg-white left-[44%]  overflow-hidden"
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
