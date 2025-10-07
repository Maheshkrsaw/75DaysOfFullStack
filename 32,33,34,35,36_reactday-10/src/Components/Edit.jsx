import React, { useContext, useEffect, useState } from 'react';
import { Productcontext } from '../utils/Context';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Edit = () => {
  const [products, setProducts] = useContext(Productcontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  // Load product data by id
  useEffect(() => {
    if (products && products.length > 0) {
      const existing = products.find((p) => p.id == id);
      if (existing) setProduct(existing);
    }
  }, [id, products]);

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.toString().trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each input must have at least 5 characters (price at least 1)");
      return;
    }

    // Update product in context
    const updatedProducts = products.map((p) =>
      p.id == id ? { ...product, id: p.id } : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    navigate("/"); // go back home
            
  };

  return (
    <form
      onSubmit={submitHandler}
      className="h-screen w-screen flex flex-col items-center p-[5%]"
    >
      <h1 className="mb-5 w-1/2 text-2xl">Edit Product</h1>

      <input
        className="text-xl bg-zinc-200 rounded p-3 mb-3 w-1/2"
        type="text"
        placeholder="Title"
        onChange={ChangeHandler}
        name="title"
        value={product.title}
      />

      <input
        className="text-xl bg-zinc-200 rounded p-3 mb-3 w-1/2"
        type="url"
        name="image"
        placeholder="Image URL"
        onChange={ChangeHandler}
        value={product.image}
      />

      <div className="flex justify-between w-1/2">
        <input
          className="text-xl bg-zinc-200 rounded p-3 mb-3 w-[48%]"
          type="number"
          name="price"
          placeholder="Price"
          onChange={ChangeHandler}
          value={product.price}
        />

        <input
          className="text-xl bg-zinc-200 rounded p-3 mb-3 w-[48%]"
          type="text"
          placeholder="Category"
          name="category"
          onChange={ChangeHandler}
          value={product.category}
        />
      </div>

      <textarea
        onChange={ChangeHandler}
        placeholder="Enter product description here.."
        value={product.description}
        name="description"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Save Changes
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

export default Edit;
