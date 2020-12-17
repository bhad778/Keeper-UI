import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddJob = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <FontAwesome color="#808080" name="glass" fontSize={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="Email..." />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="Email..." />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText} placeholder="Email..." />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, justifyContent: 'center' },
  inputContainer: { flex: 6, alignItems: 'center' },
  inputView: {
    width: '80%',
    backgroundColor: '#ccc',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
  },
  inputText: { height: 50, color: 'white' },
});
export default AddJob;
