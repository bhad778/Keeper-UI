import React, { useState } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import ModalHeader from "../components/ModalHeader";
import Modal from "react-native-modal";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const AddResponsibility = ({
  addTextBox,
  addResponsibilityModalVisible,
  setAddResponsibilityModalVisible,
}) => {
  const [newResponsibilityText, setNewResponsibilityText] = useState("");
  const addNewResponsibility = () => {
    setAddResponsibilityModalVisible(false);
    addTextBox(newResponsibilityText);
    setNewResponsibilityText("");
  };
  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={styles.modal}
      isVisible={addResponsibilityModalVisible}
    >
      <View style={styles.textInputContainer}>
        <ModalHeader
          addNewResponsibility={addNewResponsibility}
          leftIcon="chevron-left"
          rightIcon="check"
          screenTitle="Add"
          border={1}
          closeModal={setAddResponsibilityModalVisible}
        />
        <TextInput
          value={newResponsibilityText}
          onChangeText={(newResponsibilityText) =>
            setNewResponsibilityText(newResponsibilityText)
          }
          style={styles.textInput}
          multiline
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { width: SCREEN_WIDTH, backgroundColor: "white", margin: 0 },
  textInputContainer: { flex: 4, alignItems: "center", padding: 20 },
  textInput: {
    paddingTop: 20,
    padding: 15,
    height: "40%",
    width: "100%",
  },
});

export default AddResponsibility;
