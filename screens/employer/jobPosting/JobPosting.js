/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import HideBottomNavScrollView from "../../../components/hideBottomNavScrollView/HideBottomNavScrollView";
import AppText from "../../../components/AppText";
import AppParagraph from "../../../components/AppParagraph";
import AppHeaderText from "../../../components/AppHeaderText";
import AppBoldText from "../../../components/AppBoldText";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const JobPosting = (props) => {
  let lastPress = 0;

  const [skills] = useState([
    "401(k)",
    "Medical Insurance",
    "Vision Insurance",
    "Dental Insurance",
    "Disability Insurance",
    "PTO",
  ]);

  const onDoublePress = () => {
    if (!props.isJobBoardOpen) {
      const time = new Date().getTime();
      const delta = time - lastPress;

      const DOUBLE_PRESS_DELAY = 400;
      if (delta < DOUBLE_PRESS_DELAY) {
        props.swipe(true);
      }
      lastPress = time;
    }
  };

  return (
    <View
      style={styles.jobPostingContainer}
      onStartShouldSetResponder={onDoublePress}
    >
      <HideBottomNavScrollView>
        <View style={styles.headerPill}>
          <View style={styles.leftSection}>
            {<MaterialCommunityIcons onPress name="filter" size={30} />}
          </View>
          <View style={styles.titleSection}>
            <AppHeaderText style={styles.titleText}>Designer</AppHeaderText>
          </View>
          <View style={styles.rightSection}></View>
        </View>
        <View style={styles.jobOverviewSection}>
          <View style={styles.logoAndTextSection}>
            <Image
              style={styles.companyLogo}
              source={require("../../../assets/images/google.png")}
            />
            <AppBoldText style={styles.jobTitle}>Product Designer</AppBoldText>
            <View style={styles.fullTimeAndCityContainer}>
              <AppBoldText style={styles.isFullTimeText}>Full Time</AppBoldText>
              <AppBoldText style={styles.cityText}>Atlanta, GA</AppBoldText>
            </View>

            <AppBoldText style={styles.salaryOrHourlyText}>
              60k - 100k / Year
            </AppBoldText>
          </View>
          <View style={styles.jobOverviewTextSection}>
            <AppBoldText style={styles.jobOverviewText}>
              Job Overview
            </AppBoldText>
            <AppParagraph style={{ marginBottom: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AppParagraph>
            <AppParagraph style={{ marginBottom: 30 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AppParagraph>
          </View>
        </View>
        <View style={styles.keyResponsibilitiesSection}>
          <AppBoldText style={styles.jobOverviewText}>
            Key Responsibilities
          </AppBoldText>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
        </View>
        <View style={styles.whoWeAreSection}>
          <View style={styles.jobOverviewTextSection}>
            <AppBoldText style={styles.jobOverviewText}>Who We Are</AppBoldText>
            <AppParagraph style={{ marginBottom: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AppParagraph>
            <AppParagraph style={{ marginBottom: 30 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AppParagraph>
          </View>
          <AppBoldText style={styles.jobOverviewText}>Benefits</AppBoldText>
          <View style={styles.skillsSection}>
            <View style={styles.skillsListSection}>
              {skills.map((skill, i) => (
                <View key={i} style={styles.skillContainer}>
                  <AppParagraph style={styles.skillText}>{skill}</AppParagraph>
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
        </View>
        <View style={styles.qualifications}>
          <AppBoldText style={styles.jobOverviewText}>
            Qualifications
          </AppBoldText>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
          <View style={styles.responsibility}>
            <View style={styles.arrowContainer}>
              <AntDesign name="arrowright" size={20} />
            </View>
            <View style={styles.responsibilityTextContainer}>
              <AppParagraph style={styles.responsibilityText}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </AppParagraph>
            </View>
          </View>
        </View>
      </HideBottomNavScrollView>
      <View
        style={{
          height: props.bottomNavBarHeight == -1 ? 0 : 70,
          width: props.bottomNavBarHeight == -1 ? 0 : 70,
          position: "absolute",
          bottom: props.bottomNavBarHeight + 10,
          left: 10,
          zIndex: 1,
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
    </View>
  );
};
const styles = StyleSheet.create({
  jobPostingContainer: {
    backgroundColor: "#ff8267",
    minHeight: SCREEN_HEIGHT,
    paddingLeft: 15,
    paddingRight: 15,
    // paddingBottom: 80,
  },
  headerPill: {
    backgroundColor: "white",
    width: "100%",
    height: 72,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    zIndex: 101,
    marginTop: 50,
    borderWidth: 1,
  },
  leftSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleSection: {
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 6,
  },
  titleText: {
    fontSize: 20,
  },
  jobOverviewSection: {
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "white",
    borderRadius: 35,
    minHeight: SCREEN_WIDTH,
    padding: 20,
    paddingTop: 40,
  },
  logoAndTextSection: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  jobOverviewTextSection: {},
  companyLogo: {
    height: 100,
    width: 100,
    marginBottom: 25,
  },
  jobTitle: {
    fontSize: 30,
    letterSpacing: 1,
    marginBottom: 15,
  },
  fullTimeAndCityContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  isFullTimeText: {
    fontSize: 18,
    marginRight: 20,
  },
  cityText: {
    fontSize: 18,
  },
  salaryOrHourlyText: {
    fontSize: 18,
    marginBottom: 40,
  },
  jobOverviewText: {
    fontSize: 26,
    marginBottom: 20,
  },
  responsibility: {
    flexDirection: "row",
    marginBottom: 25,
  },
  arrowContainer: {
    width: 40,
  },
  responsibilityText: {
    flexWrap: "wrap",
    width: SCREEN_WIDTH - 75,
  },
  whoWeAreSection: {
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "white",
    borderRadius: 35,
    minHeight: SCREEN_WIDTH,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
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
  bulletPoint: {
    width: 5,
    height: 5,
    backgroundColor: "black",
    marginRight: 8,
    marginLeft: 8,
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
});

const mapStateToProps = (state) => {
  const { selectedJob, bottomNavBarHeight, isJobBoardOpen } = state;
  return { selectedJob, bottomNavBarHeight, isJobBoardOpen };
};

export default connect(mapStateToProps)(JobPosting);
