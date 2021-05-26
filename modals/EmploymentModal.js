import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ModalHeader from "../components/ModalHeader";
import AppBoldText from "../components/AppBoldText";
import Modal from "react-native-modal";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const EmploymentModal = ({
  setEmploymentType,
  employmentModalVisible,
  setEmploymentModalVisible,
}) => {
  const [buttonPressed, setButtonPressed] = useState("");

  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
    setEmploymentType(clickedButton);
  };
  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={styles.modal}
      isVisible={employmentModalVisible}
    >
      <View style={styles.employmentTypeContainer}>
        <ModalHeader
          leftIcon="chevron-left"
          screenTitle="Employment"
          closeModal={setEmploymentModalVisible}
          border={1}
        />
        <View style={styles.employmentButtonsContainer1}>
          <TouchableOpacity
            onPress={() => onButtonClick("Full Time")}
            style={
              buttonPressed == "Full Time"
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <AppBoldText style={styles.buttonsText}>Full time</AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick("Part Time")}
            style={
              buttonPressed == "Part Time"
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <AppBoldText style={styles.buttonsText}>Part Time</AppBoldText>
          </TouchableOpacity>
        </View>
        <View style={styles.employmentButtonsContainer2}>
          <TouchableOpacity
            onPress={() => onButtonClick("Contract")}
            style={
              buttonPressed == "Contract"
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <AppBoldText style={styles.buttonsText}>Contract</AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick("Other")}
            style={
              buttonPressed == "Other"
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <AppBoldText style={styles.buttonsText}>Other</AppBoldText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { width: SCREEN_WIDTH, backgroundColor: "white", margin: 0 },
  employmentTypeContainer: {
    padding: 20,
    flex: 6,
    alignItems: "center",
  },

  buttonsText: { fontSize: 20 },

  employmentButtonsContainer1: {
    width: "100%",
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  employmentButtonsContainer2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  employmentButtons: {
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "49%",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
  },
  employmentButtonsPressed: {
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6cffe",
    height: 50,
    width: "49%",

    borderRadius: 30,
  },
});
export default EmploymentModal;
