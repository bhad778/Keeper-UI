import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';
import ProfileViewImages from '../components/ProfileViewImages'
const ProfileView = ({ profileViewModalVisible, setProfileViewModalVisible }) => {
    return (
        <Modal visible={profileViewModalVisible}  >
            <View style={styles.profileEditContainer}>
                <View style={styles.header}>
                    <Button
                        style={styles.modalExitButton}
                        onPress={() => setProfileViewModalVisible(false)}
                        mode="text">
                        <Text style={styles.buttonText}>Done</Text>
                    </Button>
                </View>
                <View style={styles.profileSection}>
                    <ScrollView>
                        <ProfileViewImages />
                    </ScrollView>
                </View>

            </View>



        </Modal>
    )

}

const styles = StyleSheet.create({
    profileEditContainer: { flex: 1, backgroundColor: "#003f5c" },
    header: { flex: 1 },
    profileSection: { flex: 3 },
    buttonText: { color: 'white' },
    modalExitButton: { position: 'relative', top: 20 },

})

export default ProfileView