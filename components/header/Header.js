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
  dontShowJobBoardModal,
}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [jobBoardModalOpen, setJobBoardModalOpen] = useState(
    selectedJob.title || dontShowJobBoardModal ? false : true
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
          <View style={styles.leftSection}>
            <TouchableOpacity onPress={() => setJobBoardModalOpen(true)}>
              <Image
                source={{
                  uri:
                    "https://rileymann.com/wp-content/uploads/2021/02/home-icon-fill.png",
                }}
                style={{ width: 30, height: 26 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.middleSection}>
            <Text style={styles.titleText}>
              {selectedJob.title ? selectedJob.title : " "}
            </Text>
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
    borderRightColor: "black",
    borderRightWidth: 1,
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
    borderLeftColor: "black",
    borderLeftWidth: 1,
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Header);
