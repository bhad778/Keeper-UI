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
import AddResponsibilityModal from "../modals/AddResponsibilityModal";
import ModalHeader from "../components/ModalHeader";
const ResponsibilitiesModal = ({
  responsibilitiesModalVisible,
  setResponsibilitiesModalVisible,
  setResponsibilitiesList,
}) => {
  const [responsibilities, setResponsibilities] = useState([]);
  const [
    addResponsibilityModalVisible,
    setAddResponsibilityModalVisible,
  ] = useState(false);
  const removeTextBox = (index) => {
    const removeResponsibility = [...responsibilities];
    removeResponsibility.splice(index, 1);
    setResponsibilities(removeResponsibility);
  };

  const addTextBox = (text) => {
    const addResponsibility = [...responsibilities];
    addResponsibility.push(text);
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
  const goBackAndSave = () => {
    setResponsibilitiesList(responsibilities);
    setResponsibilitiesModalVisible(false);
  };
  const goBackAndCancel = () => {
    setResponsibilitiesModalVisible(false);
    setResponsibilities([]);
  };
  return (
    <Modal visible={responsibilitiesModalVisible}>
      <AddResponsibilityModal
        addResponsibilityModalVisible={addResponsibilityModalVisible}
        setAddResponsibilityModalVisible={setAddResponsibilityModalVisible}
        addTextBox={addTextBox}
      />
      <View style={styles.headerContainer}>
      <ModalHeader leftIcon="chevron-left" rightIcon='check' border={1} closeModal={setResponsibilitiesModalVisible} screenTitle='Responsibilities' />

      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity
          onPress={() => setAddResponsibilityModalVisible(true)}
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
  headerContainer:{padding:20},
  scrollView: { alignItems: "center", padding:20,  },

  addResponsibilityButton: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    
    borderColor: "#dadada",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textAreasContainer: { width: "90%", marginBottom: 20 },
  textAreas: {
    padding: 15,
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
