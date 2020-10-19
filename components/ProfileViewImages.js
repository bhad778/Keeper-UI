import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Modal, ScrollView, Alert } from "react-native";
import { Button } from 'react-native-paper';

const ProfileViewImages = () => {
    return (
        <View>
            <Image style={styles.images} source={{ uri: "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg", }} />
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
            <Text>I love dancing, acting, and hanging out with friends! a;sdlkfjas;ldfjals;dkjfas;ldkfjasl;dkfjas;ldfjk;asdkfjas;dfjkas;dfkja;lsdkfjas;ldfkja;sldkfja;sdkfja;sdkfja;sdfjk</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    images: { height: 400, width: 400 }
})

export default ProfileViewImages