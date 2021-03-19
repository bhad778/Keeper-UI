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

const CompanyDescriptionModal = ({
  companyDescriptionModalVisible,
  setCompanyDescriptionModalVisible,
}) => {
  const [text, setText] = useState("");
  return (
    <Modal visible={companyDescriptionModalVisible}>
      <View style={styles.Header}>
        <TouchableOpacity
          onPress={() => setCompanyDescriptionModalVisible(false)}
        >
          <Text>cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textSection}>
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
  Header: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  textSection: { flex: 6, alignItems: "center", justifyContent: "center" },
  textInput: { width: "90%", height: "90%" },
});

export default CompanyDescriptionModal;
