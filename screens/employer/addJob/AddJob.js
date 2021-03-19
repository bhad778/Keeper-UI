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
import CompanyDescriptionModal from "../../../modals/CompanyDescriptionModal";
import JobOverviewModal from "../../../modals/JobOverviewModal";
const AddJob = ({ addJobModalVisible, setAddJobModalVisible }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
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
  const [
    companyDescriptionModalVisible,
    setCompanyDescriptionModalVisible,
  ] = useState(false);
  const [jobOverviewModalVisible, setJobOverviewModalVisible] = useState(false);

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
      <CompanyDescriptionModal
        companyDescriptionModalVisible={companyDescriptionModalVisible}
        setCompanyDescriptionModalVisible={setCompanyDescriptionModalVisible}
      />

      <JobOverviewModal
        jobOverviewModalVisible={jobOverviewModalVisible}
        setJobOverviewModalVisible={setJobOverviewModalVisible}
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
        <View style={styles.header}>
          <View style={styles.leftSideHeader}>
            <TouchableOpacity color="black" onPress={goBack} uppercase={false}>
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

        <View style={styles.addJobContainer}>
          <View style={{ width: "100%", marginTop: 20 }}>
            <Text style={{ fontFamily: "app-font", color: "#cacaca" }}>
              Job Title
            </Text>
          </View>
          <TextInput
            style={styles.jobTitleTextInput}
            value={jobTitle}
            name="jobTitle"
            onChangeText={(value) => setJobTitle(value)}
            placeholder="Enter Job Title"
            placeholderTextColor="black"
          />
          <View style={{ width: "100%" }}>
            <Text style={{ fontFamily: "app-font", color: "#cacaca" }}>
              Company name
            </Text>
          </View>
          <TextInput
            style={styles.companyNameTextInput}
            value={companyName}
            onChangeText={(value) => setCompanyName(value)}
            placeholder="Enter Company Name"
            placeholderTextColor="black"
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

          <TouchableOpacity
            onPress={() => setLogoModalVisible(true)}
            style={styles.firstButtonCompanyInfo}
          >
            <Text style={styles.buttonTextColor}>Logo</Text>
            <Icon
              style={styles.arrowIcons}
              name="chevron-right"
              color="#141414"
              size={25}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setLocationModalVisible(true)}
            style={styles.lastButton}
          >
            <Text style={styles.buttonTextColor}>Location</Text>
            <Icon
              style={styles.arrowIcons}
              name="chevron-right"
              color="#141414"
              size={25}
            />
          </TouchableOpacity>

          <View style={styles.textAreaContainer}>
            <TouchableOpacity
              onPress={() => setCompanyDescriptionModalVisible(true)}
              style={styles.textButton}
            >
              <Text style={styles.textAreaLabel}>Company Description</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "98%", alignItems: "flex-start" }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.26)", fontSize: 15 }}>
              Job Info
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setExperienceModalVisible(true)}
            style={styles.buttons}
          >
            <Text style={styles.buttonTextColor}>Experience</Text>

            <Icon
              style={styles.arrowIcons}
              name="chevron-right"
              color="#141414"
              size={25}
            />
          </TouchableOpacity>

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

          <View style={styles.textAreaContainer}>
            <TouchableOpacity
              onPress={() => setJobOverviewModalVisible(true)}
              style={styles.textButton}
            >
              <Text style={styles.textAreaLabel}> Job Overview</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  scrollView: { padding: 20, backgroundColor: "pink", height: 1150 },
  addJobContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    width: "100%",
    height: 980,
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    marginTop: 20,
    marginBottom: 30,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
  },
  leftSideHeader: { width: "25%" },
  middleSectionHeader: { width: "40%" },
  rightSideHeader: { width: "30%" },

  jobTitleTextInput: {
    fontSize: 20,
    height: 40,
    marginBottom: 20,
    borderBottomWidth: 1,
    width: "100%",
    padding: 4,
    backgroundColor: "white",
  },
  companyNameTextInput: {
    alignItems: "flex-start",
    fontSize: 20,
    width: "100%",
    height: 40,
    justifyContent: "flex-end",
    padding: 4,
    borderBottomWidth: 1,
  },

  firstButtonCompanyInfo: {
    width: "100%",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  buttons: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  lastButton: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    flexDirection: "row",
  },

  buttonTextColor: { fontFamily: "app-font", color: "black" },
  arrowIcons: { position: "absolute", left: 279 },
  textAreaContainer: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 40,
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.26)",
  },
  textButton: {
    width: "100%",
    height: 100,
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
    fontSize: 20,
  },

  button: { width: "60%" },
});
export default AddJob;
