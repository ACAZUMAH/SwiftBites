import cn from "clsx";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "src/constants";
import { Conditional } from "../conditional";
interface CustomHeaderProps {
  title?: string;
  onNavigateBack: () => void;
  style?: string;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  onNavigateBack,
  style,
}) => {
  return (
    <View className={cn("custom-header", style)}>
      <TouchableOpacity onPress={onNavigateBack}>
        <Image source={icons.arrowBack} className="size-5" />
      </TouchableOpacity>

      <Conditional condition={Boolean(title)}>
        <Text className="h3-bold">{title}</Text>
      </Conditional>

      <TouchableOpacity>
        <Image source={icons.search} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};
