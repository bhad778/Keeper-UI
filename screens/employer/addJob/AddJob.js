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
import ModalHeader from "../../../components/ModalHeader";
import AppText from '../../../components/AppText'
import AppBoldText from '../../../components/AppBoldText'
const AddJob = ({ addJobModalVisible, setAddJobModalVisible }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState();
  const [location, setLocation] = useState();
  const [compensationType, setCompensationType] = useState([]);
  const [experience, setExperience] = useState();
  const [employmentType, setEmploymentType] = useState();
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

  const [currentModal, setCurrentModal] = useState();

  const goBack = () => {
    setAddJobModalVisible(false);
  };

  const postJob = () => {
    JobsService.addJob(data);
  };

  const setCompensation = (compensationValue) => {
    setCompensationType(compensationValue);
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

  const goToLogoModal = () => {
    setLogoModalVisible(true);
    setCurrentModal(logoModalVisible);
  };

  const data = {
    jobTitle: jobTitle,
    companyName: companyName,
    logo: logo,
    location: location,
    compensationType: compensationType,
    experience: experience,
    employment: employmentType,
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
        setExperience={setExperience}
        experienceModalVisible={experienceModalVisible}
        setExperienceModalVisible={setExperienceModalVisible}
      />

      <EmploymentModal
        setEmploymentType={setEmploymentType}
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
        setEducation={setEducation}
        educationModalVisible={educationModalVisible}
        setEducationModalVisible={setEducationModalVisible}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <ModalHeader
        leftIcon="x"
        rightIcon='check'
        screenTitle='Add Job'
          border={0}
          currentModal={currentModal}
          setCurrentModal={setCurrentModal}
          closeModal={setAddJobModalVisible}
        />

        <View style={styles.addJobContainer}>
          <View style={{ width: "100%", marginTop: 20 }}>
            <AppText style={{ color: "#cacaca" }}>Job Title</AppText>
          </View>
          <TextInput
            style={styles.jobTitleTextInput}
            value={jobTitle}
            name="jobTitle"
            onChangeText={(value) => setJobTitle(value)}
            placeholder='Enter Job Title'
            placeholderTextColor="black"
          />
          <View style={{ width: "100%" }}>
            <AppText style={{ color: "#cacaca" }}>Company name</AppText>
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
            <AppText style={{ color: "rgba(0, 0, 0, 0.26)", fontSize: 15 }}>
              Company Info
            </AppText>
          </View>

          <TouchableOpacity
            onPress={() => setLogoModalVisible(true)}
            style={styles.firstButtonCompanyInfo}
          >
            <AppBoldText style={styles.buttonTextColor}>Logo</AppBoldText>
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
            <AppBoldText style={styles.buttonTextColor}>Location</AppBoldText>
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
              <AppBoldText style={styles.textAreaLabel}>Company Description</AppBoldText>
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
            <AppBoldText style={styles.buttonTextColor}>Experience</AppBoldText>

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
            <AppBoldText style={styles.buttonTextColor}>Compensation</AppBoldText>
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
            <AppBoldText style={styles.buttonTextColor}>Employment</AppBoldText>
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
            <AppBoldText style={styles.buttonTextColor}>Education</AppBoldText>
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
            <AppBoldText style={styles.buttonTextColor}>Responsibility</AppBoldText>
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
              <AppBoldText style={styles.textAreaLabel}> Job Overview</AppBoldText>
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
    borderBottomColor: "black",
  },
  buttons: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  lastButton: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    flexDirection: "row",
  },

  buttonTextColor: { color: "black" },
  arrowIcons: { position: "absolute", left: 295 },
  textAreaContainer: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 40,
    borderRadius: 20,
    
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
