import * as React from "react";
import { AfterInteractions } from "react-native-interactions";
import BottomTabEmployerNavigator from "./BottomTabEmployerNavigator";
import LoadingScreen from "../screens/loadingScreen/LoadingScreen";

export default function OptimizedEmployerNavigator() {
  return (
    <AfterInteractions>
      <BottomTabEmployerNavigator />
    </AfterInteractions>
  );
}
