
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';
import ModalButtons from '../components/ModalButtons'
const Settings = ({ settingsModalVisible, setSettingsModalVisible }) => {

    return (
        <Modal style={styles.modal} visible={settingsModalVisible} animationType="slide">
            <View style={styles.modalHeader}>
                <Button
                    style={styles.modalExitButton}
                    onPress={() => setSettingsModalVisible(false)}
                    mode="text">
                    <Text>Cancel</Text>

                </Button>
                <Text style={styles.modalHeaderText}>Settings</Text>
                <Button
                    style={styles.modalExitButton}
                    onPress={() => setSettingsModalVisible(false)}
                    mode="text">
                    <Text>Done</Text>

                </Button>
            </View>
            <View styles={styles.modalBody}>
                <ScrollView >
                    <ModalButtons />
                </ScrollView>
            </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    modal: {},
    modalHeader: { height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
    modalBody: {},
    modalExitButton: { position: 'relative', top: 10 },
    modalHeaderText: { position: 'relative', top: 10 },

})

export default Settings