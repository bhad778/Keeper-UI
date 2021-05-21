/* eslint-disable no-undef */
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import AppHeaderText from "../AppHeaderText";
import CustomModal from "../customModal/CustomModal";
import { bindActionCreators } from "redux";
import { toggleJobBoardOpen } from "../../redux/actions/ToggleJobBoardOpenActions";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Header = ({
  navigation,
  selectedJob,
  isJobBoardOpen,
  toggleJobBoardOpen,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <CustomModal navigation={navigation}></CustomModal>
        <View style={styles.headerPill}>
          <View style={styles.leftSection}></View>
          <TouchableOpacity
            style={styles.openJobBoardSection}
            onPress={() => toggleJobBoardOpen(!isJobBoardOpen)}
          >
            <View style={styles.titleSection}>
              <AppHeaderText style={styles.titleText}>
                {selectedJob.title}
              </AppHeaderText>
            </View>

            {selectedJob.title === "Job Board" && (
              <View style={styles.rightButtonSection}>
                <AntDesign name="plus" size={40} />
              </View>
            )}

            {selectedJob.title !== "Job Board" && (
              <View style={styles.rightButtonSection}>
                <Entypo name="chevron-small-down" size={40} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 101,
    paddingLeft: 15,
    paddingRight: 15,
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
  const { selectedJob, isJobBoardOpen } = state;
  return { selectedJob, isJobBoardOpen };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleJobBoardOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Header);
