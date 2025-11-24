import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "src/components/CustomHeader";
import { CartHeader } from "./components/CartHeader";

export const Cart: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 px-4">
      <CustomHeader title="Cart" onNavigateBack={() => {}} />
      <CartHeader />
    </SafeAreaView>
  );
};
