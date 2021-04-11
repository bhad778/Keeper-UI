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
import Places from "google-places-web";
const LocationModal = ({
  locationModalVisible,
  setLocationModalVisible,
  setLocation
}) => {
  const [locationText, setLocationText] = useState("");
  const [data, setData] = useState();
  Places.apiKey = "AIzaSyB0GiWadL-4lSXe7PNO9Vr47iTC4t7C94I";
  const radius = 2000;
  const language = "en"
  const type = "cities"

  Places.autocomplete({ input: locationText, radius, language, type  })
  .then(results => {
    setData(results)
    // results array of partial matches
  })
  .catch(e => console.log(e));


  const saveLocation = (location) => {
    setLocation(location)
  }
 
  return (
    <Modal animationType="slide" visible={locationModalVisible}>

      <View style={styles.searchContainer}>
      <ModalHeader leftIcon="chevron-left" screenTitle='Location' border={1} closeModal={setLocationModalVisible} />

        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            style={styles.textInput}
            value={locationText}
            onChangeText={(locationText) => setLocationText(locationText)}
          />
        </View>
        {data ? <View style={styles.cityOptionsButtonsContainer}>
            <View style={styles.pointerTip} />
            <TouchableOpacity onPress={saveLocation}  style={styles.cityOptionsButton}>
              <Text style={styles.cityOptionsButtonText}>{data.predictions[0].description}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={saveLocation}  style={styles.cityOptionsButton}>
              <Text style={styles.cityOptionsButtonText}>{data.predictions[1].description}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={saveLocation}  style={styles.lastCityOptionsButton}>
              <Text style={styles.cityOptionsButtonText}>{data.predictions[2].description}</Text>
            </TouchableOpacity>
          </View> : null }
         
        
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  
  searchContainer: {
    padding:20,
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