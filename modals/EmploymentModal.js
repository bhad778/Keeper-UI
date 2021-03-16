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

const EmploymentModal = ({
  setEmploymentValue,
  employmentModalVisible,
  setEmploymentModalVisible,
}) => {
  const [employmentType, setEmploymentType] = useState([
    "Full TIme",
    "Part Time",
    "Contract",
    "Other",
  ]);
  const [buttonPressed, setButtonPressed] = useState();
  const goBack = () => {
    setEmploymentValue(buttonPressed);
    setEmploymentModalVisible(false);
  };
  const onButtonClick = (clickedButton) => {
    setButtonPressed(clickedButton);
  };
  return (
    <Modal animationType="slide" visible={employmentModalVisible}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.employmentTypeContainer}>
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
          {employmentType.map((buttonText, i) => (
            <TouchableOpacity
              onPress={() => onButtonClick(i)}
              key={i}
              style={
                buttonPressed == i
                  ? styles.employmentButtonsPressed
                  : styles.employmentButtons
              }
            >
              <Text>{buttonText}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  employmentTypeContainer: {
    flex: 6,
    alignItems: "center",
  },
  employmentButtons: {
    margin: 6,
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
