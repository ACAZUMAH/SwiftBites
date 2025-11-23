import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import { appRoutes } from "src/constants";
import { Product } from "src/product";
import { TabNavigator } from "./Tabs";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName={appRoutes.TABS}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={appRoutes.TABS} component={TabNavigator} />
        <Stack.Screen name={appRoutes.product} component={Product} />
      </Stack.Navigator>
    </>
  );
};
