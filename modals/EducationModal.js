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
    <Modal  animationType="slide" visible={educationModalVisible}>
  
      <View style={styles.educationTypeContainer}>
      <ModalHeader leftIcon="chevron-left"  screenTitle='Education' border={1} closeModal={setEducationModalVisible} />
        <View
          style={{
            width: "100%",
            marginTop: 60,
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
  
  educationTypeContainer: { flex: 5, alignItems: "center", padding:20 },
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
