import React, { useState } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import Modal from "react-native-modal";

import ModalHeader from "../components/ModalHeader";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const CompanyDescriptionModal = ({
  setDescription,
  companyDescriptionModalVisible,
  setCompanyDescriptionModalVisible,
}) => {
  const [descriptionText, setDescriptionText] = useState("");

  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      isVisible={companyDescriptionModalVisible}
      style={styles.modal}
    >
      <View style={styles.textSection}>
        <ModalHeader
          saveText={setDescription}
          text={descriptionText}
          leftIcon="chevron-left"
          screenTitle="Description"
          border={1}
          closeModal={setCompanyDescriptionModalVisible}
        />

        <TextInput
          placeholder="Describe your company..."
          placeholderTextColor="black"
          value={descriptionText}
          style={styles.textInput}
          multiline={true}
          onChangeText={(descriptionText) =>
            setDescriptionText(descriptionText)
          }
          onEndEditing={() => setDescription()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { backgroundColor: "white", margin: 0 },
  textSection: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 20,
    backgroundColor: "white",
  },
  textInput: {
    width: "90%",
    height: "90%",
    textAlignVertical: "top",
    marginTop: 20,
  },
});

export default CompanyDescriptionModal;
