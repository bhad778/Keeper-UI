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
import { Button } from 'react-native-paper';
import ModalButtons from '../components/ModalButtons';
const Settings = ({ settingsModalVisible, setSettingsModalVisible }) => {
  return (
    <Modal visible={settingsModalVisible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <Button
            labelStyle={{ fontSize: 18 }}
            uppercase={false}
            color="black"
            style={styles.modalExitButton}
            onPress={() => setSettingsModalVisible(false)}
          >
            Cancel
          </Button>

          <Text style={styles.modalHeaderTextSettings}>Settings</Text>

          <Button
            labelStyle={{ fontSize: 18 }}
            uppercase={false}
            color="black"
            style={styles.modalExitButton}
            onPress={() => setSettingsModalVisible(false)}
          >
            Done
          </Button>
        </View>
        <View style={styles.modalBody}>
          <ScrollView>
            <ModalButtons />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    color: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  modalExitButton: {
    position: 'relative',
    top: 20,
  },

  modalBody: { flex: 8, backgroundColor: '#F8F8F8' },
  modalHeaderTextSettings: { fontSize: 18, position: 'relative', top: 20 },
});

export default Settings;
