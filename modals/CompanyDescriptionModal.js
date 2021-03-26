import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TextInput,
} from "react-native";
import ModalHeader from "../components/ModalHeader";
const CompanyDescriptionModal = ({
  companyDescriptionModalVisible,
  setCompanyDescriptionModalVisible,
}) => {
  const [text, setText] = useState("");
  return (
    <Modal visible={companyDescriptionModalVisible}>
      <View style={styles.textSection}>
      <ModalHeader rightIcon='check' leftIcon="chevron-left" screenTitle="description" border={1} closeModal={setCompanyDescriptionModalVisible} />

        <TextInput
          placeholder="Describe your company..."
          placeholderTextColor="black"
          value={text}
          style={styles.textInput}
          multiline={true}
          onChangeText={(text) => setText(text)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
 
  textSection: { flex: 6, alignItems: "center", justifyContent: "center", padding:20, marginTop:10},
  textInput: { width: "90%", height: "90%",  textAlignVertical:'top', marginTop:20 },
});

export default CompanyDescriptionModal;
