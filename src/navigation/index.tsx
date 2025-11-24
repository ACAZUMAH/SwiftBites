import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ToastNotification from "react-native-toast-message";
import { StackNavigator } from "./Stack";
import toastConfig from "./components/ToastConfig";
import { navigationRef } from "./navigationRef";

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
      <ToastNotification config={toastConfig} />
    </SafeAreaProvider>
  );
};
