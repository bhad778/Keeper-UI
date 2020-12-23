import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Header from "../../../components/header/Header";
import { Title, Subheading, Paragraph } from "react-native-paper";

const Resume = () => {
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
});
export default Resume;
