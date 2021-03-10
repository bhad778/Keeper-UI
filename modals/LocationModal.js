import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const LocationModal = ({ locationModalVisible, setLocationModalVisible }) => {
  const [locationText, setLocationText] = useState("");

  useEffect(() => {
    fetch(
      `/v1/geo/cities?limit=5&offset=0&namePrefix=${locationText}&sort=name,countryCode`
    )
      .then((response) => response)
      .then((data) => console.log(data));
  }, [locationText]);
  return (
    <Modal visible={locationModalVisible}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setLocationModalVisible(false)}>
          <Text style={{ fontSize: 30 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            style={styles.textInput}
            value={locationText}
            onChangeText={(locationText) => setLocationText(locationText)}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  header: { flex: 1, backgroundColor: "blue", justifyContent: "center" },
  searchContainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    height: 60,
    fontSize: 30,
    width: "90%",
  },
  textInputContainer: {
    width: "90%",
    marginTop: 30,
    borderBottomWidth: 1,
    alignItems: "center",
  },
});
export default LocationModal;
