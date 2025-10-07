import React, { useContext, useState } from "react";
import { Productcontext } from "../utils/Context";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // <-- import toast

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useContext(Productcontext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each input must have at least 5 characters (price at least 1)");
      return;
    }

    const product = {
      id: nanoid(),
      title: title.trim(),
      image:
        image.trim() ||
        "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=500&auto=format&fit=crop&q=60",
      category: category.trim(),
      price: price.trim(),
      description: description.trim(),
    };

    const newProducts = [...products, product];
    setProducts(newProducts); // update context
    localStorage.setItem("products", JSON.stringify(newProducts)); // save immediately

    // Show toast **after adding**
    toast.success("Product Added Successfully");

    // Reset form
    setTitle("");
    setImage("");
    setCategory("");
    setPrice("");
    setDescription("");
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
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <input
        className="text-xl bg-zinc-200 rounded p-3 mb-3 w-1/2"
        type="url"
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <div className="flex justify-between w-1/2">
        <input
          className="text-xl bg-zinc-200 rounded p-3 mb-3 w-[48%]"
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <input
          className="text-xl bg-zinc-200 rounded p-3 mb-3 w-[48%]"
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </div>

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter product description here.."
        value={description}
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>

        <Link
          to="/"
          className="ml-3 py-2 px-5 border rounded border-green-200 text-green-300"
        >
          Home
        </Link>
      </div>
    </form>
  );
};

export default Create;
