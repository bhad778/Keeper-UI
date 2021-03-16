import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const EducationModal = ({
  setEducationValue,
  educationModalVisible,
  setEducationModalVisible,
}) => {
  const [educationLevel, setEducationLevel] = useState([
    "GED",
    "Associate's",
    "Bachelor's",
    "Master's",
    "Doctoral",
  ]);
  const [buttonPressed, setButtonPressed] = useState();

  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
  };
  const goBack = () => {
    setEducationValue(buttonPressed);
    setEducationModalVisible(false);
  };
  return (
    <Modal animationType="slide" visible={educationModalVisible}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.educationTypeContainer}>
        <View
          style={{
            width: "90%",
            marginTop: 40,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {educationLevel.map((buttonText, i) => (
            <TouchableOpacity
              onPress={() => onButtonClick(i)}
              key={i}
              style={
                buttonPressed == i
                  ? styles.educationButtonsPressed
                  : styles.educationButtons
              }
            >
              <Text>{buttonText}</Text>
            </TouchableOpacity>
          ))}
          {!educationLevel.length % 2 == 0 && (
            <TouchableOpacity
              style={{
                margin: 6,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                height: 50,
                width: 150,
                borderRadius: 20,
              }}
            ></TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  educationTypeContainer: { flex: 5, alignItems: "center" },
  educationButtonsPressed: {
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6cffe",
    height: 50,
    width: 150,

    borderRadius: 20,
  },
  educationButtons: {
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
});

export default EducationModal;
