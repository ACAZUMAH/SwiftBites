import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart } from "src/cart";
import { appRoutes } from "src/constants";
import { Explore } from "src/explore";
import { Home } from "src/home";
import { Profile } from "src/profile";
import { TabBarContents } from "./components/TabBarContents";

const BottomTabs = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      tabBar={() => <TabBarContents />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      backBehavior="history"
    >
      <BottomTabs.Screen name={appRoutes.HOME} component={Home} />
      <BottomTabs.Screen name={appRoutes.SEARCH} component={Explore} />
      <BottomTabs.Screen name={appRoutes.CART} component={Cart} />
      <BottomTabs.Screen name={appRoutes.PROFILE} component={Profile} />
    </BottomTabs.Navigator>
  );
};
