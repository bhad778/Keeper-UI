import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Title } from "react-native-paper";
import { Auth } from "aws-amplify";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO sign in works now just need to take token and use it
  // also need to navigate to correct page
  // once signIn to aws is done then we must
  // do a call to mongo to get that users info
  // does call to get user first time by using email then saves their mongoId for faster calls? or hits email index anyway
  const signIn = async () => {
    try {
      let signInResponse = await Auth.signIn(email, password);
      console.log(signInResponse);
      localStorage.setItem(
        "secretToken",
        signInResponse.signInUserSession.accessToken.jwtToken
      );
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  // const goToHomeScreen = () => {
  //   navigation.navigate('Root', { message: false });
  // };

  const signUp = () => {
    navigation.navigate("SignUp");
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signIn} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { position: "relative", bottom: 60, fontSize: 30 },
  inputView: {
    width: "80%",
    backgroundColor: "#ccc",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});

export default Login;
