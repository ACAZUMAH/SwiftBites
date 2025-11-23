import { MenuItem } from "src/interface";
import { CartItem } from "src/redux/interface/redux";
import { cartActions } from "src/redux/reducers/cart";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";

export const useCartItems = () => {
  return useAppSelector((state) => state.cart.items);
};

export const useAddToCart = () => {
  const dispatch = useAppDispatch();

  return (item: MenuItem) => {
    dispatch(cartActions.addItem(item));
  };
};

export const useCartItemAlreadyExist = (item: MenuItem) => {
  return useAppSelector((state) =>
    state.cart.items.find((cartItem) => cartItem.item.id === item.id)
  );
};

export const useCartItemsTotalCount = () => {
  return useAppSelector((state) => state.cart.items).length;
};

export const useCartTotals = () => {
  const items = useCartItems();
  const totalCount = useCartItemsTotalCount();
  const subTotal = items.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );
  const tax = subTotal * 0.1;
  const deliveryFee = 0;
  const total = subTotal + tax + deliveryFee;

  return { subTotal, tax, deliveryFee, total, totalCount };
};

export const useIncreaseQuantity = () => {
  const dispatch = useAppDispatch();

  return (item: CartItem) => {
    dispatch(cartActions.increaseQuantity(item.item.id));
  };
};

export const useDecreaseQuantity = () => {
  const dispatch = useAppDispatch();

  return (item: CartItem) => {
    dispatch(cartActions.decreaseQuantity(item.item.id));
  };
};

export const useClearCart = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(cartActions.clearCart());
  };
};
