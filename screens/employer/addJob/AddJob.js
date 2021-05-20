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
import BenefitsModal from "../../../modals/BenefitsModal";
import CompanyDescriptionModal from "../../../modals/CompanyDescriptionModal";
import JobOverviewModal from "../../../modals/JobOverviewModal";
import ModalHeader from "../../../components/ModalHeader";
import AppText from "../../../components/AppText";
import AppBoldText from "../../../components/AppBoldText";
const AddJob = ({ addJobModalVisible, setAddJobModalVisible }) => {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState("");
  const [jobOverview, setJobOverview] = useState("");
  const [compensationType, setCompensationType] = useState("");
  const [compensation, setCompensation] = useState("");
  const [experience, setExperience] = useState();
  const [employmentType, setEmploymentType] = useState();
  const [benefits, setBenefits] = useState();
  const [education, setEducation] = useState();
  const [responsibilitiesList, setResponsibilitiesList] = useState();

  const [compensationModalVisible, setCompensationModalVisible] = useState(
    false
  );

  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const [experienceModalVisible, setExperienceModalVisible] = useState(false);

  const [employmentModalVisible, setEmploymentModalVisible] = useState(false);

  const [benefitsModalVisible, setBenefitsModalVisible] = useState(false);

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

  const postJob = () => {
    JobsService.addJob(data);
  };

  const data = {
    title: title,
    companyName: companyName,
    description: description,
    jobOverview: jobOverview,
    imagePayload: logo,
    address: address,
    benefits: benefits,
    compensationType: compensationType,
    compensation: compensation,
    experience: experience,
    employmentType: employmentType,
    education: education,
    responsibilities: responsibilitiesList,
  };

  return (
    <Modal animationType="slide" visible={addJobModalVisible}>
      <CompanyDescriptionModal
        setDescription={setDescription}
        companyDescriptionModalVisible={companyDescriptionModalVisible}
        setCompanyDescriptionModalVisible={setCompanyDescriptionModalVisible}
      />

      <JobOverviewModal
        setJobOverview={setJobOverview}
        jobOverviewModalVisible={jobOverviewModalVisible}
        setJobOverviewModalVisible={setJobOverviewModalVisible}
      />

      <ExperienceModal
        setExperience={setExperience}
        experienceModalVisible={experienceModalVisible}
        setExperienceModalVisible={setExperienceModalVisible}
      />
      <BenefitsModal
        setBenefits={setBenefits}
        benefitsModalVisible={benefitsModalVisible}
        setBenefitsModalVisible={setBenefitsModalVisible}
      />
      <EmploymentModal
        setEmploymentType={setEmploymentType}
        employmentModalVisible={employmentModalVisible}
        setEmploymentModalVisible={setEmploymentModalVisible}
      />
      <LocationModal
        setAddress={setAddress}
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
        setCompensationType={setCompensationType}
        compensationModalVisible={compensationModalVisible}
        setCompensationModalVisible={setCompensationModalVisible}
      />
      <LogoModal
        setLogo={setLogo}
        logoModalVisible={logoModalVisible}
        setLogoModalVisible={setLogoModalVisible}
      />

      <EducationModal
        setEducation={setEducation}
        educationModalVisible={educationModalVisible}
        setEducationModalVisible={setEducationModalVisible}
      />
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <ModalHeader
            leftIcon="x"
            rightIcon="check"
            screenTitle="Add Job"
            postJob={() => postJob()}
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
              value={title}
              name="jobTitle"
              onChangeText={(value) => setTitle(value)}
              placeholder="Enter Job Title"
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
              style={styles.middleCompanyInfoButton}
            >
              <AppBoldText style={styles.buttonTextColor}>Location</AppBoldText>
              <Icon
                style={styles.arrowIcons}
                name="chevron-right"
                color="#141414"
                size={25}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setBenefitsModalVisible(true)}
              style={styles.lastButton}
            >
              <AppBoldText style={styles.buttonTextColor}>Benefits</AppBoldText>
              <Icon
                style={styles.arrowIcons}
                name="chevron-right"
                color="#141414"
                size={25}
              />
            </TouchableOpacity>

            <View style={styles.companyDescriptionContainer}>
              <TouchableOpacity
                onPress={() => {
                  setCompanyDescriptionModalVisible(true);
                }}
                style={styles.textButton}
              >
                <AppBoldText style={styles.textAreaLabel}>
                  Company Description
                </AppBoldText>
                <AppText numberOfLines={2}>{description}</AppText>
              </TouchableOpacity>
            </View>
            <View style={{ width: "98%", alignItems: "flex-start" }}>
              <Text style={{ color: "rgba(0, 0, 0, 0.26)", fontSize: 15 }}>
                Job Info
              </Text>
            </View>

            <View style={styles.jobOverviewContainer}>
              <TouchableOpacity
                onPress={() => setJobOverviewModalVisible(true)}
                style={styles.textButton}
              >
                <AppBoldText style={styles.textAreaLabel}>
                  {" "}
                  Job Overview
                </AppBoldText>
                <AppText numberOfLines={2}>{jobOverview}</AppText>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setExperienceModalVisible(true)}
              style={styles.buttons}
            >
              <AppBoldText style={styles.buttonTextColor}>
                Experience
              </AppBoldText>

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
              <AppBoldText style={styles.buttonTextColor}>
                Compensation
              </AppBoldText>
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
              <AppBoldText style={styles.buttonTextColor}>
                Employment
              </AppBoldText>
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
              <AppBoldText style={styles.buttonTextColor}>
                Education
              </AppBoldText>
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
              <AppBoldText style={styles.buttonTextColor}>
                Responsibilities
              </AppBoldText>
              <Icon
                style={styles.arrowIcons}
                name="chevron-right"
                color="#141414"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  scrollViewContainer: { backgroundColor: "pink", flex: 1 },
  scrollView: { padding: 20, backgroundColor: "pink" },
  addJobContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    width: "100%",
    height: 1060,
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
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  middleCompanyInfoButton: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  buttons: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  arrowIcons: {},
  lastButton: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",

    flexDirection: "row",
  },

  buttonTextColor: { color: "black", fontSize: 18 },

  jobOverviewContainer: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 20,
  },
  companyDescriptionContainer: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 45,
    borderRadius: 20,
  },
  textButton: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.26)",
    zIndex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },

  textAreaLabel: {
    position: "relative",
    zIndex: 2,
    alignSelf: "center",
    marginTop: 12,
    width: "85%",
    fontSize: 18,
    marginBottom: 10,
  },

  button: { width: "60%" },
});
export default AddJob;
