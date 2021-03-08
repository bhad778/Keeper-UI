/* eslint-disable no-undef */
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { Appbar, Text } from "react-native-paper";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import JobBoard from "../../screens/employer/jobBoard/JobBoard";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Header = ({
  screenTitle,
  children,
  navigation,
  withBackButton,
  withEditButton,
  selectedJob,
}) => {
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
      }}
    >
      <View style={styles.headerContents}>
        <JobBoard
          navigation={navigation}
          jobBoardModalOpen={jobBoardModalOpen}
          setJobBoardModalOpen={setJobBoardModalOpen}
        ></JobBoard>
        <View style={styles.headerPill}>
          <View style={styles.leftSection}></View>
          <View style={styles.middleSection}>
            <TouchableOpacity onPress={() => setJobBoardModalOpen(true)}>
              <Text style={styles.titleText}>
                {screenTitle
                  ? screenTitle
                  : selectedJob.title
                  ? selectedJob.title
                  : " "}
              </Text>
            </TouchableOpacity>
          </View>
          {!children && (
            <View style={styles.rightSection}>
              <TouchableOpacity onPress={goBack}>
                <EntypoIcon name="chevron-small-down" size={40} />
              </TouchableOpacity>
              {withBackButton && (
                <TouchableOpacity onPress={goBack}>
                  <MaterialIcon name="" size={40} />
                </TouchableOpacity>
              )}
              {withEditButton && (
                <TouchableOpacity onPress={goBack}>
                  <MaterialIcon name="create" size={40} />
                </TouchableOpacity>
              )}
            </View>
          )}
          {children && (
            <View style={styles.rightHeaderIconContainer}>{children}</View>
          )}
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
  },
  headerPill: {
    backgroundColor: "white",
    width: "90%",
    height: 60,
    borderRadius: 30,
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
  middleSection: {
    height: "100%",
    flex: 1,
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
  titleText: {
    fontSize: 24,
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Header);
