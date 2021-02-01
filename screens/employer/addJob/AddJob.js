import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../../components/header/Header";
const AddJob = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header screenTitle="Add Job" withEditButton />
      <View style={styles.inputContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text>Enter Company name</Text>
          <TextInput
            style={{
              height: "20%",
              borderWidth: 1,
              width: "80%",
              borderRadius: 20,
            }}
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
          <Text>Enter Job Title</Text>
          <TextInput
            style={{
              height: "20%",
              borderWidth: 1,
              width: "80%",
              borderRadius: 20,
            }}
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View style={{ flex: 3, width: "100%", alignItems: "center" }}>
          <Text>Enter Job Description</Text>
          <TextInput
            style={{
              height: "75%",
              borderWidth: 1,
              width: "80%",
              borderRadius: 20,
            }}
            value={text}
            onChangeText={(text) => setText(text)}
            multiline={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            mode="contained"
            color="#ff8365"
            onPress={() => console.log("Button with adjusted color pressed")}
          >
            Add Job
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, justifyContent: "center" },
  inputContainer: { flex: 6, alignItems: "center" },
  inputView: {
    width: "80%",
    backgroundColor: "#ccc",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
  },
  inputText: { height: 50, color: "white" },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  button: { width: "60%", borderRadius: 20 },
});
export default AddJob;
