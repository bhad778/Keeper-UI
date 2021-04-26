import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { Title } from "react-native-paper";
import { Formik } from "formik";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateLoggedInUser } from "../../redux/actions/UsersActions";
import { updateMatches } from "../../redux/actions/MatchesActions";
import { updateEmployersJobs } from "../../redux/actions/EmployersJobsActions";
import { updateEmployeesForSwiping } from "../../redux/actions/EmployeesForSwipingActions";

import * as SecureStore from "expo-secure-store";
import { Auth } from "aws-amplify";
import * as yup from "yup";

import UsersService from "../../services/UsersService";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Login = ({
  navigation,
  updateLoggedInUser,
  updateMatches,
  updateEmployersJobs,
  updateEmployeesForSwiping,
}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const signIn = async (values) => {
    try {
      let signInResponse = await Auth.signIn(
        "Bhad7778@gmail.com",
        "Ululavit#8"
      );
      save(
        "secretToken",
        signInResponse.signInUserSession.accessToken.jwtToken
      );
      if (
        signInResponse.attributes["custom:custom:accountType"] === "employer"
      ) {
        UsersService.getEmployerData({
          email: "Bhad7778@gmail.com",
        })
          .then((data) => {
            updateLoggedInUser(data.userData);
            updateMatches(data.matchesData);
            updateEmployersJobs(data.employersJobs);
            updateEmployeesForSwiping(data.employeesForSwiping);
            navigation.navigate("RootEmployer");
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (
        signInResponse.attributes["custom:custom:accountType"] === "employee"
      ) {
        navigation.navigate("RootEmployee");
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const redirectToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Edge</Title>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={signIn}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.inputText}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                // value={values.email}
                value={"Bhad7778@gmail.com"}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputView}>
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.inputText}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                // value={values.password}
                value={"Ululavit#8"}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={signIn}
              // disabled={
              //   (errors.email && touched.email) ||
              //   (errors.password && touched.password) ||
              //   !touched.email
              // }
              style={{
                width: "80%",
                backgroundColor:
                  (errors.email && touched.email) ||
                  (errors.password && touched.password) ||
                  !touched.email
                    ? "grey"
                    : "#fb5b5a",
                borderRadius: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // style={styles.signUpButton}
              onPress={redirectToSignUp}
            >
              <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  title: { position: "relative", bottom: 60, fontSize: 30 },
  inputView: {
    width: "80%",
    backgroundColor: "#ccc",
    borderRadius: 25,
    height: 50,
    marginBottom: 40,
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  errorText: {
    fontSize: 10,
    color: "red",
    top: 10,
    paddingBottom: 10,
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  signUpButton: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  const { loggedInUserObject } = state;
  return { loggedInUserObject };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateLoggedInUser,
      updateMatches,
      updateEmployersJobs,
      updateEmployeesForSwiping,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
