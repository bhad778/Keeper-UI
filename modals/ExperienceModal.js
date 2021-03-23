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

import { Picker } from "@react-native-picker/picker";
import ModalHeader from "../components/ModalHeader";
const ExperienceModal = ({
  experience,
  setExperience,
  experienceModalVisible,
  setExperienceModalVisible,
}) => {
  return (
    <Modal animationType="slide" visible={experienceModalVisible}>
      <ModalHeader closeModal={setExperienceModalVisible} />
      <View style={styles.yrsExperienceContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={experience}
            onValueChange={(itemValue, itemIndex) => setExperience(itemValue)}
          >
            <Picker.Item label="1 yr" value="1" />
            <Picker.Item label="2 yrs" value="2" />
            <Picker.Item label="3 yrs" value="3" />
            <Picker.Item label="4 yrs" value="4" />
            <Picker.Item label="5 yrs" value="5" />
            <Picker.Item label="6 yrs" value="6" />
            <Picker.Item label="7 yrs" value="7" />
            <Picker.Item label="8 yrs" value="8" />
            <Picker.Item label="9 yrs" value="9" />
            <Picker.Item label="10 yrs" value="10" />
            <Picker.Item label="11 yrs" value="11" />
            <Picker.Item label="12 yrs" value="12" />
            <Picker.Item label="13 yrs" value="13" />
            <Picker.Item label="14 yrs" value="14" />
            <Picker.Item label="15 yrs" value="15" />
            <Picker.Item label="16 yrs" value="16" />
            <Picker.Item label="17 yrs" value="17" />
            <Picker.Item label="18 yrs" value="18" />
            <Picker.Item label="19 yrs" value="19" />
            <Picker.Item label="20+ yrs" value="20+" />
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  yrsExperienceContainer: { flex: 6, alignItems: "center" },
  pickerContainer: { width: "80%" },
});
export default ExperienceModal;
