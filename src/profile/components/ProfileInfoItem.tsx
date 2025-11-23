import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface ProfileInfoItemProps {
  label: string;
  value: string;
  icon?: ImageSourcePropType;
  mb?: string;
}

export const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({
  label,
  value,
  icon,
  mb,
}) => {
  return (
    <View className={`flex flex-row items-center gap-2 ${mb}`}>
      <View className="profile-field__icon">
        <Image source={icon} className="size-5" />
      </View>

      <View className="profile-field__info">
        <Text className="paragraph-medium">{label}</Text>
        <Text className="paragraph-bold">{value}</Text>
      </View>
    </View>
  );
};
