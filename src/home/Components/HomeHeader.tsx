import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "src/constants";

export const HomeHeader = () => {
  return (
    <View className="flex-between flex-row w-full mt-2">
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
      </View>

      <TouchableOpacity className="cart-btn">
        <Image source={icons.bag} className="size-5" resizeMode="contain" />

        <View className="cart-badge">
          <Text className="paragraph-bold text-white">0</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
