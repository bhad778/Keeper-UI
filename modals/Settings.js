
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';
import ModalButtons from '../components/ModalButtons'
const Settings = ({ settingsModalVisible, setSettingsModalVisible }) => {

    return (
        <Modal visible={settingsModalVisible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.modalHeader}>
                    <Button
                        style={styles.modalExitButton}
                        onPress={() => setSettingsModalVisible(false)}
                        mode="text">
                        <Text style={styles.modalHeaderText}>Cancel</Text>

                    </Button>
                    <Text style={styles.modalHeaderText}>Settings</Text>
                    <Button
                        style={styles.modalExitButton}
                        onPress={() => setSettingsModalVisible(false)}
                        mode="text">
                        <Text style={styles.modalHeaderText}>Done</Text>

                    </Button>
                </View>
                <View style={styles.modalBody}>
                    <ScrollView >
                        <ModalButtons />
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: { backgroundColor: '#003f5c', flex: 1 },
    modalHeader: { height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 1 },
    modalBody: { flex: 7 },
    modalHeaderText:{color:'white'}


})

export default Settings