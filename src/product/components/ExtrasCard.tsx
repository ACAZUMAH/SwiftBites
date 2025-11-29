import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ExtrasCardProps {
  name: string;
  image: ImageSourcePropType;
}

export const ExtrasCard: React.FC<ExtrasCardProps> = ({ name, image }) => {
  return (
    <View className="bg-neutral-900 rounded-2xl shadow-sm shadow-black/10 h-40">
      <View className="relative bg-white rounded-2xl flex-center shadow-sm shadow-black/10 h-[60%]">
        <Image source={image} className="size-20" resizeMode="contain" />
      </View>
      <View className="flex-between flex-row py-4 px-3 gap-5">
        <Text className="base-bold text-white">{name}</Text>

        <TouchableOpacity className="flex-center bg-red-600 rounded-full size-8">
          <Text className="text-2xl text-white">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
