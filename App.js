import React, { useEffect, useState } from "react";
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

Amplify.configure(awsconfig);

const store = createStore(RootReducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    Font.loadAsync({
      "app-font": require("./assets/fonts/sporting_grotesque_normal-webfont.ttf"),
    });
    this.setState({ fontsLoaded: true });
  };

  useEffect(() => {
    loadFont();
    setFontLoaded(true);
  }, []);

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
