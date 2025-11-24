import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "src/constants";

export const CartHeader = () => {
  return (
    <View className="flex-between flex-row w-full my-2">
      <View className="flex-start">
        <Text className="small-bold text-primary">DELIVER TO</Text>
        <TouchableOpacity className="flex-center flex-row gap-x-1">
          <Text className="paragraph-bold text-dark-100">Kumasi, Ghana</Text>
          <Image
            source={icons.arrowDown}
            className="size-3"
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-primary/10 rounded-full p-3 mt-6 w-full 
         flex items-center justify-center border-primary border"
        >
          <TouchableOpacity></TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};
