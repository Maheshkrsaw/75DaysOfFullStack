import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import { Productcontext } from "../utils/Context";



const Details = () => {
  const [products, setProducts] = useContext(Productcontext); // context
  const { id } = useParams();
  const navigate = useNavigate();

  // Always derive product from context (no separate state)
  const product = products.find((p) => p.id == id);

  const ProductDeleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts); // update context
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/"); // go back to Home
  };



  return (
    <div className="w-[70%] flex h-full items-center justify-between m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={product.image}
        alt={product.title}
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-3">{product.category}</h3>
        <h3 className="text-red-300 mb-3">₹ {product.price}</h3>
        <p className="mb-5">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="mr-7 text-blue-200 border rounded border-blue-200 px-4 py-2">
          Edit
        </Link>
        <button
          onClick={() => ProductDeleteHandler(product.id)}
          className="mr-7 text-red-200 border rounded border-red-200 px-4 py-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Details;
