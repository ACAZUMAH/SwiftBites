import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "src/interface";
import { Cart } from "../interface/redux";

const initialState: Cart = {
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: Cart, action: PayloadAction<MenuItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.item.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ item, quantity: 1 });
      }
    },

    removeItem: (state: Cart, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items.filter((i) => i.item.id !== id);
    },

    increaseQuantity: (state: Cart, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state: Cart, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.item.id === id);
      if (item) {
        item.quantity -= 1;
      }
    },

    clearCart: (state: Cart) => {
      state.items = [];
    },
  },
});

export default slice.reducer;

export const cartActions = slice.actions;
