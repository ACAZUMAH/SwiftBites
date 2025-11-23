import React from "react";
import { View } from "react-native";
import { appRoutes, icons } from "src/constants";
import { useAppNavigation } from "src/hook/useAppNavigation";
import { TabBarItem } from "./TabBarItem";

export const TabBarContents = () => {
  const { navigateToTab } = useAppNavigation();
  return (
    <View
      className="absolute rounded-full bg-white left-3 right-3 bottom-9 h-24 
       overflow-hidden"
      style={{
        shadowColor: "#1a1a1a",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <View className="flex flex-row items-center justify-between h-full mx-5">
        <TabBarItem
          label="Home"
          icon={icons.home}
          route={appRoutes.HOME}
          onPress={() => navigateToTab(appRoutes.HOME)}
        />
        <TabBarItem
          label="Search"
          icon={icons.search}
          route={appRoutes.SEARCH}
          onPress={() => navigateToTab(appRoutes.SEARCH)}
        />
        <TabBarItem
          label="Cart"
          icon={icons.bag}
          route={appRoutes.CART}
          onPress={() => navigateToTab(appRoutes.CART)}
        />
        <TabBarItem
          label="Profile"
          icon={icons.user}
          route={appRoutes.PROFILE}
          onPress={() => navigateToTab(appRoutes.PROFILE)}
        />
      </View>
    </View>
  );
};
