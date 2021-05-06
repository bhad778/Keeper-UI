import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";

class CustomModal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.body} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  header: {
    backgroundColor: "#333",
    height: 150,
  },
  body: {
    backgroundColor: "#eaeaea",
    height: 900,
  },
});

export default CustomModal;
