import React from "react";
import { StyleSheet, View, Modal, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import ProfileViewImages from "../components/ProfileViewImages";
const ProfileView = ({
  profileViewModalVisible,
  setProfileViewModalVisible,
}) => {
  return (
    <Modal
      visible={profileViewModalVisible}
      animationType="slide"
      presentationStyle="formSheet"
    >
      <View style={styles.profileEditContainer}>
        <View style={styles.header}>
          <Button
            labelStyle={{ fontSize: 18 }}
            uppercase={false}
            color="black"
            style={styles.modalExitButton}
            onPress={() => setProfileViewModalVisible(false)}
            mode="text"
          >
            Done
          </Button>
        </View>
        <View style={styles.profileSection}>
          <ScrollView>
            <ProfileViewImages style={styles.profilePicture} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  profileEditContainer: { flex: 1, backgroundColor: "white" },

  header: { flex: 1 },
  profileSection: { flex: 8 },

  modalExitButton: { position: "relative", top: 35 },
});

export default ProfileView;
