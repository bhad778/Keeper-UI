import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import ModalHeader from "../components/ModalHeader";
import AppBoldText from '../components/AppBoldText'
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
          <View style={styles.employmentButtonsContainer1}>
          <TouchableOpacity
            onPress={() => onButtonClick({ button1: true })}
            style={
              buttonPressed.button1 == true
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <AppBoldText style={styles.buttonsText}>Full time</AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button2: true })}
            style={
              buttonPressed.button2 == true
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <AppBoldText style={styles.buttonsText}>Part Time</AppBoldText>
          </TouchableOpacity>
          </View>
          <View style={styles.employmentButtonsContainer2}>
          <TouchableOpacity
            onPress={() => onButtonClick({ button3: true })}
            style={
              buttonPressed.button3 == true
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <AppBoldText style={styles.buttonsText}>Contract</AppBoldText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button4: true })}
            style={
              buttonPressed.button4 == true
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
 
  employmentTypeContainer: {
    padding:20,
    flex: 6,
    alignItems: "center",
    
  },

  buttonsText:{fontSize:20},

  employmentButtonsContainer1:{
    width: "100%",
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom:5
  },
  employmentButtonsContainer2:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  employmentButtons: {
    margin:4,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "49%",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
  },
  employmentButtonsPressed: {
    margin:4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6cffe",
    height: 50,
    width: "49%",

    borderRadius: 30,
  },
});
export default EmploymentModal;
