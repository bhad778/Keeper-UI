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
import ModalHeader from "../components/ModalHeader";
import Modal from "react-native-modal";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const JobOverviewModal = ({
  setJobOverview,
  jobOverviewModalVisible,
  setJobOverviewModalVisible,
}) => {
  const [overviewText, setOverviewText] = useState("");
  return (
    <Modal
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={styles.modal}
      isVisible={jobOverviewModalVisible}
    >
      <View style={styles.textSection}>
        <ModalHeader
          saveText={setJobOverview}
          text={overviewText}
          leftIcon="chevron-left"
          screenTitle="Overview"
          border={1}
          closeModal={setJobOverviewModalVisible}
        />

        <TextInput
          placeholder="Job Overview..."
          placeholderTextColor="black"
          value={overviewText}
          style={styles.textInput}
          multiline={true}
          onChangeText={(overviewText) => setOverviewText(overviewText)}
          onEndEditing={() => setJobOverview()}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { width: SCREEN_WIDTH, backgroundColor: "white", margin: 0 },

  Header: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  textSection: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 20,
  },
  textInput: {
    width: "90%",
    height: "90%",
    textAlignVertical: "top",
    marginTop: 20,
  },
});

export default JobOverviewModal;
