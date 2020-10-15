import React from 'react'
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
const ModalButtons = () => {
    return (
        <View>
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
        </View>

    )
}
const styles = StyleSheet.create({
    modalButton: { margin: 20, height: 40 },
})

export default ModalButtons