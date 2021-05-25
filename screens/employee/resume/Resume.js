import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../../components/header/Header";
import { connect } from "react-redux";
import HideBottomNavScrollView from "../../../components/hideBottomNavScrollView/HideBottomNavScrollView";
import AppText from "../../../components/AppText";
import AppParagraph from "../../../components/AppParagraph";
import AppBoldText from "../../../components/AppBoldText";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Appbar } from "react-native-paper";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Resume = (props) => {
  let lastPress = 0;

  const [currentEmployeeToDisplay, setCurrentEmployeeToDisplay] = useState([]);
  const [isPublicFacingProfile, setIsPublicFacingProfile] = useState(false);

  useEffect(() => {
    if (props.route) {
      setCurrentEmployeeToDisplay(props.route.params.matchData);
      setIsPublicFacingProfile(true);
    } else {
      setCurrentEmployeeToDisplay(props.currentEmployee);
    }
  }, [props.currentEmployee]);

  const [pastJobs] = useState([
    {
      number: "01",
      jobTitle: "Senior Web Developer",
      months: "May 2018 - Present",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      number: "02",
      jobTitle: "Web Developer",
      months: "July 2016 - May 2018",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      number: "03",
      jobTitle: "Junior Web Developer",
      months: "Jan 2013 - July 2016",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      number: "04",
      jobTitle: "Front End Intern",
      months: "May 2011 - Jan 2013",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
  ]);
  const [activeAccordions, setActiveAccordions] = useState([]);
  const [education] = useState([
    {
      degreeType: "MFA",
      school: "Notre Dame",
      major: "Computer Science",
      months: "2014 - 2016",
    },
    {
      degreeType: "BFA",
      school: "University of Georgia",
      major: "Computer Science",
      months: "2010 - 2014",
    },
  ]);
  const [skills] = useState([
    "Illustration",
    "Graphic Design",
    "Branding",
    "UI/UX Design",
    "Web Design",
    "Web Development",
    "Photography",
    "Creative Director",
    "Advertising",
    "Layout",
  ]);

  const onAccordionClick = (i) => {
    // if already been clicked, remove from array else, add it in
    if (activeAccordions.includes(i)) {
      const index = activeAccordions.indexOf(i);
      if (index > -1) {
        const activeAccordionsCopy = activeAccordions;
        activeAccordionsCopy.splice(index, 1);
        setActiveAccordions([...activeAccordionsCopy]);
      }
    } else {
      setActiveAccordions([...activeAccordions, i]);
    }
  };

  const onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      props.swipe(true);
    }
    lastPress = time;
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View
      style={{
        backgroundColor: props.selectedJob.color,
      }}
      onStartShouldSetResponder={onDoublePress}
    >
      <HideBottomNavScrollView
        navigation={props.navigation}
        currentEmployee={currentEmployeeToDisplay}
      >
        {isPublicFacingProfile && (
          <Appbar.Header
            style={{
              backgroundColor: props.selectedJob.color,
              width: SCREEN_WIDTH,
              height: 40,
            }}
          >
            <View style={styles.leftSection}>
              <TouchableOpacity onPress={goBack}>
                <MaterialIcon name="arrow-back" size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.middleSection}></View>
            <View style={styles.rightSection}></View>
          </Appbar.Header>
        )}
        {!isPublicFacingProfile && <Header />}
        {currentEmployeeToDisplay && (
          <View
            style={{
              backgroundColor: props.selectedJob.color,
              flex: 1,
              alignItems: "center",
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <Image
              style={{
                flex: 1,
                height: SCREEN_WIDTH - 30,
                width: SCREEN_WIDTH - 30,
                resizeMode: "cover",
                borderRadius: 4000,
                marginTop: isPublicFacingProfile ? 0 : 30,
              }}
              source={{
                uri:
                  "https://i.pinimg.com/originals/6b/6a/7c/6b6a7c9f4a5174b9d7052444ae7d8da5.jpg",
              }}
            />
            <View
              style={{
                backgroundColor: props.selectedJob.color,
                flex: 1,
              }}
            >
              <View style={styles.nameAndJobTitleSection}>
                <AppBoldText style={styles.name}>
                  {currentEmployeeToDisplay.firstName}
                </AppBoldText>
                <AppBoldText style={styles.jobTitle}>
                  DESIGN DIRECTOR
                </AppBoldText>
              </View>
              <View style={styles.descriptionTextSection}>
                <AppParagraph style={styles.descriptionText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AppParagraph>
                <AppParagraph style={styles.descriptionText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AppParagraph>
              </View>
            </View>
            <View style={styles.experienceDetailsSection}>
              <View style={styles.jobHistoryTitleSection}>
                <AppBoldText style={styles.jobHistoryTitle}>
                  Job History
                </AppBoldText>
              </View>
              <View style={styles.pastJobsSection}>
                {pastJobs.map((item, i) => (
                  <TouchableOpacity onPress={() => onAccordionClick(i)} key={i}>
                    <View style={styles.specificPastJob}>
                      <View style={styles.jobDetailsSection}>
                        <FontAwesome
                          style={styles.angleDownIcon}
                          color="black"
                          name={
                            activeAccordions.includes(i)
                              ? "angle-up"
                              : "angle-down"
                          }
                          size={30}
                        />
                        <AppBoldText style={styles.numberText}>
                          {item.number}
                        </AppBoldText>
                        <View style={styles.jobTitleContainer}>
                          <AppBoldText style={styles.jobTitleText}>
                            {item.jobTitle}
                          </AppBoldText>
                        </View>
                        <AppText style={styles.jobMonthsText}>
                          {item.months}
                        </AppText>
                        <AppParagraph
                          style={
                            activeAccordions.includes(i)
                              ? styles.jobDetailsOpened
                              : styles.hidden
                          }
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </AppParagraph>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.skillsSection}>
                <AppBoldText style={styles.skillsTitle}>Skills</AppBoldText>
                <View style={styles.skillsListSection}>
                  {skills.map((skill, i) => (
                    <View key={i} style={styles.skillContainer}>
                      <AppParagraph style={styles.skillText}>
                        {skill}
                      </AppParagraph>
                      <AppParagraph
                        style={
                          i === skills.length - 1
                            ? styles.hidden
                            : styles.bulletPoint
                        }
                      ></AppParagraph>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.educationSection}>
                <AppBoldText style={styles.educationTitle}>
                  Education
                </AppBoldText>
                {/* style={styles.educationItemContainer} */}
                {education.map((educationItem, i) => {
                  return (
                    <View
                      style={
                        i === education.length - 1
                          ? styles.lastEducationItemContainer
                          : styles.educationItemContainer
                      }
                      key={i}
                    >
                      <AppText style={styles.numberText}>
                        {educationItem.months}
                      </AppText>
                      <View style={styles.jobTitleContainer}>
                        <AppBoldText style={styles.jobTitleText}>
                          {educationItem.major}
                        </AppBoldText>
                      </View>
                      <AppText style={styles.jobMonthsText}>
                        {educationItem.degreeType}
                        &nbsp; &#9679; &nbsp;
                        {educationItem.school}
                      </AppText>
                    </View>
                  );
                })}
              </View>
            </View>
            <View
              style={{
                backgroundColor: props.selectedJob.color,
                flex: 1,
                paddingBottom: 100,
              }}
            >
              <AppParagraph style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
              <AppParagraph style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
        )}
      </HideBottomNavScrollView>
      {!isPublicFacingProfile && (
        <View
          style={{
            height: props.bottomNavBarHeight == -1 ? 0 : 70,
            width: props.bottomNavBarHeight == -1 ? 0 : 70,
            position: "absolute",
            bottom: props.bottomNavBarHeight + 10,
            left: 10,
            zIndex: props.isJobBoardOpen ? -1 : 1,
          }}
        >
          <TouchableOpacity
            onPress={() => props.swipe(false)}
            style={styles.dislikeButtonTouchableOpacity}
          >
            <Image
              style={styles.dislikeButton}
              source={{
                uri:
                  "https://rileymann.com/wp-content/uploads/2021/02/keeper-dislike.png",
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  profileImage: {
    flex: 1,
    height: SCREEN_WIDTH - 30,
    width: SCREEN_WIDTH - 30,
    resizeMode: "cover",
    borderRadius: 4000,
    marginTop: 30,
  },
  dislikeButtonTouchableOpacity: {
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 30,
    shadowOffset: { width: 1, height: 13 },
  },
  dislikeButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  nameAndJobTitleSection: {
    paddingTop: 5,
    paddingBottom: 30,
  },
  name: {
    fontSize: 40,
    paddingTop: 10,
  },
  jobHistoryTitle: {
    fontSize: 40,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  experienceDetailsSection: {
    backgroundColor: "white",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    borderRadius: 45,
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  experienceAndAvailabilitySection: {
    display: "flex",
    flexDirection: "row",
    height: 120,
  },
  jobHistoryTitleSection: {
    display: "flex",
    justifyContent: "center",
  },
  availabilitySection: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  experienceAndAvailabilitySubtitles: {
    fontSize: 15,
  },
  specificPastJob: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingTop: 20,
    paddingBottom: 20,
  },
  numberText: {
    fontSize: 15,
  },
  jobMonthsText: {
    fontSize: 16,
  },
  jobDetailsSection: {
    flex: 1,
    display: "flex",
  },
  jobDetailsOpened: {
    display: "flex",
    marginTop: 15,
    paddingBottom: 15,
  },
  hidden: {
    display: "none",
  },
  monthsText: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 15,
  },
  jobTitleContainer: {
    display: "flex",
  },
  jobTitleText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 20,
  },
  angleDownIcon: {
    position: "absolute",
    top: -10,
    alignSelf: "flex-end",
  },
  companyNameText: {
    marginTop: 0,
    lineHeight: 20,
  },
  skillsSection: {
    display: "flex",
    paddingBottom: 10,
  },
  skillsTitle: {
    fontSize: 32,
    marginTop: 30,
    marginBottom: 30,
  },
  numberOfSkillsAndFocusedSkillsSection: {
    display: "flex",
    flexDirection: "row",
    minHeight: 200,
  },
  imageAndTextContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  skillCircleNumber: {
    position: "absolute",
    right: 54,
    top: 52,
    fontSize: 60,
  },
  skillCircleImageSubtext: {
    position: "absolute",
    top: 110,
    right: 48,
    fontWeight: "500",
    fontSize: 30,
  },
  skillCircleImage: {
    height: 160,
    width: 156,
  },
  focusedSkillsSection: {
    flex: 1,
    justifyContent: "center",
  },
  focusedSkillContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingTop: 7,
    paddingBottom: 7,
  },
  skillsListSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  skillText: {
    fontSize: 17,
    lineHeight: 26,
  },
  educationSection: {
    display: "flex",
    paddingTop: 20,
    paddingBottom: 50,
  },
  educationTitle: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 20,
  },
  educationItemContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  lastEducationItemContainer: {
    marginBottom: 20,
  },
  degreeTypeAcronymContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  degreeTypeAcronym: {
    fontSize: 26,
  },
  educationDetails: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  subtitleText: {
    marginTop: 0,
    paddingBottom: 15,
    lineHeight: 20,
  },
  degreeTypeText: {
    paddingBottom: 20,
  },
  bottomDescriptionText: {
    backgroundColor: "#add9d9",
    paddingTop: 40,
    paddingBottom: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bulletPoint: {
    width: 5,
    height: 5,
    backgroundColor: "black",
    borderRadius: 50,
    marginRight: 8,
    marginLeft: 8,
  },
  leftSection: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  middleSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  const { selectedJob, bottomNavBarHeight, isJobBoardOpen } = state;
  return { selectedJob, bottomNavBarHeight, isJobBoardOpen };
};

export default connect(mapStateToProps)(Resume);
