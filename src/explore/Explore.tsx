import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyData } from "src/services/data";
import { ExploreHeader } from "./components/ExploreHeader";
import { ProductList } from "./components/ProductList";

export const Explore: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 px-4">
      <ExploreHeader />
      <ProductList menus={dummyData.menu} />
    </SafeAreaView>
  );
};
