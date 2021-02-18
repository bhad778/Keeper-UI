import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput as NativeTextInput,
  Modal,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../../components/header/Header";
import Icon from "react-native-vector-icons/Feather";
import { skipPartiallyEmittedExpressions } from "typescript";
import JobsService from "../../../services/JobsService";
const AddJob = ({ navigation, addJobModalVisible, setAddJobModalVisible }) => {
  const [text, setText] = React.useState({
    jobTitle: "",
    companyName: "",
    overview: "",
    keyResponsibilities: "",
    qualifications: "",
    levelOfAttractiveness: "",
  });

  const goBack = () => {
    setAddJobModalVisible(false);
  };

  const postJob = () => {
    JobsService.addJob(text);
  };

  const handleChange = (event, name) => {
    const value = event.target.value;
    setText({
      ...text,
      [name]: value,
    });
  };

  return (
    <Modal visible={addJobModalVisible} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "15%",
        }}
      >
        <Button color="black" onPress={goBack} uppercase={false}>
          <Text style={{ color: "black" }}>Cancel</Text>
        </Button>
        <Text style={{ fontSize: 30 }}>Edit</Text>
        <Button onPress={postJob} uppercase={false}>
          <Text style={{ color: "black" }}>Done</Text>
        </Button>
      </View>
      <ScrollView>
        <View style={styles.inputContainer1}>
          <TextInput
            style={{
              height: 60,
              width: "95%",
              backgroundColor: "white",
            }}
            selectionColor="black"
            name="jobTitle"
            value={text.jobTitle}
            onChange={(event) => handleChange(event, "jobTitle")}
            label="Job Title"
            mode="flat"
          />

          <TextInput
            style={{
              height: 60,
              width: "95%",
              backgroundColor: "white",
            }}
            selectionColor="black"
            name="companyName"
            value={text.companyName}
            label="Company Name"
            onChange={(event) => handleChange(event, "companyName")}
            mode="flat"
          />
        </View>
        <View style={styles.inputContainer2}>
          <Button
            style={styles.buttons}
            contentStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.26)",
            }}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Company Logo</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
          <Button
            style={styles.buttons}
            contentStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.26)",
            }}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Location</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
          <Button
            style={styles.buttons}
            contentStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.26)",
            }}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Experience</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
          <Button
            style={styles.buttons}
            contentStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.26)",
            }}
            mode="text"
            uppercase={false}
          >
            <View style={styles.buttonsInnerContent}>
              <Text style={styles.buttonTextColor}>Salary</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </View>
          </Button>
        </View>
        <View style={styles.inputContainer3}>
          <View style={styles.textAreaContainer}>
            <Text style={styles.textAreaLabel}>Overview</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={text.overview}
              name="overview"
              onChange={(event) => handleChange(event, "overview")}
              multiline={true}
              mode="flat"
            />
          </View>
          <View style={styles.textAreaContainer}>
            <Text style={styles.textAreaLabel}>Key Responsibilities</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={text.keyResponsibilities}
              name="keyResponsibilities"
              onChange={(event) => handleChange(event, "keyResponsibilities")}
              multiline={true}
              mode="flat"
            />
          </View>
          <View style={styles.textAreaContainer}>
            <Text style={styles.textAreaLabel}>Qualifications</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={text.qualifications}
              name="qualifications"
              onChange={(event) => handleChange(event, "qualifications")}
              multiline={true}
              mode="flat"
            />
          </View>
          <View style={styles.textAreaContainer}>
            <Text style={styles.textAreaLabel}>Level Of Attractivness</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={text.levelOfAttractiveness}
              name="levelOfAttractivness"
              onChange={(event) => handleChange(event, "levelOfAttractivness")}
              multiline={true}
              mode="flat"
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { justifyContent: "center" },
  inputContainer1: {
    flex: 1,
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  inputContainer2: { flex: 1, alignItems: "center", marginBottom: 40 },
  inputContainer3: { flex: 1, alignItems: "center" },
  buttons: {
    width: "96%",
    height: 50,
  },
  buttonsInnerContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonTextColor: { color: "black" },
  textAreaContainer: {
    width: "95%",
    alignItems: "center",

    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.26)",
  },
  textAreas: {
    width: "90%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,

    borderColor: "rgba(0, 0, 0, 0.26)",
    zIndex: 1,
  },
  textAreaLabel: {
    position: "absolute",
    zIndex: 2,
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
    fontSize: 20,
  },

  button: { width: "60%" },
});
export default AddJob;
