/* eslint-disable no-undef */
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./redux/reducers/RootReducer";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(); //Ignore all log notifications

Amplify.configure(awsconfig);

const store = createStore(RootReducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      "app-header-font": require("./assets/fonts/app-header-text.ttf"),
      "app-bold-font": require("./assets/fonts/app-bold-text.otf"),
      "app-default-font": require("./assets/fonts/app-default-text.otf"),
    }).then(SplashScreen.hideAsync());
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
