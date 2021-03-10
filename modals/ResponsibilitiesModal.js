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

const ResponsibilitiesModal = ({
  responsibilitiesModalVisible,
  setResponsibilitiesModalVisible,
  editResponsibility,
}) => {
  const [responsibilities, setResponsibilities] = useState([]);

  const removeTextBox = (index) => {
    const removeResponsibility = [...responsibilities];
    removeResponsibility.splice(index, 1);
    setResponsibilities(removeResponsibility);
  };

  const addTextBox = () => {
    const addResponsibility = [...responsibilities];
    addResponsibility.push("");
    setResponsibilities(addResponsibility);
  };

  const changeText = (index, responsibility) => {
    const text = [...responsibilities];
    text.splice(index, 1, responsibility);
    setResponsibilities(text);
  };

  const makeTextBox = (responsibility, index) => {
    return (
      <View key={index} style={styles.textAreasContainer}>
        <TouchableOpacity
          onPress={() => removeTextBox(index)}
          style={styles.removeResponsibilityButton}
        >
          <Icon name="x" size={20} />
        </TouchableOpacity>
        <TextInput
          value={responsibility}
          style={styles.textAreas}
          onChangeText={(newResponsibilityText) =>
            changeText(index, newResponsibilityText)
          }
          multiline={true}
        />
      </View>
    );
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
        <TouchableOpacity onPress={() => editResponsibility(responsibilities)}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity
          onPress={addTextBox}
          style={styles.addResponsibilityButton}
        >
          <Text style={{ fontSize: 20 }}>Add Responsibility</Text>
          <Icon size={30} name="chevron-right" />
        </TouchableOpacity>
        {responsibilities.length >= 0
          ? responsibilities.map((responsibility, index) =>
              makeTextBox(responsibility, index)
            )
          : null}
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center",
  },
  scrollView: { alignItems: "center" },

  addResponsibilityButton: {
    flexDirection: "row",
    width: "90%",
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    marginTop: 40,
    borderColor: "#dadada",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textAreasContainer: { width: "90%", marginBottom: 20 },
  textAreas: {
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#dadada",
    zIndex: 1,
    borderColor: "rgba(0, 0, 0, 0.26)",
  },
  removeResponsibilityButton: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#dadada",
    height: 35,
    width: 35,
    position: "relative",
    left: 290,
    top: 20,
    zIndex: 2,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
});
export default ResponsibilitiesModal;
