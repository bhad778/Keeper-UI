import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";

import ModalHeader from "../components/ModalHeader";

const LocationModal = ({
  locationModalVisible,
  setLocationModalVisible,
  setAddress,
}) => {
  const [locationText, setLocationText] = useState("");
  const [locationData, setLocationData] = useState();
  const apiKey = "AIzaSyB0GiWadL-4lSXe7PNO9Vr47iTC4t7C94I";

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${locationText}&types=geocode&key=${apiKey}`
      )
      .then((response) =>
        locationText != "" ? setLocationData(response) : setLocationData(null)
      );
  }, [locationText]);

  const saveLocation = (location) => {
    setAddress(location);
  };

  return (
    <Modal animationType="slide" visible={locationModalVisible}>
      <View style={styles.searchContainer}>
        <ModalHeader
          leftIcon="chevron-left"
          screenTitle="Location"
          border={1}
          closeModal={setLocationModalVisible}
        />

        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            style={styles.textInput}
            value={locationText}
            onChangeText={(locationText) => setLocationText(locationText)}
          />
        </View>
        {locationData && !(locationText === "") && (
          <View style={styles.cityOptionsButtonsContainer}>
            <View style={styles.pointerTip} />
            <TouchableOpacity
              onPress={saveLocation}
              style={styles.cityOptionsButton}
            >
              <Text style={styles.cityOptionsButtonText}>
                {locationData.data.predictions[0].description}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={saveLocation}
              style={styles.cityOptionsButton}
            >
              <Text style={styles.cityOptionsButtonText}>
                {locationData.data.predictions[1].description}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={saveLocation}
              style={styles.lastCityOptionsButton}
            >
              <Text style={styles.cityOptionsButtonText}>
                {locationData.data.predictions[2].description}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
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
