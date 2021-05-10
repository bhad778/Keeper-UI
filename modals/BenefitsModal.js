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
const BenefitsModal = ({
  benefitsModalVisible,
  setBenefitsModalVisible,
  setBenefits,
}) => {
  const benefits = ["Dental", "Vision", "Health Care", "401k"];

  const [pressedButton, setPressedButton] = useState([]);

  const onButtonClick = (index) => {
    pressedButton.includes(index)
      ? setPressedButton(pressedButton.filter((item) => item !== index))
      : setPressedButton([...pressedButton, index]);
    setBenefits(pressedButton);
  };
  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      isVisible={benefitsModalVisible}
      style={styles.modal}
    >
      <View style={styles.educationTypeContainer}>
        <ModalHeader
          leftIcon="chevron-left"
          screenTitle="Benefits"
          border={1}
          closeModal={setBenefitsModalVisible}
          style={styles.modal}
        />
        <View style={styles.benefitButtonsContainer}>
          {benefits.map((benefits, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onButtonClick(index)}
                style={
                  pressedButton.includes(index)
                    ? styles.benefitsButtonsPressed
                    : styles.benefitButtons
                }
              >
                <AppBoldText style={styles.buttonText}>{benefits}</AppBoldText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { width: SCREEN_WIDTH, backgroundColor: "white", margin: 0 },
  educationTypeContainer: { flex: 5, alignItems: "center", padding: 20 },
  benefitButtons: {
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "47%",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
  },
  benefitButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 60,
  },

  benefitsButtonsPressed: {
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
    borderWidth: 1,
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

export default BenefitsModal;
