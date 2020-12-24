import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Header from "../../../components/header/Header";
import { Title, Subheading, Paragraph } from "react-native-paper";

const Resume = () => {
  const [pastJobs] = useState([
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
  ]);

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
          {/* hard code first and last job because of the white line */}
          <View style={styles.pastJobsSection}>
            <View style={styles.specificPastJob}>
              <View style={styles.firstVerticalLineSection}>
                <View style={styles.lastVerticalLine}></View>
              </View>
              <View style={styles.jobDetailsSection}>
                <Subheading style={styles.monthsText}>
                  {pastJobs[0].months}
                </Subheading>
                <Title style={styles.jobTitleText}>
                  {pastJobs[0].jobTitle}
                </Title>
                <Subheading style={styles.companyNameText}>
                  {pastJobs[0].company}
                </Subheading>
              </View>
            </View>
            {pastJobs.map((item, i) => (
              <View style={styles.specificPastJob} key={i}>
                <View style={styles.verticalLineSection}>
                  <View style={styles.verticalLine}></View>
                </View>
                <View style={styles.jobDetailsSection}>
                  <Subheading style={styles.monthsText}>
                    {item.months}
                  </Subheading>
                  <Title style={styles.jobTitleText}>{item.jobTitle}</Title>
                  <Subheading style={styles.companyNameText}>
                    {item.company}
                  </Subheading>
                </View>
              </View>
            ))}
            <View style={styles.specificPastJob}>
              <View style={styles.lastVerticalLineSection}>
                <View style={styles.lastVerticalLine}></View>
              </View>
              <View style={styles.jobDetailsSection}>
                <Subheading style={styles.monthsText}>
                  {pastJobs[pastJobs.length - 1].months}
                </Subheading>
                <Title style={styles.jobTitleText}>
                  {pastJobs[pastJobs.length - 1].jobTitle}
                </Title>
                <Subheading style={styles.companyNameText}>
                  {pastJobs[pastJobs.length - 1].company}
                </Subheading>
              </View>
            </View>
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
    height: "100%",
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  verticalLineSection: {
    height: "100%",
    width: 70,
    display: "flex",
    alignItems: "center",
  },
  lastVerticalLineSection: {
    height: "100%",
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  firstVerticalLine: {
    height: "50%",
    width: 5,
    backgroundColor: "white",
    borderRadius: 99,
  },
  verticalLine: {
    height: "100%",
    width: 5,
    backgroundColor: "white",
    borderRadius: 99,
  },
  lastVerticalLine: {
    height: "50%",
    width: 5,
    backgroundColor: "white",
    borderRadius: 99,
  },
  jobDetailsSection: {
    flex: 1,
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  monthsText: {},
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
