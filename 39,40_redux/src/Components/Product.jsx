import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../action/Productactions"; // ✅ sahi import
import { userdelete } from "../Store/reducers/Userreducer";
import { productsdelete } from "../Store/reducers/ProductReducers";

const Product = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

    const deletehandler = (index) => {
    dispatch(productsdelete(index)); // ✅ delete call
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Products List</h1>
      <ul className="bg-white rounded-lg shadow-md w-full max-w-md">
        {products.map((product, index) => (
          <li
            key={product.id}
            className="px-4 py-2 border-b last:border-b-0 hover:bg-gray-50 transition flex justify-between items-center"
          >
            {product.title}
            <span
              onClick={() => deletehandler(index)}
              className="text-red-500 font-bold cursor-pointer"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
