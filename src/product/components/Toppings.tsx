import React from "react";
import { FlatList, ImageSourcePropType, Text, View } from "react-native";
import { ExtrasCard } from "./ExtrasCard";

interface ToppingsProps {
  toppings: { name: string; image: ImageSourcePropType; price: number }[];
}

export const Toppings: React.FC<ToppingsProps> = ({ toppings }) => {
  return (
    <View className="ml-4 mt-4">
      <View className="mb-4">
        <Text className="h2-bold text-dark-100">Toppings</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={toppings}
        renderItem={({ item }) => (
          <ExtrasCard name={item.name} image={item.image} />
        )}
        keyExtractor={(item) => item.name}
        contentContainerClassName="flex gap-8 py-2"
      />
    </View>
  );
};
