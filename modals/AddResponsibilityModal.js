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
import Icon from "react-native-vector-icons/Feather";
import ModalHeader from "../components/ModalHeader";
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
    <Modal  animationType="slide" visible={addResponsibilityModalVisible}>
    

      <View style={styles.textInputContainer}>
      <ModalHeader addNewResponsibility={addNewResponsibility} leftIcon='chevron-left' rightIcon="check" screenTitle="Add" border={1} closeModal={setAddResponsibilityModalVisible} />
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
  
  textInputContainer: { flex: 4, alignItems: "center", padding:20},
  textInput: {
    paddingTop: 20,
    padding: 15,
    borderWidth: 1,
    height: "40%",
    width: "100%",
    borderRadius: 20,
  },
});

export default AddResponsibility;
