import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import ModalHeader from "../components/ModalHeader";
const EducationModal = ({
  setEducation,
  educationModalVisible,
  setEducationModalVisible,
}) => {
  const educationLevelButtons = [
    "GED",
    "Associate's",
    "Bachelor's",
    "Master's",
    "Doctoral",
  ];

  const [buttonPressed, setButtonPressed] = useState();

  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
    setEducation(clickedButton);
  };

  return (
    <Modal animationType="slide" visible={educationModalVisible}>
      <ModalHeader closeModal={setEducationModalVisible} />
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
          {educationLevelButtons.map((educationLevelText, i) => (
            <TouchableOpacity
              onPress={() => onButtonClick(educationLevelText)}
              key={i}
              style={
                buttonPressed == educationLevelText
                  ? styles.educationButtonsPressed
                  : styles.educationButtons
              }
            >
              <Text>{educationLevelText}</Text>
            </TouchableOpacity>
          ))}

          {!educationLevelButtons.length % 2 == 0 && (
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
