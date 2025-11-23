import { useFonts } from "expo-font";
import * as splashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Navigation } from "src/navigations";
import "./global.css";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      splashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
