import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Conditional } from "src/components/conditional";
import { appRoutes, icons } from "src/constants";
import { useAppNavigationWithRef } from "src/hook/useAppNavigationWithRef";
import { useCartItemsTotalCount } from "src/hook/useCartActions";

export const HomeHeader: React.FC = () => {
  const count = useCartItemsTotalCount();
  const { navigateToTab } = useAppNavigationWithRef();
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
      </View>

      <TouchableOpacity
        className="cart-btn"
        onPress={() => navigateToTab(appRoutes.CART)}
      >
        <Image source={icons.bag} className="size-5" resizeMode="contain" />

        <Conditional condition={count > 0}>
          <View className="cart-badge">
            <Text className="paragraph-bold text-white">{count}</Text>
          </View>
        </Conditional>
      </TouchableOpacity>
    </View>
  );
};
