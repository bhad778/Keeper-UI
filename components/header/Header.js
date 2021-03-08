/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
} from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import JobBoard from "../../screens/employer/jobBoard/JobBoard";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Header = ({
  //screenTitle,
  children,
  navigation,
  // type,
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
      // style={
      //   type === "outlined"
      //     ? styles.outlinedAppBar
      //     : type === "noBorder"
      //     ? styles.noBorderAppBar
      //     : styles.filledAppBar
      // }
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
        {/* <TouchableOpacity
          style={styles.jobBoardButton}
          onPress={() => setJobBoardModalOpen(true)}
        >
          <View>
            <Text>Select New Job</Text>
          </View>
        </TouchableOpacity> */}
        <View style={styles.jobBoardButton}>
          <View style={styles.leftSection}></View>
          <View style={styles.middleSection}>
            <TouchableOpacity onPress={() => setJobBoardModalOpen(true)}>
              <Text style={styles.titleText}>
                {selectedJob.title ? selectedJob.title : " "}
              </Text>
            </TouchableOpacity>
          </View>
          {!children && (
            <View style={styles.rightSection}>
              {withBackButton && (
                <TouchableOpacity onPress={goBack}>
                  <Icon name="arrow-back" size={40} />
                </TouchableOpacity>
              )}
              {withEditButton && (
                <TouchableOpacity onPress={goBack}>
                  <Icon name="create" size={40} />
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
  jobBoardButton: {
    backgroundColor: "white",
    width: "80%",
    height: 45,
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
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Header);
