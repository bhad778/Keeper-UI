import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../../components/header/Header";
import Settings from "../../modals/Settings";
import ProfileEdit from "../../modals/ProfileEdit";
import ProfileView from "../../modals/ProfileView";

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
      <Header screenTitle="Design Director" withEditButton />
      <View style={styles.profileSection}>
        <View style={styles.imageSection}>
          <Avatar.Image
            size={200}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiVdszvNlg3PRHDEPCs6tRus26-XeBh0a5lQ&usqp=CAU",
            }}
            style={styles.images}
          />

          <TouchableOpacity
            style={styles.editModalButtonContainer}
            onPress={() => setProfileEditModalVisible(true)}
          >
            <Icon style={styles.editModalButton} name="create" size={30} />
            <Text style={styles.profileImageText}>Tap to edit profile</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.row}>
            <Text style={styles.text}>Preferences</Text>
            <Icon name="create" color="#b1b1b1" size={30} />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Account</Text>
            <Icon name="create" color="#b1b1b1" size={30} />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Help Center</Text>
            <Icon name="create" color="#b1b1b1" size={30} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            mode="contained"
            color="#ff8365"
            onPress={() => console.log("Button with adjusted color pressed")}
          >
            Get Pare Pro
          </Button>
        </View>
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
  editModalButtonContainer: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    position: "relative",
    bottom: 50,
    left: 1,
    borderRadius: 75,
  },
  text: { color: "#b6b6b6" },
  editModalButton: {
    position: "relative",
    left: 55,
    top: 10,
    color: "#b1b1b1",
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    position: "relative",
    top: 30,
  },
  button: { width: "40%", borderRadius: 20 },
  profileSection: { flex: 8, justifyContent: "center", width: "100%" },
  imageSection: { alignItems: "center" },
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  profileImageText: { position: "relative", top: 30, left: 15 },
});

export default Profile;
