import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "src/components/CustomHeader";
import { useAppNavigation } from "src/hook/useAppNavigation";
import { useCartItems } from "src/hook/useCartActions";
import { CartHeader } from "./components/CartHeader";
import { CartList } from "./components/CartList";

export const Cart: React.FC = () => {
  const { navigateBack } = useAppNavigation();
  const cartItems = useCartItems();
  return (
    <SafeAreaView className="flex-1 px-4">
      <View>
        <CustomHeader style="mb-4" title="Cart" onNavigateBack={navigateBack} />
        <CartHeader />
      </View>
      <CartList items={cartItems} />
    </SafeAreaView>
  );
};
