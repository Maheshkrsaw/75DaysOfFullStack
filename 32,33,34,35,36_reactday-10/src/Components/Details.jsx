import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import { Productcontext } from "../utils/Context";

const Details = () => {
  const [products] = useContext(Productcontext); // get products from context
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!product && products && products.length > 0) {
      const found = products.filter((p) => p.id == id)[0]; // get first matching product
      if (found) setProduct(found);
    }
  }, [products, product, id]); // run effect when products or id change


    

const DeleteHandler = (id) => {
  const filteredProducts = products.filter((p) => p.id != id);
  
  // update context
  setProduct(filteredProducts);

  // update localStorage
  localStorage.setItem("products", JSON.stringify(filteredProducts));

  // product ko null karo (kyunki delete ho gaya)
  setProduct(null);

  // navigate home
  navigate("/");
};

  return (
    <>
      {product ? (
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
             <Link className="mr-7 text-blue-200 border rounded border-blue-200 px-4 py-2">
              Edit
            </Link>
          <button 
  onClick={() => DeleteHandler(id)} 
  className="mr-7 text-red-200 border rounded border-red-200 px-4 py-2"
>
  Delete
</button>

          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
