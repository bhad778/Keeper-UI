import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import { View, StyleSheet, Alert } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Slider from '@react-native-community/slider';
const ModalButtons = () => {
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
    const multiSliderValuesChange = (values) => setMultiSliderValue(values)
    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Slider
                style={{ width: 280, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#fb5b5a"
                maximumTrackTintColor="#000000"
            />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')} title="string me" style={styles.modalButton} />
            <MultiSlider values={[multiSliderValue[0], multiSliderValue[1]]}
                selectedStyle={{ backgroundColor: '#fb5b5a' }}
                sliderLength={280}
                onValuesChange={multiSliderValuesChange}
                min={0}
                max={100}
                allowOverlap={false}
                minMarkerOverlapDistance={10} />
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
    container: { alignItems: 'center' },
    modalButton: { margin: 20, height: 60, width: 300, borderRadius: 20, backgroundColor: 'white' },

})

export default ModalButtons