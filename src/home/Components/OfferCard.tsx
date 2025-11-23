import cn from "clsx";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import { icons } from "src/constants";

interface OfferCardProps {
  title: string;
  image: ImageSourcePropType;
  color: string;
  index: number;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  title,
  image,
  color,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <View>
      <Pressable
        className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
        style={{ backgroundColor: color }}
        android_ripple={{ color: "#fffff22" }}
      >
        <View className="h-full w-1/2">
          <Image source={image} className="size-full" resizeMode="contain" />
        </View>

        <View className={cn("offer-card__info", isEven ? "pl-10" : "pr-10")}>
          <Text className="h1-bold text-white leading-tight">{title}</Text>

          <Image
            source={icons.arrowRight}
            className="size-10"
            resizeMode="contain"
            tintColor="#ffffff"
          />
        </View>
      </Pressable>
    </View>
  );
};
