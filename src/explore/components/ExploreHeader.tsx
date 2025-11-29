import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "src/constants";
import Filters from "./Filters";

export const ExploreHeader: React.FC = () => {
  return (
    <View>
      <View className="searchbar">
        <TextInput
          className="flex-1 p-5"
          placeholder="Search for pizzas, burgers..."
          placeholderTextColor="#A0A0A0"
          returnKeyType="search"
        />

        <TouchableOpacity className="pr-5">
          <Image
            source={icons.search}
            className="size-6"
            tintColor="#5D5F6D"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Filters />
    </View>
  );
};
