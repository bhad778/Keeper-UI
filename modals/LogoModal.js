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

import Icon from "react-native-vector-icons/Feather";
import ModalHeader from "../components/ModalHeader";
const LogoModal = ({ logoModalVisible, setLogoModalVisible, setLogo }) => {
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
      setLogo(image);
    }
  };
  const removeImage = () => {
    setImage(null);
  };
 
  return (
    <Modal animationType="slide" visible={logoModalVisible}>
      <View style={styles.imageSelectorSection}>
      <ModalHeader leftIcon="chevron-left" screenTitle="Logo" border={1} closeModal={setLogoModalVisible} />
        <TouchableOpacity style={styles.logoContainer}>
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


  imageSelectorSection: {
    padding:20,
    flex: 1,
    borderWidth:1,
    alignItems: "center",
  },
  logoContainer:{marginTop:60},
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
