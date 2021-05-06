/* eslint-disable no-undef */
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import JobBoard from "../../screens/employer/jobBoard/JobBoard";
import AppHeaderText from "../AppHeaderText";
import CustomModal from "../customModal";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Header = ({ screenTitle, navigation, withBackButton, selectedJob }) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [jobBoardModalOpen, setJobBoardModalOpen] = useState(
    selectedJob.title ? false : true
  );

  return (
    <Appbar.Header
      style={{
        backgroundColor: selectedJob.color,
        width: SCREEN_WIDTH,
        height: 80,
        elevation: 0,
      }}
    >
      <View style={styles.headerContents}>
        <JobBoard
          navigation={navigation}
          jobBoardModalOpen={jobBoardModalOpen}
          setJobBoardModalOpen={setJobBoardModalOpen}
        ></JobBoard>
        <View style={styles.headerPill}>
          <View style={styles.leftSection}>
            {withBackButton && (
              <TouchableOpacity onPress={goBack}>
                <MaterialIcon name="arrow-back" size={40} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={styles.openJobBoardSection}
            onPress={() => setJobBoardModalOpen(true)}
          >
            <View style={styles.titleSection}>
              <AppHeaderText style={styles.titleText}>
                {screenTitle
                  ? screenTitle
                  : selectedJob.title
                  ? selectedJob.title
                  : " "}
              </AppHeaderText>
            </View>

            <View style={styles.rightButtonSection}>
              <EntypoIcon name="chevron-small-down" size={40} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  headerContents: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 18,
    paddingLeft: 10,
  },
  headerPill: {
    backgroundColor: "white",
    width: "100%",
    height: 78,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  leftSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  openJobBoardSection: {
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
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
  rightButtonSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Header);
