/* eslint-disable no-undef */
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import AppHeaderText from "../AppHeaderText";
import CustomModal from "../customModal/CustomModal";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Header = ({ screenTitle, navigation, withBackButton, selectedJob }) => {
  const goBack = () => {
    navigation.goBack();
  };
  const [jobBoardModalOpen, setJobBoardModalOpen] = useState(
    selectedJob.title ? false : true
  );

  return (
    <View style={styles.headerContainer}>
      <View>
        <CustomModal
          jobBoardModalOpen={jobBoardModalOpen}
          setJobBoardModalOpen={setJobBoardModalOpen}
          navigation={navigation}
        ></CustomModal>
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
            onPress={() => setJobBoardModalOpen(!jobBoardModalOpen)}
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
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 101,
  },
  headerPill: {
    backgroundColor: "gold",
    width: "100%",
    height: 78,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    zIndex: 101,
    marginTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
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
