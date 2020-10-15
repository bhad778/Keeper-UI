import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';
import ProfileViewImages from '../components/ProfileViewImages'
const ProfileView = ({ profileViewModalVisible, setProfileViewModalVisible }) => {
    return (
        <Modal visible={profileViewModalVisible} >
            <View style={styles.header}>
                <Text>Edit Profile</Text>
                <Button
                    style={styles.modalExitButton}
                    onPress={() => setProfileViewModalVisible(false)}
                    mode="text">
                    <Text>Done</Text>

                </Button>
            </View>
            <ScrollView>
                <ProfileViewImages />
            </ScrollView>


        </Modal>
    )

}

const styles = StyleSheet.create({
    header: {},
    modalExitButton: {},

})

export default ProfileView