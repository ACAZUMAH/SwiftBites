import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../interface/redux";

const initialState: Cart = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default slice.reducer;

export const cartActions = slice.actions;
