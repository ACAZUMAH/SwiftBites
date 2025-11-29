import React from "react";
import { FlatList, ImageSourcePropType, Text, View } from "react-native";
import { ExtrasCard } from "./ExtrasCard";

interface SidesProps {
  sides: { name: string; image: ImageSourcePropType; price: number }[];
}

export const Sides: React.FC<SidesProps> = ({ sides }) => {
  return (
    <View className="ml-4 mt-8">
      <View className="mb-4">
        <Text className="h2-bold text-dark-100">Side options</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sides}
        renderItem={({ item }) => (
          <ExtrasCard name={item.name} image={item.image} />
        )}
        keyExtractor={(item) => item.name}
        contentContainerClassName="flex gap-8 py-2"
      />
    </View>
  );
};
