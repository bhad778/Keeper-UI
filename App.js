import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./redux/reducers/RootReducer";

Amplify.configure(awsconfig);

const store = createStore(RootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
