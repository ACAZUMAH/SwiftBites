import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORIES } from "src/constants";
import { ExploreHeader } from "./components/ExploreHeader";
import { FilterItem } from "./components/filterItem";

export const Explore: React.FC = () => {
  const [active, setActive] = React.useState("1");
  const [category, setCategory] = React.useState("All");

  const handleFilterPress = (category: any) => {
    setActive(category.id);
    setCategory(category.name);
  };

  return (
    <SafeAreaView className="px-4">
      <ExploreHeader />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-x-2 pb-3 pt-5"
      >
        {CATEGORIES.map((category) => (
          <FilterItem
            key={category.id}
            name={category.name}
            active={active === category.id}
            onPress={() => handleFilterPress(category)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
