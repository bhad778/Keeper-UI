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
import ModalHeader from "../components/ModalHeader";

const JobOverviewModal = ({
  jobOverviewModalVisible,
  setJobOverviewModalVisible,
}) => {
  const [text, setText] = useState("");
  return (
    <Modal visible={jobOverviewModalVisible}>
      <View style={styles.textSection}>
      <ModalHeader leftIcon="chevron-left" rightIcon='check' screenTitle='Overview' border={1} closeModal={setJobOverviewModalVisible} />

        <TextInput
          
          placeholder="Job Overview..."
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
  textSection: { flex: 6, alignItems: "center", justifyContent: "center", padding:20, marginTop:10 },
  textInput: { width: "90%", height: "90%", textAlignVertical:'top', marginTop:20},
});

export default JobOverviewModal;
