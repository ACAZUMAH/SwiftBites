import React from "react";
import { ScrollView } from "react-native";
import { CATEGORIES } from "src/constants";
import { FilterItem } from "./filterItem";

const Filters = () => {
  const [active, setActive] = React.useState("1");
  const [category, setCategory] = React.useState("All");

  const handleFilterPress = (category: any) => {
    setActive(category.id);
    setCategory(category.name);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-x-2 pb-3 pt-4"
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
  );
};

export default Filters;
