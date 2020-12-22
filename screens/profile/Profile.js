import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import Settings from "../../modals/Settings";
import ProfileEdit from "../../modals/ProfileEdit";
import ProfileView from "../../modals/ProfileView";
import { FontAwesome } from "@expo/vector-icons";

const Profile = () => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [profileEditModalVisible, setProfileEditModalVisible] = useState(false);
  const [profileViewModalVisible, setProfileViewModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Settings
        settingsModalVisible={settingsModalVisible}
        setSettingsModalVisible={setSettingsModalVisible}
      />
      <ProfileEdit
        profileEditModalVisible={profileEditModalVisible}
        setProfileEditModalVisible={setProfileEditModalVisible}
      />
      <ProfileView
        profileViewModalVisible={profileViewModalVisible}
        setProfileViewModalVisible={setProfileViewModalVisible}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setSettingsModalVisible(true)}
          style={styles.settingsButton}
        >
          <FontAwesome name="glass" fontSize={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => setProfileViewModalVisible(true)}
          >
            <Avatar.Image
              size={150}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiVdszvNlg3PRHDEPCs6tRus26-XeBh0a5lQ&usqp=CAU",
              }}
              style={styles.images}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.editModalButtonContainer}>
          <TouchableOpacity
            style={styles.editModalButton}
            onPress={() => setProfileEditModalVisible(true)}
          >
            <FontAwesome name="glass" fontSize={40} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileImageText}>Tap to edit profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    width: "90%",
    alignItems: "flex-start",
  },

  editModalButtonContainer: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    position: "relative",
    left: 115,
    top: -60,
    borderRadius: 40,
  },
  editModalButton: { position: "relative", left: 7, top: 6 },
  settingsButton: {},
  profileSection: { flex: 8, justifyContent: "flex-start" },
  imageContainer: {
    position: "relative",
    top: 15,
    backgroundColor: "white",
    height: 175,
    width: 175,
    borderRadius: 175 / 2,

    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 10,
  },

  profileImageText: { position: "relative", bottom: 50, left: 40 },
});

export default Profile;
