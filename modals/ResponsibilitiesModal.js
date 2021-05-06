import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import AddResponsibilityModal from "../modals/AddResponsibilityModal";
import ModalHeader from "../components/ModalHeader";
import Modal from "react-native-modal";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
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
    setResponsibilitiesList(responsibilities);
    console.log(responsibilities);
  };

  const changeText = (index, responsibility) => {
    const text = [...responsibilities];
    text.splice(index, 1, responsibility);
    setResponsibilities(text);
  };

  const textBox = (responsibility, index) => {
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
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={styles.modal}
      isVisible={responsibilitiesModalVisible}
    >
      <AddResponsibilityModal
        addResponsibilityModalVisible={addResponsibilityModalVisible}
        setAddResponsibilityModalVisible={setAddResponsibilityModalVisible}
        addTextBox={addTextBox}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <ModalHeader
          leftIcon="chevron-left"
          border={1}
          closeModal={setResponsibilitiesModalVisible}
          screenTitle="Responsibilities"
        />

        <TouchableOpacity
          onPress={() => setAddResponsibilityModalVisible(true)}
          style={styles.addResponsibilityButton}
        >
          <Text style={{ fontSize: 20 }}>Add Responsibility</Text>
          <Icon size={30} name="chevron-right" />
        </TouchableOpacity>
        {responsibilities.length >= 0
          ? responsibilities.map((responsibility, index) =>
              textBox(responsibility, index)
            )
          : null}
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: { width: SCREEN_WIDTH, backgroundColor: "white", margin: 0 },

  scrollView: { alignItems: "center", padding: 20 },

  addResponsibilityButton: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderRadius: 30,
    height: 65,
    padding: 15,
    marginTop: 60,
    borderColor: "#dadada",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textAreasContainer: { width: "100%", marginBottom: 20 },
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
