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
import Icon from "react-native-vector-icons/Feather";
import JobsService from "../../../services/JobsService";
import Compensation from "../../../modals/Compensation";
import ResponsibilitiesModal from "../../../modals/ResponsibilitiesModal";
import LogoModal from "../../../modals/LogoModal";
import LocationModal from "../../../modals/LocationModal";
import EmploymentModal from "../../../modals/EmploymentModal";
import EducationModal from "../../../modals/EducationModal";
import ExperienceModal from "../../../modals/ExperienceModal";
import { TouchableOpacity } from "react-native-gesture-handler";
const AddJob = ({ addJobModalVisible, setAddJobModalVisible }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [whoWeAre, setWhoWeAre] = useState("");
  const [overview, setOverview] = useState("");
  const [logo, setLogo] = useState();
  const [location, setLocation] = useState();
  const [compensationType, setCompensationType] = useState([]);
  const [experience, setExperience] = useState();
  const [employment, setEmployment] = useState();
  const [education, setEducation] = useState();
  const [responsibilities, setResponsibilities] = useState();
  const [compensationModalVisible, setCompensationModalVisible] = useState(
    false
  );

  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const [experienceModalVisible, setExperienceModalVisible] = useState(false);

  const [employmentModalVisible, setEmploymentModalVisible] = useState(false);

  const [
    responsibilitiesModalVisible,
    setResponsibilitiesModalVisible,
  ] = useState(false);

  const [logoModalVisible, setLogoModalVisible] = useState(false);

  const [educationModalVisible, setEducationModalVisible] = useState(false);

  const goBack = () => {
    setAddJobModalVisible(false);
  };

  const postJob = () => {
    JobsService.addJob(data);
  };

  const setCompensation = (compensationValue) => {
    setCompensationType(compensationValue);
  };
  const setExperienceValue = (experienceValue) => {
    setExperience(experienceValue);
  };

  const setEmploymentValue = (employmentType) => {
    setEmployment(employmentType);
  };

  const setEducationValue = (educationLevel) => {
    setEducation(educationLevel);
  };
  const setLogoValue = (logoValue) => {
    setLogo(logoValue);
  };

  const setLocationValue = (locationValue) => {
    setLocation(locationValue);
  };

  const setResponsibilitiesList = (responsibilities) => {
    setResponsibilities(responsibilities);
  };
  const data = {
    jobTitle: jobTitle,
    companyName: companyName,
    whoWeAre: whoWeAre,
    overview: overview,
    logo: logo,
    location: location,
    compensationType: compensationType,
    experience: experience,
    employment: employment,
    education: education,
    responsibilities: responsibilities,
  };

  return (
    <Modal animationType="slide" visible={addJobModalVisible}>
      <ExperienceModal
        setExperienceValue={setExperienceValue}
        experienceModalVisible={experienceModalVisible}
        setExperienceModalVisible={setExperienceModalVisible}
      />

      <EmploymentModal
        setEmploymentValue={setEmploymentValue}
        employmentModalVisible={employmentModalVisible}
        setEmploymentModalVisible={setEmploymentModalVisible}
      />
      <LocationModal
        setLocationValue={setLocationValue}
        locationModalVisible={locationModalVisible}
        setLocationModalVisible={setLocationModalVisible}
      />
      <ResponsibilitiesModal
        setResponsibilitiesList={setResponsibilitiesList}
        responsibilitiesModalVisible={responsibilitiesModalVisible}
        setResponsibilitiesModalVisible={setResponsibilitiesModalVisible}
      />
      <Compensation
        setCompensation={setCompensation}
        compensationModalVisible={compensationModalVisible}
        setCompensationModalVisible={setCompensationModalVisible}
      />
      <LogoModal
        setLogoValue={setLogoValue}
        logoModalVisible={logoModalVisible}
        setLogoModalVisible={setLogoModalVisible}
      />

      <EducationModal
        setEducationValue={setEducationValue}
        educationModalVisible={educationModalVisible}
        setEducationModalVisible={setEducationModalVisible}
      />

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          backgroundColor: "pink",
          height: 1050,
        }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.leftSideHeader}>
              <Button color="black" onPress={goBack} uppercase={false}>
                <Text style={{ fontFamily: "app-font", color: "black" }}>
                  Cancel
                </Text>
              </Button>
            </View>
            <View styles={styles.middleSectionHeader}>
              <Text style={{ fontSize: 30 }}>Add Job</Text>
            </View>
            <View style={styles.rightSideHeader}>
              <Button onPress={postJob} uppercase={false}>
                <Text style={{ color: "black" }}>Done</Text>
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.addJobContainer}>
          <TextInput
            style={{
              height: 60,
              marginTop: 10,
              width: "90%",
              backgroundColor: "white",
            }}
            theme={{ colors: { primary: "black" } }}
            selectionColor="black"
            value={jobTitle}
            name="jobTitle"
            onChangeText={(value) => setJobTitle(value)}
            label="Job Title"
            mode="flat"
          />

          <TextInput
            style={{
              height: 60,
              width: "90%",
              backgroundColor: "white",
            }}
            selectionColor="black"
            theme={{ colors: { primary: "black" } }}
            value={companyName}
            name="companyName"
            label="Company Name"
            onChangeText={(value) => setCompanyName(value)}
            mode="flat"
          />

          <View
            style={{
              alignItems: "flex-start",
              width: "90%",
              height: 40,
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.26)" }}>Company Info</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setLogoModalVisible(true)}
              style={styles.buttons}
            >
              <Text style={styles.buttonTextColor}>Logo</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setLocationModalVisible(true)}
              style={styles.lastButton}
            >
              <Text style={styles.buttonTextColor}>Location</Text>
              <Icon
                name="chevron-right"
                color="rgba(0, 0, 0, 0.26)"
                size={25}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "95%",
              alignItems: "center",
              borderWidth: 1,
              marginBottom: 60,
              borderRadius: 20,
              borderColor: "rgba(0, 0, 0, 0.26)",
            }}
          >
            <Text style={styles.textAreaLabel}>Who We Are</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={data.whoWeAre}
              name="whoWeAre"
              onChangeText={(value) => setWhoWeAre(value)}
              multiline={true}
              mode="flat"
            />
          </View>
          <View style={{ width: "90%", alignItems: "flex-start" }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.26)" }}>Job Info</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setExperienceModalVisible(true)}
              style={styles.buttons}
            >
              <Text style={styles.buttonTextColor}>Experience</Text>
              <Icon name="chevron-right" color="#141414" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setCompensationModalVisible(true)}
              style={styles.buttons}
            >
              <Text style={styles.buttonTextColor}>Compensation</Text>
              <Icon name="chevron-right" color="#141414" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setEmploymentModalVisible(true)}
              style={styles.buttons}
            >
              <Text style={styles.buttonTextColor}>Employment</Text>
              <Icon name="chevron-right" color="#141414" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setEducationModalVisible(true)}
              style={styles.buttons}
            >
              <Text style={styles.buttonTextColor}>Education</Text>
              <Icon name="chevron-right" color="#141414" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.lastButton}
              onPress={() => setResponsibilitiesModalVisible(true)}
            >
              <Text style={styles.buttonTextColor}>Responsibility</Text>
              <Icon name="chevron-right" color="#141414" size={25} />
            </TouchableOpacity>
          </View>

          <View style={styles.textAreaContainer}>
            <Text style={styles.textAreaLabel}>Overview</Text>
            <NativeTextInput
              style={styles.textAreas}
              value={overview}
              name="overview"
              onChangeText={(value) => setOverview(value)}
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
  headerContainer: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "100%",
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
  },
  leftSideHeader: { width: "25%" },
  middleSectionHeader: { width: "40%" },
  rightSideHeader: { width: "30%" },
  addJobContainer: {
    padding: 10,
    backgroundColor: "white",
    marginTop: 20,
    borderWidth: 1,
    width: "90%",
    height: 850,
    borderRadius: 30,
  },
  buttonsContainer: { width: "100%" },
  buttons: {
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  lastButton: {
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },

  buttonTextColor: { fontFamily: "app-font", color: "black" },
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
    height: 100,
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
