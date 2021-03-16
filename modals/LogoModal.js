import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Image,
  Platform,
  Text,
} from "react-native";
import { Avatar } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import Header from "../components/header/Header";
import Icon from "react-native-vector-icons/Feather";

const LogoModal = ({ logoModalVisible, setLogoModalVisible, setLogoValue }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const removeImage = () => {
    setImage(null);
  };
  const goBack = () => {
    setLogoValue(image);
    setLogoModalVisible(false);
  };
  return (
    <Modal animationType="slide" visible={logoModalVisible}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack(false)}>
            <Icon size={20} name="x" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Logo</Text>
        </View>
      </View>
      <View style={styles.imageSelectorSection}>
        <TouchableOpacity>
          <Avatar.Image
            size={200}
            style={styles.logoImage}
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseLogoButton}
          onPress={!image ? pickImage : removeImage}
        >
          <Icon name={!image ? "plus" : "x"} size={40} color="white" />
        </TouchableOpacity>
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
  imageSelectorSection: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: { backgroundColor: "grey" },

  chooseLogoButton: {
    position: "relative",
    backgroundColor: "black",
    bottom: 35,
    left: 50,
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LogoModal;