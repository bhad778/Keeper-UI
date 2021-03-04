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
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <JobBoard
          navigation={navigation}
          jobBoardModalOpen={jobBoardModalOpen}
          setJobBoardModalOpen={setJobBoardModalOpen}
        ></JobBoard>
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
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  filledAppBar: {
    backgroundColor: "white",
    elevation: 0,
    height: 80,
    width: SCREEN_WIDTH,
  },
  outlinedAppBar: {
    backgroundColor: "white",
    elevation: 0,
    borderBottomWidth: 1,
    height: 80,
    width: "100%",
  },
  noBorderAppBar: {
    backgroundColor: "white",
    elevation: 0,
    height: 80,
    width: "100%",
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
    fontSize: 30,
  },
  rightHeaderIconContainer: {
    paddingRight: 10,
  },
  logoButton: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    overflow: "visible",
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Header);
