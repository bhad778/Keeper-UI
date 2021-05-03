import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import ModalHeader from "../components/ModalHeader";
import AppBoldText from "../components/AppBoldText";
const EducationModal = ({
  setEducation,
  educationModalVisible,
  setEducationModalVisible,
}) => {
  const [buttonPressed, setButtonPressed] = useState("");

  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
    setEducation(clickedButton);
  };

  return (
    <Modal animationType="slide" visible={educationModalVisible}>
      <View style={styles.educationTypeContainer}>
        <ModalHeader
          leftIcon="chevron-left"
          screenTitle="Education"
          border={1}
          closeModal={setEducationModalVisible}
        />
        <View style={styles.buttonsContainer1}>
          <TouchableOpacity
            onPress={() => onButtonClick("GED")}
            style={
              buttonPressed == "GED"
                ? styles.educationButtonsPressed
                : styles.educationButtons
            }
          >
            <AppBoldText style={styles.buttonText}>GED</AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick("Associate's")}
            style={
              buttonPressed == "Associate's"
                ? styles.educationButtonsPressed
                : styles.educationButtons
            }
          >
            <AppBoldText style={styles.buttonText}>Associate's</AppBoldText>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer2}>
          <TouchableOpacity
            onPress={() => onButtonClick("Bachelor's")}
            style={
              buttonPressed == "Bachelor's"
                ? styles.educationButtonsPressed
                : styles.educationButtons
            }
          >
            <AppBoldText style={styles.buttonText}>Bachelor's</AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick("Master's")}
            style={
              buttonPressed == "Master's"
                ? styles.educationButtonsPressed
                : styles.educationButtons
            }
          >
            <AppBoldText style={styles.buttonText}>Master's</AppBoldText>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer3}>
          <TouchableOpacity
            onPress={() => onButtonClick("Doctoral")}
            style={
              buttonPressed == "Doctoral"
                ? styles.educationButtonsPressed
                : styles.educationButtons
            }
          >
            <AppBoldText style={styles.buttonText}>Doctoral</AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 4,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              height: 50,
              width: "49%",
              borderRadius: 30,
            }}
          ></TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  educationTypeContainer: { flex: 5, alignItems: "center", padding: 20 },
  educationButtons: {
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "47%",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
  },
  educationButtonsPressed: {
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6cffe",
    height: 50,
    width: "47%",
    borderRadius: 30,
  },
  buttonsContainer1: {
    width: "100%",
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer3: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: { fontSize: 20 },
});

export default EducationModal;
