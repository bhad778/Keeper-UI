import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Avatar } from 'react-native-paper';
import ModalButtons from '../components/ModalButtons';
const ProfileEdit = ({
  profileEditModalVisible,
  setProfileEditModalVisible,
}) => {
  return (
    <Modal animationType="slide" visible={profileEditModalVisible}>
      <View style={styles.profileEditContainer}>
        <View style={styles.header}>
          <Button
            labelStyle={{ fontSize: 18 }}
            uppercase={false}
            color="black"
            style={styles.modalExitButton}
            onPress={() => setProfileEditModalVisible(false)}
            mode="text"
          >
            Done
          </Button>
        </View>
        <View style={styles.editSection}>
          <ScrollView>
            <View style={styles.profilePictures}>
              <View style={styles.imageContainer}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg',
                  }}
                  style={styles.images}
                />
              </View>
            </View>
            <ModalButtons />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  profileEditContainer: { backgroundColor: 'white', flex: 1 },
  header: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: 'black', fontSize: 20 },

  modalExitButton: { position: 'relative', top: 20 },
  editSection: { flex: 9 },
  profilePictures: { flexDirection: 'row', justifyContent: 'center' },
  imageContainer: {
    height: 87.5,
    width: 87.5,
    position: 'relative',
    borderRadius: 87.5 / 2,

    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 10,
  },
});

export default ProfileEdit;
