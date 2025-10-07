import axios from "axios";
import { getproducts } from "../Store/reducers/ProductReducers"; // ✅ correct path

export const asyncgetproducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getproducts(response.data));
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};
