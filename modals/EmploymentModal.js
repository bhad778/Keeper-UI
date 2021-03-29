import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import ModalHeader from "../components/ModalHeader";

const EmploymentModal = ({
  setEmploymentType,
  employmentModalVisible,
  setEmploymentModalVisible,
}) => {
  const [buttonPressed, setButtonPressed] = useState({
    button1: "",
    button2: "",
    button3: "",
    button4: "",
  });

  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
    setEmploymentType(clickedButton);
  };
  return (
    <Modal animationType="slide" visible={employmentModalVisible}>
      
     
      <View style={styles.employmentTypeContainer}>
      <ModalHeader leftIcon="chevron-left" screenTitle='Employment' closeModal={setEmploymentModalVisible} border={1} />
        <View
          style={styles.employmentButtonsContainer}
        >
          <TouchableOpacity
            onPress={() => onButtonClick({ button1: true })}
            style={
              buttonPressed.button1 == true
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <Text>Full time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button2: true })}
            style={
              buttonPressed.button2 == true
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <Text>Part Time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button3: true })}
            style={
              buttonPressed.button3 == true
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <Text>Contract</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button4: true })}
            style={
              buttonPressed.button4 == true
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <Text>Other</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: { 
    justifyContent: "center",
    alignItems: "center",
  },
  employmentTypeContainer: {
    padding:20,
    flex: 6,
    alignItems: "center",
  },
  employmentButtonsContainer:{
    width: "100%",
    marginTop: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  employmentButtons: {
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  employmentButtonsPressed: {
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6cffe",
    height: 50,
    width: 150,

    borderRadius: 20,
  },
});
export default EmploymentModal;
