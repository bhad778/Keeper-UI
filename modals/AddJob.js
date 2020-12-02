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
import { Button } from 'react-native-paper';
import ModalButtons from '../components/ModalButtons';

const AddJob = ({ addJobModal, setAddJobModal }) => {
  return (
    <Modal animationType="slide" visible={addJobModal}>
      <View style={styles.addJobContainer}>
        <View style={styles.header}>
          <Button
            mode="text"
            onPress={() => setAddJobModal(false)}
            color="black"
            uppercase={false}
          >
            Done
          </Button>
        </View>
        <ScrollView style={styles.addJobButtons}>
          <ModalButtons />
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  addJobContainer: { flex: 1 },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  addJobButtons: { flex: 3 },
});
export default AddJob;
