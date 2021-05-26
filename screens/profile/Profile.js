import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../../components/header/Header";
import Settings from "../../modals/Settings";
import ProfileEdit from "../../modals/ProfileEdit";
import ProfileView from "../../modals/ProfileView";
import { connect } from "react-redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Profile = (props) => {
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
      <ScrollView
        style={{
          width: "100%",
          backgroundColor: props.selectedJob.color,
          height: SCREEN_HEIGHT,
        }}
      >
        <Header />

        <View
          style={{
            width: "100%",
            height: SCREEN_HEIGHT,
            backgroundColor: props.selectedJob.color,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View style={styles.imageSection}>
            <View style={styles.imageContainer}>
              <Avatar.Image
                size={220}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiVdszvNlg3PRHDEPCs6tRus26-XeBh0a5lQ&usqp=CAU",
                }}
                style={styles.images}
              />

              <View style={styles.editModalButtonContainer}>
                <TouchableOpacity
                  onPress={() => setProfileEditModalVisible(true)}
                >
                  <Icon
                    style={styles.editModalButton}
                    name="create"
                    size={30}
                  />
                  <Text style={styles.profileImageText}>
                    Tap to edit profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.optionsSection}>
            <View style={styles.row}>
              <Text style={styles.text}>Preferences</Text>
              <Icon name="chevron-right" size={30} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Account</Text>
              <Icon name="chevron-right" size={30} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Notifications</Text>
              <Icon name="chevron-right" size={30} />
            </View>
            <View style={styles.helpCenterRow}>
              <Text style={styles.text}>Help Center</Text>
              <Icon name="chevron-right" size={30} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: SCREEN_HEIGHT + 80,
  },
  imageSection: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 35,
    minHeight: SCREEN_WIDTH,
    overflow: "hidden",
    marginTop: 30,
    marginBottom: 15,
  },
  imageContainer: {
    top: -20,
  },
  editModalButtonContainer: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    left: 35,
    borderRadius: 75,
    position: "absolute",
    top: 180,
  },
  editModalButton: {
    position: "relative",
    left: 58,
    top: 10,
    color: "#b1b1b1",
  },
  text: {
    color: "black",
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  button: {
    width: "40%",
    borderRadius: 20,
  },
  optionsSection: {
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  helpCenterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  profileImageText: {
    position: "relative",
    top: 15,
    left: 15,
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Profile);
