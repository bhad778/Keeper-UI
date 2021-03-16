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
    <Modal animationType="slide" visible={addResponsibilityModalVisible}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setAddResponsibilityModalVisible(false)}
          >
            <Icon size={20} name="x" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Add Responsibility</Text>
          <TouchableOpacity onPress={addNewResponsibility}>
            <Icon size={20} name="check" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textInputContainer}>
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
  headerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 20,
  },
  textInputContainer: { flex: 4, alignItems: "center" },
  textInput: {
    paddingTop: 20,
    padding: 15,
    borderWidth: 1,
    height: "40%",
    width: "90%",
    borderRadius: 20,
  },
});

export default AddResponsibility;
