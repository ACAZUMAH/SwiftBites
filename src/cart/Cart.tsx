import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "src/components/CustomHeader";
import { useCartItems } from "src/hook/useCartActions";
import { CartList } from "./components/CartList";

export const Cart: React.FC = () => {
  const cartItems = useCartItems();
  return (
    <SafeAreaView className="flex-1 px-4">
      <CustomHeader title="Cart" onNavigateBack={() => {}} />
      <CartList items={cartItems} />
    </SafeAreaView>
  );
};
