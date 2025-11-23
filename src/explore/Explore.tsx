import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyData } from "src/services/data";
import { ProductList } from "./components/ProductList";

export const Explore: React.FC = () => {
  return (
    <SafeAreaView className="px-4">
      <ProductList menus={dummyData.menu} />
    </SafeAreaView>
  );
};
