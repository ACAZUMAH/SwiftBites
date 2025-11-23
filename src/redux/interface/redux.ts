import { PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "src/interface";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface CartActions extends PayloadAction<Partial<CartItem>> {}
