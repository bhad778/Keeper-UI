import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TextInput,
} from "react-native";
import ModalHeader from "../components/ModalHeader";
const CompanyDescriptionModal = ({
  setCompanyDescription,
  companyDescriptionModalVisible,
  setCompanyDescriptionModalVisible,
}) => {
  const [descriptionText, setDescriptionText] = useState("");
 
  return (
    <Modal visible={companyDescriptionModalVisible}>
      <View style={styles.textSection}>
      <ModalHeader saveText={setCompanyDescription} text={descriptionText} leftIcon="chevron-left" screenTitle="Description" border={1} closeModal={setCompanyDescriptionModalVisible} />

        <TextInput
          placeholder="Describe your company..."
          placeholderTextColor="black"
          value={descriptionText}
          style={styles.textInput}
          multiline={true}
          onChangeText={(descriptionText) => setDescriptionText(descriptionText)}
          onEndEditing={() => setCompanyDescription()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
 
  textSection: { flex: 6, alignItems: "center", justifyContent: "center", padding:20, marginTop:20},
  textInput: { width: "90%", height: "90%",  textAlignVertical:'top', marginTop:20 },
});

export default CompanyDescriptionModal;
