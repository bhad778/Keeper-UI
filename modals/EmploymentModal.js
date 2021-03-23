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
    setEmploymentType(buttonPressed);
  };
  return (
    <Modal animationType="slide" visible={employmentModalVisible}>
      <ModalHeader closeModal={setEmploymentModalVisible} />
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
          <TouchableOpacity
            onPress={() => onButtonClick({ button1: "full-time" })}
            style={
              buttonPressed.button1 == "full-time"
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <Text>Full time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button2: "part-time" })}
            style={
              buttonPressed.button2 == "pressed"
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <Text>Part Time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button3: "contract" })}
            style={
              buttonPressed.button3 == "contract"
                ? styles.employmentButtonsPressed
                : styles.employmentButtons
            }
          >
            <Text>Contract</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick({ button4: "other" })}
            style={
              buttonPressed.button4 == "other"
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
