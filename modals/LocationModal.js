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
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${locationText}&apikey=42c21425`)
      .then((response) => response.json())
      .then((response) => setData(response));
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
