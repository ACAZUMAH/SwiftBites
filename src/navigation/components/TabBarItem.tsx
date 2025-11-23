import { useNavigationState } from "@react-navigation/native";
import cn from "clsx";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Conditional } from "src/components/conditional";
import { appRoutes } from "src/constants";
interface TabBarItemProps {
  icon: ImageSourcePropType;
  label: string;
  route: string;
  onPress: () => void;
}

export const TabBarItem: React.FC<TabBarItemProps> = ({
  icon,
  label,
  route,
  onPress,
}) => {
  const currentRouteName = useNavigationState((state) => {
    const findCurrentRoute = (route: any): string => {
      if (!route?.state) return route.name;
      const currentRoute = route.state.routes[route.state.index];
      return findCurrentRoute(currentRoute);
    };
    const current = state.routes[state.index];
    return findCurrentRoute(current);
  });

  const focused = currentRouteName === route;

  return (
    <TouchableOpacity onPress={onPress} className="tab-icon">
      <Image
        source={icon}
        className="size-7"
        resizeMode="contain"
        tintColor={focused ? "#FE8C00" : "#5D5F6D"}
      />
      <Text
        className={cn(
          "text-sm font-bold",
          focused ? "text-primary" : "text-gray-200"
        )}
      >
        {label}
      </Text>
      <Conditional condition={route === appRoutes.CART}>
        <View className="tab-cart__badge">
          <Text className="paragraph-bold text-white">0</Text>
        </View>
      </Conditional>
    </TouchableOpacity>
  );
};
