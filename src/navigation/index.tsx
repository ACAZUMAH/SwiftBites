import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ToastNotification from "react-native-toast-message";
import { StackNavigator } from "./Stack";
import { navigationRef } from "./navigationRef";

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
      <ToastNotification />
    </SafeAreaProvider>
  );
};
