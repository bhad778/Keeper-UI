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
import Icon from "react-native-vector-icons/Feather";
import ModalHeader from "../components/ModalHeader";
const LocationModal = ({
  locationModalVisible,
  setLocationModalVisible,
  setLocationValue,
}) => {
  const [locationText, setLocationText] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${locationText}&apikey=42c21425`)
      .then((response) => response.json())
      .then((response) => setData(response))
      .then(setLocationValue(data));
  }, [locationText]);

  const goBack = () => {
    setLocationModalVisible(false);
  };
  return (
    <Modal animationType="slide" visible={locationModalVisible}>
      <ModalHeader closeModal={setLocationModalVisible} />

      <View style={styles.searchContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            style={styles.textInput}
            value={locationText}
            onChangeText={(locationText) => setLocationText(locationText)}
          />
        </View>
        {data && (
          <View style={styles.cityOptionsButtonsContainer}>
            <View style={styles.pointerTip} />
            <TouchableOpacity style={styles.cityOptionsButton}>
              <Text style={styles.cityOptionsButtonText}>{data.Title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cityOptionsButton}>
              <Text style={styles.cityOptionsButtonText}>{data.Released}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lastCityOptionsButton}>
              <Text style={styles.cityOptionsButtonText}>{data.Genre}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  headerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 20,
  },
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
    borderBottomColor: "#aeaeae",
    alignItems: "center",
  },
  cityOptionsButtonsContainer: {
    backgroundColor: "#f0f0f0",
    width: "85%",
    alignItems: "center",
    zIndex: 1,
    marginTop: 25,
    height: 200,
    borderRadius: 20,
  },
  cityOptionsButton: {
    zIndex: 1,
    borderBottomWidth: 2,
    width: "80%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#dbdbdb",
  },
  lastCityOptionsButton: {
    zIndex: 1,
    width: "80%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
  },
  cityOptionsButtonText: {
    color: "#b3b3b3",
    fontSize: 20,
  },
  pointerTip: {
    height: 30,
    width: 30,
    position: "absolute",
    bottom: 180,
    transform: [{ rotate: "45deg" }],
    backgroundColor: "#f0f0f0",
    zIndex: 2,
  },
});
export default LocationModal;
