import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';
import ModalButtons from '../components/ModalButtons'
const ProfileEdit = ({ profileEditModalVisible, setProfileEditModalVisible }) => {
    return (
        <Modal animationType="slide" visible={profileEditModalVisible}>
            <View style={styles.header}>
                <Text>Edit Profile</Text>
                <Button
                    style={styles.modalExitButton}
                    onPress={() => setProfileEditModalVisible(false)}
                    mode="text">
                    <Text>Done</Text>

                </Button>
            </View>
            <View style={styles.editSection}>
                <ScrollView >
                    <View style={styles.profilePictures}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
                                }}
                                style={styles.images}
                            />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
                                }}
                                style={styles.images}
                            />
                        </View>

                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
                                }}
                                style={styles.images}
                            />
                        </View>
                    </View>


                    <ModalButtons />

                </ScrollView>

            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    header: { flex: 1 },
    editSection: { flex: 9 },
    profilePictures: { flexDirection: 'row', flexWrap: 'wrap' },
    imageContainer: {
        height: 87.5,
        width: 87.5,
        position: "relative",
        borderRadius: 87.5 / 2,
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 10,
    },

    images: {
        position: "absolute",
        height: 75,
        width: 75,
        borderWidth: 5,
        borderRadius: 75 / 2,
        resizeMode: "contain",
    },
})

export default ProfileEdit