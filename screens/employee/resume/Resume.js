import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";

const Resume = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.profileImage}
        source={{
          uri:
            "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
        }}
      ></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 100,
    width: "100%",
  },
  profileImage: {
    width: "100%",
    height: 500,
  },
});
export default Resume;
