import React, { useState } from "react";
import {
  StyleSheet,
  View,
 Text,
  Modal,
 
} from "react-native";
import ModalHeader from "../components/ModalHeader";

import {Picker} from '@react-native-picker/picker';


const ExperienceModal = ({
  setExperience,
  experienceModalVisible,
  setExperienceModalVisible,
}) => {
  const [yearsOfExperience, setYearsOfExperience] = useState();
  return (
    <Modal animationType="slide" visible={experienceModalVisible}>
     
      <View style={styles.yrsExperienceContainer}>
      <ModalHeader leftIcon="chevron-left" rightIcon='check' border={1}closeModal={setExperienceModalVisible} screenTitle='Experience' />
        <View style={styles.pickerContainer}>
        <Picker
  selectedValue={yearsOfExperience}
  onValueChange={(itemValue, itemIndex) =>
    setYearsOfExperience(itemValue)
  }>
  <Picker.Item label="1" value="1" />
  <Picker.Item label="2" value="2" />
  <Picker.Item label="3" value="3" />
  <Picker.Item label="4" value="4" />
  <Picker.Item label="5" value="5" />
  <Picker.Item label="6" value="6" />
  <Picker.Item label="7" value="7" />
  <Picker.Item label="8" value="8" />
  <Picker.Item label="9" value="9" />
  <Picker.Item label="10" value="10" />
  <Picker.Item label="11" value="11" />
  <Picker.Item label="12" value="12" />
  <Picker.Item label="13" value="13" />
  <Picker.Item label="14" value="14" />
  <Picker.Item label="15" value="15" />
  <Picker.Item label="16" value="16" />
  <Picker.Item label="17" value="17" />
  <Picker.Item label="18" value="18" />
  <Picker.Item label="19" value="19" />
  <Picker.Item label="20+" value="20+" />
  
</Picker>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  yrsExperienceContainer: { flex: 6, alignItems: "center", padding:20 },
  pickerContainer: { width: "50%", height:300, justifyContent:'center' },
});
export default ExperienceModal;
