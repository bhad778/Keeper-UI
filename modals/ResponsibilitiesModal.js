import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

import Header from "../components/header/Header";
const ResponsibilitiesModal = ({
  responsibilitiesModalVisible,
  setResponsibilitiesModalVisible,
  saveResponsibility,
}) => {
  const [responsibilityInput, setResponsibilityInput] = useState([]);

  const makeTextBox = (text) => {
    return (
      <View style={styles.textAreasContainer}>
        <TextInput value={text} style={styles.textAreas} multiline={true} />
      </View>
    );
  };
  const addTextBox = () => {
    let newArray = [...responsibilityInput];
    newArray.push(makeTextBox);
    setResponsibilityInput(newArray);
  };
  return (
    <Modal visible={responsibilitiesModalVisible}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setResponsibilitiesModalVisible(false);
          }}
        >
          <Text style={{ fontSize: 30 }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => saveResponsibility(responsibilityInput)}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.responsibilityContainer}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollView}
        >
          {responsibilityInput.length >= 0
            ? responsibilityInput.map((responsibility) =>
                makeTextBox(responsibility)
              )
            : null}
          <TouchableOpacity
            onPress={addTextBox}
            style={styles.addResponsibilityButton}
          >
            <Text>Add Responsibility</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center",
  },
  scrollView: { alignItems: "center" },
  responsibilityContainer: { flex: 6, alignItems: "center" },
  addResponsibilityButton: {
    width: "70%",
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textAreasContainer: { height: "50%", width: "50%" },
  textAreas: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.26)",
  },
});
export default ResponsibilitiesModal;
