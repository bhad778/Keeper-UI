import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
const EmploymentType = ({
  employmentTypeModalVisible,
  setEmploymentTypeModalVisible,
}) => {
  const [buttonPressed, setButtonPressed] = useState("");
  const [buttonTextPressed, setButtonTextPressed] = useState("");

  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
    setButtonTextPressed(clickedButton);
  };
  const goBack = () => {
    setEmploymentTypeModalVisible(false);
  };
  return (
    <Modal visible={employmentTypeModalVisible}>
      <View style={styles.header}>
        <TouchableOpacity color="black" onPress={goBack}>
          <Text style={{ color: "black" }}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 30 }}>Employment</Text>
        <TouchableOpacity>
          <Text style={{ color: "black" }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          onPress={() => onButtonClick("fullTime")}
          style={
            buttonPressed === "fullTime"
              ? styles.buttonsPressed
              : styles.buttons
          }
        >
          <Text
            style={
              buttonTextPressed === "fullTime"
                ? styles.buttonTextPressed
                : styles.buttonText
            }
          >
            Full Time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onButtonClick("partTime")}
          style={
            buttonTextPressed === "partTime"
              ? styles.buttonsPressed
              : styles.buttons
          }
        >
          <Text
            style={
              buttonTextPressed === "partTime"
                ? styles.buttonTextPressed
                : styles.buttonText
            }
          >
            Part Time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onButtonClick("contract")}
          style={
            buttonTextPressed === "contract"
              ? styles.buttonsPressed
              : styles.buttons
          }
        >
          <Text
            style={
              buttonTextPressed === "contract"
                ? styles.buttonTextPressed
                : styles.buttonText
            }
          >
            Contract
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onButtonClick("hourly")}
          style={
            buttonPressed === "hourly" ? styles.buttonsPressed : styles.buttons
          }
        >
          <Text
            style={
              buttonPressed === "hourly"
                ? styles.buttonTextPressed
                : styles.buttonText
            }
          >
            Hourly
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "15%",
    backgroundColor: "#add9da",
    marginBottom: 35,
  },
  buttonSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    borderRadius: 30,
    width: "45%",
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  buttonsPressed: {
    borderRadius: 30,
    width: "45%",
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#016568",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "black" },
  buttonTextPressed: { color: "white" },
});
export default EmploymentType;
