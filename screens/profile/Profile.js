import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal } from "react-native";
import { Button } from 'react-native-paper';

import Icon from "react-native-vector-icons/Feather";
const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const onPress = () => {
        setModalVisible(true);
    };
    return (
        <View style={styles.container}>
            <Modal style={styles.modal} visible={modalVisible} animationType="slide">
                <Button
                    style={styles.modalButton}
                    onPress={() => setModalVisible(false)}
                    mode="text">
                    <Text>Cancel</Text>
                </Button>
            </Modal>
            <View style={styles.header}>
                <Button onPress={() => setModalVisible(true)} style={styles.settingsButton} icon={() => <Icon name="settings" size={40} color="black" />} mode="text" />


            </View>
            <View style={styles.profileSection}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri:
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiVdszvNlg3PRHDEPCs6tRus26-XeBh0a5lQ&usqp=CAU",
                        }}
                        style={styles.images}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    header: {
        flex: 1,
        flexDirection: "row",
        width: 600,
        justifyContent: "flex-start",
    },
    settingsButton: { position: 'relative', left: 115, top: 30 },
    modalButton: { position: "relative", top: 30, right: 120 },
    profileSection: { flex: 8, justifyContent: "center" },
    imageContainer: {
        height: 175,
        width: 175,
        borderRadius: 175 / 2,
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 10,
    },

    images: {
        position: "absolute",
        height: 150,
        width: 150,
        borderWidth: 5,
        borderRadius: 150 / 2,
        resizeMode: "contain",
    },


});

export default Profile;