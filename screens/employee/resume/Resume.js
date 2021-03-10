import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { Title, Subheading, Paragraph } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../../components/header/Header";
import { connect } from "react-redux";
import HideBottomNavScrollView from "../../../components/hideBottomNavScrollView/HideBottomNavScrollView";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Resume = (props) => {
  let lastPress = 0;

  const [pastJobs] = useState([
    {
      months: "FIRST",
      jobTitle: "FIRST",
      company: "Snapchat Inc.",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      months: "SEPTEMBER 2013 - APRIL 2015",
      jobTitle: "Senior Web Developer",
      company: "Snapchat Inc.",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      months: "SEPTEMBER 2013 - APRIL 2015",
      jobTitle: "Senior Web Developer",
      company: "Snapchat Inc.",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      months: "LAST",
      jobTitle: "LAST",
      company: "Snapchat Inc.",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    },
  ]);
  const [activeAccordions, setActiveAccordions] = useState([]);
  const [skills] = useState([
    "ILLUSTRATION",
    "GRAPHIC DESIGN",
    "BRANDING",
    "UI/UX DESIGN",
    "WEB DESIGN",
    "WEB DEVELOPMENT",
    "PHOTOGRAPHY",
    "CREATIVE DIRECTION",
    "ADVERTISING",
    "LAYOUT",
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
      props.pressDislikeButton();
    }
    lastPress = time;
  };

  return (
    <View
      style={{
        backgroundColor: props.selectedJob.color,
      }}
      onStartShouldSetResponder={onDoublePress}
    >
      <HideBottomNavScrollView
        style={styles.peopleWhoLikedYou}
        navigation={props.navigation}
        // forwardedRef={resumeScrollViewRef}
        currentEmployee={props.currentEmployee}
      >
        <Header />
        <View
          style={{
            backgroundColor: props.selectedJob.color,
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            style={styles.profileImage}
            source={{
              uri:
                "https://i.pinimg.com/originals/6b/6a/7c/6b6a7c9f4a5174b9d7052444ae7d8da5.jpg",
            }}
          />
          <View
            style={{
              backgroundColor: props.selectedJob.color,
              flex: 1,
              padding: 20,
            }}
          >
            <View style={styles.nameAndJobTitleSection}>
              <Title style={styles.name}>{props.currentEmployee}</Title>
              <Subheading style={styles.jobTitle}>DESIGN DIRECTOR</Subheading>
            </View>
            <View style={styles.descriptionTextSection}>
              <Paragraph style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
              <Paragraph style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </View>
          </View>
          <View style={styles.experienceDetailsSection}>
            <View style={styles.experienceAndAvailabilitySection}>
              <View style={styles.yearsOfExperienceSection}>
                <Title style={styles.name}>
                  8 <Text style={{ fontSize: 20 }}>YRS</Text>
                </Title>
                <Subheading style={styles.experienceAndAvailabilitySubtitles}>
                  EXPERIENCE
                </Subheading>
              </View>
              <View style={styles.availabilitySection}>
                <Title style={styles.name}>Now</Title>
                <Subheading style={styles.experienceAndAvailabilitySubtitles}>
                  AVAILABILITY
                </Subheading>
              </View>
            </View>
            <View style={styles.pastJobsSection}>
              {pastJobs.map((item, i) => (
                <TouchableOpacity onPress={() => onAccordionClick(i)} key={i}>
                  <View style={styles.specificPastJob}>
                    <View
                      style={
                        i === pastJobs.length - 1
                          ? styles.lastJobDetailsSection
                          : styles.jobDetailsSection
                      }
                    >
                      <Subheading style={styles.monthsText}>
                        {item.months}
                      </Subheading>
                      <View style={styles.jobTitleContainer}>
                        <Title style={styles.jobTitleText}>
                          {item.jobTitle}
                        </Title>
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
                      </View>
                      <Subheading style={styles.subtitleText}>
                        {item.company}
                      </Subheading>
                      <Paragraph
                        style={
                          activeAccordions.includes(i)
                            ? styles.jobDetailsOpened
                            : styles.hidden
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Paragraph>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.skillsSection}>
              <View style={styles.numberOfSkillsAndFocusedSkillsSection}>
                <View style={styles.numberOfSkillsContainer}>
                  <View style={styles.imageAndTextContainer}>
                    <Text style={styles.skillCircleNumber}>12</Text>
                    <Text style={styles.skillCircleImageSubtext}>Skills</Text>
                    <Image
                      style={styles.skillCircleImage}
                      source={{
                        uri:
                          "https://rileymann.com/wp-content/uploads/2020/12/pare_skills-circle.png",
                      }}
                    ></Image>
                  </View>
                </View>
                <View style={styles.focusedSkillsSection}>
                  <View style={styles.focusedSkillContainer}>
                    <Title style={styles.focusedSkill}>Illustration</Title>
                  </View>
                  <View style={styles.focusedSkillContainer}>
                    <Title style={styles.focusedSkill}>Graphic Design</Title>
                  </View>
                  <View style={styles.focusedSkillContainer}>
                    <Title style={styles.focusedSkill}>Branding</Title>
                  </View>
                </View>
              </View>
              <View style={styles.skillsListSection}>
                {skills.map((skill, i) => (
                  <View key={i} style={styles.skillContainer}>
                    <Text style={styles.skillText}>{skill}</Text>
                    <Text
                      style={
                        i === skills.length - 1
                          ? styles.hidden
                          : styles.bulletPoint
                      }
                    ></Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.educationSection}>
              <Title style={styles.educationTitle}>EDUCATION</Title>
              <View style={styles.educationItemContainer}>
                <View style={styles.degreeTypeAcronymContainer}>
                  <Text style={styles.degreeTypeAcronym}>BFA</Text>
                </View>
                <View style={styles.educationDetails}>
                  <Subheading style={styles.monthsText}>2010 -2014</Subheading>
                  <Title>University of Georgia</Title>
                  <Subheading
                    style={[styles.subtitleText, styles.degreeTypeText]}
                  >
                    Bachelor of Fine Arts
                  </Subheading>
                </View>
              </View>
              <View style={styles.educationItemContainer}>
                <View style={styles.degreeTypeAcronymContainer}>
                  <Text style={styles.degreeTypeAcronym}>MFA</Text>
                </View>
                <View style={styles.educationDetails}>
                  <Subheading style={styles.monthsText}>2010 -2014</Subheading>
                  <Title>University of Georgia</Title>
                  <Subheading
                    style={[styles.subtitleText, styles.degreeTypeText]}
                  >
                    Masters of Fine Arts
                  </Subheading>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: props.selectedJob.color,
              flex: 1,
              padding: 20,
              paddingBottom: 100,
            }}
          >
            <Paragraph style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
            <Paragraph style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </View>
        </View>
      </HideBottomNavScrollView>
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
  nameAndJobTitleSection: {
    paddingTop: 5,
    paddingBottom: 30,
  },
  name: {
    fontSize: 40,
    paddingTop: 10,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 20,
    lineHeight: 30,
  },
  experienceDetailsSection: {
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: "90%",
    borderRadius: 30,
  },
  experienceAndAvailabilitySection: {
    display: "flex",
    flexDirection: "row",
    height: 120,
  },
  yearsOfExperienceSection: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "black",
  },
  availabilitySection: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  experienceAndAvailabilitySubtitles: {
    fontSize: 15,
    fontWeight: "bold",
  },
  pastJobsSection: {
    padding: 30,
    borderTopWidth: 1,
    borderTopColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  specificPastJob: {
    display: "flex",
    flexDirection: "row",
  },
  jobDetailsSection: {
    flex: 1,
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  lastJobDetailsSection: {
    flex: 1,
    display: "flex",
  },
  jobDetailsOpened: {
    display: "flex",
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
    marginTop: 0,
    marginBottom: 0,
    lineHeight: 20,
  },
  angleDownIcon: {
    position: "absolute",
    top: -8,
    alignSelf: "flex-end",
  },
  companyNameText: {
    marginTop: 0,
    lineHeight: 20,
  },

  skillsSection: {
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 40,
  },
  numberOfSkillsAndFocusedSkillsSection: {
    display: "flex",
    flexDirection: "row",
    minHeight: 200,
  },
  numberOfSkillsContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  skillContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  skillText: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  educationSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 50,
  },
  educationTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  educationItemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minHeight: 100,
  },
  degreeTypeAcronymContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  degreeTypeAcronym: {
    fontWeight: "bold",
    fontSize: 26,
  },
  educationDetails: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginRight: 20,
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
    padding: 15,
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
});

const mapStateToProps = (state) => {
  const { selectedJob, bottomNavBarHeight } = state;
  return { selectedJob, bottomNavBarHeight };
};

export default connect(mapStateToProps)(Resume);
