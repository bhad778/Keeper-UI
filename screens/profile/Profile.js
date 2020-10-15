import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';
import Settings from '../../modals/Settings'
import ProfileEdit from '../../modals/ProfileEdit'
import ProfileView from '../../modals/ProfileView'
import Icon from "react-native-vector-icons/Feather";
const Profile = () => {
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [profileEditModalVisible, setProfileEditModalVisible] = useState(false);
    const [profileViewModalVisible, setProfileViewModalVisible] = useState(false);
    const onPress = () => {
        setModalVisible(true);
    };
    return (
        <View style={styles.container}>
            <Settings settingsModalVisible={settingsModalVisible} setSettingsModalVisible={setSettingsModalVisible} />
            <ProfileEdit profileEditModalVisible={profileEditModalVisible} setProfileEditModalVisible={setProfileEditModalVisible} />
            <ProfileView profileViewModalVisible={profileViewModalVisible} setProfileViewModalVisible={setProfileViewModalVisible} />
            <View style={styles.header}>
                <Button onPress={() => setSettingsModalVisible(true)} style={styles.settingsButton} icon={() => <Icon name="settings" size={40} color="black" />} mode="text" />
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
                <Button onPress={() => setProfileEditModalVisible(true)} style={styles.settingsButton} icon={() => <Icon name="settings" size={40} color="black" />} mode="text" />
                <Button onPress={() => setProfileViewModalVisible(true)} style={styles.settingsButton} icon={() => <Icon name="settings" size={40} color="black" />} mode="text" />
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