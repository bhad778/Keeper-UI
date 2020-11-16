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

const Filters = ({ filtersModal, filtersModalOn }) => {
  return (
    <Modal animationType="slide" visible={filtersModal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            mode="text"
            color="black"
            onPress={() => filtersModalOn(false)}
          >
            Done
          </Button>
        </View>
        <View style={styles.modalSection}>
          <ScrollView>
            <ModalButtons />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, justifyContent: 'flex-end' },
  modalSection: { flex: 8 },
});

export default Filters;
