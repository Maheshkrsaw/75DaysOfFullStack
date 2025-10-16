import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { products: [] },
  reducers: {
    // API se products laane ke liye
    getproducts: (state, action) => {
      state.products = action.payload;
    },

    // Product ko delete karne ke liye
    productsdelete: (state, action) => {
      state.products.splice(action.payload, 1); // index ke basis par delete
    },
  },
});

// ✅ Actions export
export const { getproducts, productsdelete } = productSlice.actions;

// ✅ Reducer export
export default productSlice.reducer;
