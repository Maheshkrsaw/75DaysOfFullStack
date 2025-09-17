import React, { useContext, useState } from "react";
import { Productcontext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const [products, setproducts] = useContext(Productcontext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have at least 5 characters");
      return; // stop here if invalid
    }

    const product = {
      id: nanoid(),
      title: title.trim(),
      image: image.trim(),
      category: category.trim(),
      price: price.trim(),
      description: description.trim(),
    };

    setproducts([...products, product]); // ✅ add new product
    console.log("New Product Added:", product); // check in console
  };

  return (
    <form
      onSubmit={submitHandler}
      className="h-screen w-screen flex flex-col items-center p-[5%]"
    >
      <h1 className="mb-5 w-1/2 text-2xl">Add a Product</h1>

      <input
        className="text-xl bg-zinc-200 rounded p-3 mb-3 w-1/2"
        type="text"
        placeholder="title"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <input
        className="text-xl bg-zinc-200 rounded p-3 mb-3 w-1/2"
        type="url"
        placeholder="Image url"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <div className="flex justify-between w-1/2">
        <input
          className="text-xl bg-zinc-200 rounded p-3 mb-3 w-[48%]"
          type="number"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />

        <input
          className="text-xl bg-zinc-200 rounded p-3 mb-3 w-[48%]"
          type="text"
          placeholder="Category"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
      </div>

      <textarea
        onChange={(e) => setdescription(e.target.value)}
        placeholder="enter product description here.."
        value={description}
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
