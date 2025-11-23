import cn from "clsx";
import React from "react";
import { Platform, Text, TouchableOpacity } from "react-native";
interface FilterItemProps {
  name: string;
  active?: boolean;
  onPress: () => void;
}

export const FilterItem: React.FC<FilterItemProps> = ({
  name,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn("filter", active ? "bg-amber-500" : "bg-white")}
      style={
        Platform.OS === "android"
          ? { elevation: 5, shadowColor: "#878787" }
          : {}
      }
    >
      <Text
        className={cn("body-medium", active ? "text-white" : "text-gray-200")}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
