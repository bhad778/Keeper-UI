import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../../components/header/Header";
import { Title, Subheading, Paragraph } from "react-native-paper";
import { abs } from "react-native-reanimated";

const Resume = () => {
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

  return (
    <ScrollView style={styles.peopleWhoLikedYou}>
      <View style={styles.container}>
        <Header screenTitle="Design Director" />
        <Image
          style={styles.profileImage}
          source={{
            uri:
              "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
          }}
        ></Image>
        <View style={styles.personalDescriptionSection}>
          <View style={styles.nameAndJobTitleSection}>
            <Title style={styles.name}>Megan Kelly</Title>
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
              <Title style={styles.name}>8 YRS</Title>
              <Subheading style={styles.jobTitle}>EXPERIENCE</Subheading>
            </View>
            <View style={styles.availabilitySection}>
              <Title style={styles.name}>NOW</Title>
              <Subheading style={styles.jobTitle}>AVAILABILITY</Subheading>
            </View>
          </View>
          <View style={styles.pastJobsSection}>
            {pastJobs.map((item, i) => (
              <TouchableOpacity onPress={() => onAccordionClick(i)} key={i}>
                <View style={styles.specificPastJob}>
                  <View
                    style={
                      i === 0
                        ? styles.firstVerticalLineSection
                        : i === pastJobs.length - 1
                        ? styles.lastVerticalLineSection
                        : styles.verticalLineSection
                    }
                  >
                    <View style={styles.innerCircle}></View>
                    <View style={styles.outerCircle}></View>
                    <View
                      style={
                        i === 0
                          ? styles.firstVerticalLine
                          : i === pastJobs.length - 1
                          ? styles.lastVerticalLine
                          : styles.verticalLine
                      }
                    ></View>
                  </View>
                  <View style={styles.jobDetailsSection}>
                    <Subheading style={styles.monthsText}>
                      {item.months}
                    </Subheading>
                    <Title style={styles.jobTitleText}>{item.jobTitle}</Title>
                    <Subheading style={styles.companyNameText}>
                      {item.company}
                    </Subheading>
                    <Paragraph
                      style={
                        activeAccordions.includes(i)
                          ? styles.jobDetailsOpened
                          : styles.jobDetailsClosed
                      }
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  profileImage: {
    width: "100%",
    height: 500,
  },
  personalDescriptionSection: {
    padding: 20,
  },
  nameAndJobTitleSection: {
    paddingTop: 25,
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
    fontWeight: "500",
    paddingBottom: 20,
  },
  experienceDetailsSection: {
    backgroundColor: "#ffbc07",
    minHeight: 500,
  },
  experienceAndAvailabilitySection: {
    display: "flex",
    flexDirection: "row",
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: "black",
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
  specificPastJob: {
    display: "flex",
    flexDirection: "row",
  },

  firstVerticalLineSection: {
    paddingTop: 7,
    height: "100%",
    width: 70,
    display: "flex",
    alignItems: "center",
  },
  verticalLineSection: {
    height: "100%",
    width: 70,
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  lastVerticalLineSection: {
    height: "100%",
    width: 70,
    display: "flex",
    alignItems: "center",
    paddingBottom: 7,
  },
  innerCircle: {
    position: "absolute",
    zIndex: 2,
    top: 24,
    width: 17,
    height: 17,
    backgroundColor: "black",
    borderRadius: 50,
  },
  outerCircle: {
    position: "absolute",
    zIndex: 1,
    top: 21,
    width: 23,
    height: 23,
    backgroundColor: "#ffbc07",
    borderRadius: 50,
  },
  firstVerticalLine: {
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    flex: 1,
    width: 5,
    backgroundColor: "white",
  },
  verticalLine: {
    flex: 1,
    width: 5,
    backgroundColor: "white",
  },
  lastVerticalLine: {
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99,
    flex: 1,
    width: 5,
    backgroundColor: "white",
  },
  jobDetailsSection: {
    flex: 1,
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  jobDetailsOpened: {
    display: "flex",
  },
  jobDetailsClosed: {
    display: "none",
  },
  monthsText: {
    marginTop: 0,
    marginBottom: 0,
  },
  jobTitleText: {
    marginTop: 0,
    marginBottom: 0,
    lineHeight: 20,
  },
  companyNameText: {
    marginTop: 0,
    lineHeight: 20,
  },
});
export default Resume;
