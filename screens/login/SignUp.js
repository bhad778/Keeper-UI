import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Title } from 'react-native-paper';

const SignUp = () => {
  let [user, setUser] = useState();
  let [email, setEmail] = useState('bhad778@gmail.com');
  let [password, setPassword] = useState('Ululavit#8');
  let [confirmationCode, setConfirmationCode] = useState();

  const signUp = async () => {
    try {
      let signUpResponse = await Auth.signUp({
        username: 'bhad778@gmail.com',
        password: 'Ululavit#8',
        attributes: {
          phone_number: '+17708802074',
          name: 'Bryan',
          family_name: 'Hadaway',
          'custom:custom:accountType': 'employer',
          'custom:custom:companyName': 'Marietta Pizza Co.',
        },
      });
      setUser(signUpResponse.user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Edge</Title>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={signUp} style={styles.signUpBtn}>
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
      {user && (
        <View>
          <Text>enter verification code</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setConfirmationCode(email)}
            />
          </View>
          <TouchableOpacity onPress={confirmSignUp} style={styles.signUpBtn}>
            <Text style={styles.loginText}>Confirm sign up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { position: 'relative', bottom: 60, fontSize: 30 },
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
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
export default SignUp;
