import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { React } from "react";
import RestaurantScreen from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      {/* Helps Cover Up extra Status Bar space revealed when running app in Expo mobile */}
      <ExpoStatusBar style="auto" />
    </>
  );
}
