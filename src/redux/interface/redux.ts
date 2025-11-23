import { PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "src/interface";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface CartActions extends PayloadAction<Partial<CartItem>> {}
