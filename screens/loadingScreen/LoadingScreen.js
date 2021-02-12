import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const LoadingScreen = () => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "black",
  },
});

export default LoadingScreen;
