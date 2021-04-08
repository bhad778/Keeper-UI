import { Auth } from "aws-amplify";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Title } from "react-native-paper";
import AppTextInput from "../../components/AppTextInput";
import AppPhoneInput from "../../components/AppPhoneInput";
import { Formik, Field } from "formik";
import * as yup from "yup";

const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  accountType: yup.string().required("Account type is required"),
  phoneNumber: yup
    .string()
    .min(14, () => `Password must be at least ${10} characters`)
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),
});

const SignUp = () => {
  let [user, setUser] = useState();
  let [email, setEmail] = useState();
  let [confirmationCode, setConfirmationCode] = useState();

  const signUp = async (values) => {
    setEmail(values.email);
    try {
      let signUpResponse = await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          phone_number: "+1" + values.phoneNumber.replace(/\D/g, ""),
          name: values.firstName,
          family_name: values.lastName,
          "custom:custom:accountType": values.accountType.toLowerCase(),
          "custom:custom:companyName": values.companyName || "No Company",
        },
      });
      setUser(signUpResponse.user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Edge</Title>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={signUp}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={AppTextInput}
              name="firstName"
              placeholder="First Name"
            />
            <Field
              component={AppTextInput}
              name="lastName"
              placeholder="Last Name"
            />
            <Field
              component={AppTextInput}
              name="accountType"
              placeholder="Account Type"
            />
            <Field
              component={AppTextInput}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <Field
              component={AppPhoneInput}
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <Field
              component={AppTextInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Field
              component={AppTextInput}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />

            <Button
              onPress={handleSubmit}
              title="SIGN UP"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
      {/* <View style={styles.inputView}>
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
      </TouchableOpacity> */}
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: { position: "relative", bottom: 60, fontSize: 30 },
  inputView: {
    width: 300,
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
  signUpBtn: {
    width: 300,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
export default SignUp;
