import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import { SignIn } from "src/auth/signIn";
import { SignUp } from "src/auth/signUp";
import { appRoutes } from "src/constants";
import { Product } from "src/product";
import { TabNavigator } from "./Tabs";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack.Navigator
        // initialRouteName={appRoutes.TABS}
        initialRouteName={appRoutes.signUp}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={appRoutes.TABS} component={TabNavigator} />
        <Stack.Screen name={appRoutes.product} component={Product} />
        <Stack.Screen name={appRoutes.signIn} component={SignIn} />
        <Stack.Screen name={appRoutes.signUp} component={SignUp} />
      </Stack.Navigator>
    </>
  );
};
