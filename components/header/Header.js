/* eslint-disable no-undef */
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const Resume = ({ screenTitle, children, navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header style={styles.appBar}>
      <View style={styles.leftSection}>
        <Image
          source={{
            uri:
              "https://rileymann.com/wp-content/uploads/2020/12/pare_logo.png",
          }}
          style={{ width: 25, height: 39 }}
        />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.titleText}>{screenTitle}</Text>
      </View>
      {!children && (
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <FontAwesome color="black" name="arrow-left" size={30} />
          </TouchableOpacity>
        </View>
      )}
      {children && children}
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#add9d9",
    elevation: 0,
  },
  leftSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middleSection: {
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
  },
  logoButton: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    overflow: "visible",
  },
});
export default Resume;
