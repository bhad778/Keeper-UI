import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import JobsService from "../../../services/JobsService";
import Compensation from "../../../modals/Compensation";
import ResponsibilitiesModal from "../../../modals/ResponsibilitiesModal";
import LogoModal from "../../../modals/LogoModal";
import LocationModal from "../../../modals/LocationModal";
import EmploymentModal from "../../../modals/EmploymentModal";
import EducationModal from "../../../modals/EducationModal";
import ExperienceModal from "../../../modals/ExperienceModal";
import WhoWeAreModal from "../../../modals/WhoWeAreModal";
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
  const [whoWeAreModalVisible, setWhoWeAreModalVisible] = useState(false);

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
      <WhoWeAreModal
        whoWeAreModalVisible={whoWeAreModalVisible}
        setWhoWeAreModalVisible={setWhoWeAreModalVisible}
      />
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

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.leftSideHeader}>
              <TouchableOpacity
                color="black"
                onPress={goBack}
                uppercase={false}
              >
                <Text style={{ fontFamily: "app-font", color: "black" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
            <View styles={styles.middleSectionHeader}>
              <Text style={{ fontSize: 30 }}>Add Job</Text>
            </View>
            <View style={styles.rightSideHeader}>
              <TouchableOpacity onPress={postJob} uppercase={false}>
                <Text style={{ color: "black" }}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.addJobContainer}>
          <View style={{ width: "95%", marginTop: 20 }}>
            <Text style={{ fontFamily: "app-font" }}>Job Title</Text>
          </View>
          <TextInput
            style={styles.jobTitleTextInput}
            value={jobTitle}
            name="jobTitle"
            onChangeText={(value) => setJobTitle(value)}
            placeholder="Enter Job Title"
            placeholderTextColor="#cbcbcb"
          />
          <View style={{ width: "95%" }}>
            <Text style={{ fontFamily: "app-font" }}>Company name</Text>
          </View>
          <TextInput
            style={styles.companyNameTextInput}
            value={companyName}
            onChangeText={(value) => setCompanyName(value)}
            placeholder="Enter Company Name"
            placeholderTextColor="#cbcbcb"
          />

          <View
            style={{
              width: "98%",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              height: 70,
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.26)", fontSize: 15 }}>
              Company Info
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setLogoModalVisible(true)}
              style={styles.firstButtonCompanyInfo}
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

          <View style={styles.textAreaContainer}>
            <TouchableOpacity
              onPress={() => setWhoWeAreModalVisible(true)}
              style={styles.textButton}
            >
              <Text style={styles.textAreaLabel}>Who We Are</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "98%", alignItems: "flex-start" }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.26)", fontSize: 15 }}>
              Job Info
            </Text>
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
              <Icon
                style={styles.arrowIcons}
                name="chevron-right"
                color="#141414"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setEmploymentModalVisible(true)}
              style={styles.buttons}
            >
              <Text style={styles.buttonTextColor}>Employment</Text>
              <Icon
                style={styles.arrowIcons}
                name="chevron-right"
                color="#141414"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setEducationModalVisible(true)}
              style={styles.buttons}
            >
              <Text style={styles.buttonTextColor}>Education</Text>
              <Icon
                style={styles.arrowIcons}
                name="chevron-right"
                color="#141414"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.lastButton}
              onPress={() => setResponsibilitiesModalVisible(true)}
            >
              <Text style={styles.buttonTextColor}>Responsibility</Text>
              <Icon
                style={styles.arrowIcons}
                name="chevron-right"
                color="#141414"
                size={25}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.textAreaContainer}>
            <Text style={styles.textAreaLabel}> Job Overview</Text>
            <TouchableOpacity style={{ height: 50 }} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  scrollView: { alignItems: "center", backgroundColor: "pink", height: 1130 },

  headerContainer: {
    height: "10%",
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
    height: "50%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 30,
  },
  leftSideHeader: { width: "25%" },
  middleSectionHeader: { width: "40%" },
  rightSideHeader: { width: "30%" },
  addJobContainer: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    width: "90%",
    height: 980,
    borderRadius: 30,
  },
  jobTitleTextInput: {
    fontSize: 20,
    height: 40,
    marginBottom: 20,
    borderBottomWidth: 1,
    width: "95%",
    backgroundColor: "white",
  },
  companyNameTextInput: {
    alignItems: "flex-start",
    fontSize: 20,
    width: "95%",
    height: 40,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
  },
  buttonsContainer: { width: "100%", alignItems: "center" },
  firstButtonCompanyInfo: {
    width: "95%",
    height: 40,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  buttons: {
    width: "95%",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  lastButton: {
    width: "95%",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonTextColor: { fontFamily: "app-font", color: "black" },
  arrowIcons: { marginLeft: 15 },
  textAreaContainer: {
    width: "95%",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 40,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.26)",
  },
  textButton: {
    width: "100%",
    height: 90,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.26)",
    zIndex: 1,
  },

  textAreaLabel: {
    position: "relative",
    zIndex: 2,
    alignSelf: "center",
    marginTop: 12,
    width: "85%",
    fontSize: 23,
  },

  button: { width: "60%" },
});
export default AddJob;
