import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateSelectedJob } from "../../../redux/actions/JobActions";
import { updateEmployeesForSwiping } from "../../../redux/actions/EmployeesForSwipingActions";
import { toggleJobBoardOpen } from "../../../redux/actions/ToggleJobBoardOpenActions";
import UsersService from "../../../services/UsersService";
import AppHeaderText from "../../../components/AppHeaderText";
import AppText from "../../../components/AppText";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const JobBoard = ({
  updateSelectedJob,
  toggleJobBoardOpen,
  updateEmployeesForSwiping,
  employersJobs,
}) => {
  const selectJob = (selectedJob) => {
    UsersService.getEmployeesForSwiping({
      lng: selectedJob.geoLocation.coordinates[0],
      lat: selectedJob.geoLocation.coordinates[1],
      // 16000 meters = about 10 miles
      distance: 16000,
      employeesAlreadySwipedOn: selectedJob.employeesAlreadySwipedOn,
      // "filtersArray": [{ "firstName": "Ash" }, { "lastName": "Ketchum" }],
    }).then((data) => {
      updateEmployeesForSwiping(data);
      updateSelectedJob(selectedJob);
      toggleJobBoardOpen(false);
    });
  };

  return (
    <View style={styles.jobBoardModal}>
      <View style={styles.container}>
        <Appbar.Header style={styles.outlinedAppBar}>
          <View
            style={{ display: "flex", width: "100%", flexDirection: "row" }}
          >
            <View style={styles.leftSection}></View>
            <View style={styles.middleSection}></View>
            <View style={styles.rightSection}></View>
          </View>
        </Appbar.Header>
        <View style={styles.scrollViewContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.selectListingTextSection}>
              <View style={styles.selectListingTextContainer}>
                <AppHeaderText style={styles.selectListingText}>
                  Please select your job listing
                </AppHeaderText>
              </View>
            </View>
            {!employersJobs && <ActivityIndicator size="large" />}

            {employersJobs &&
              employersJobs.map((job, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    backgroundColor: job.color,
                    height: 120,
                    width: SCREEN_WIDTH,
                    zIndex: 100,
                  }}
                  onPress={() => selectJob(job)}
                >
                  <View style={styles.jobListing}>
                    <View style={styles.jobListingNumberSection}>
                      <AppText style={styles.jobListingNumberText}>
                        {"0" + i}
                      </AppText>
                    </View>
                    <View style={styles.jobListingTextSection}>
                      <AppHeaderText
                        style={{
                          fontSize: 25,
                        }}
                      >
                        {job.title}
                      </AppHeaderText>

                      <AppHeaderText
                        style={{
                          fontSize: 14,
                        }}
                      >
                        {job.companyName.toUpperCase()}
                      </AppHeaderText>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobBoardModal: {
    // position: "absolute",
    // left: 0,
    // top: 0,
    zIndex: 100,
  },
  container: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    zIndex: 100,
  },
  selectListingTextSection: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 90,
    width: "100%",
    paddingLeft: 30,
    marginTop: 25,
  },
  jobListing: {
    height: "100%",
    flexDirection: "row",
  },
  jobListingNumberSection: {
    height: "100%",
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  jobListingNumberText: {
    fontSize: 22,
  },
  jobListingTextSection: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  selectListingTextContainer: {
    height: "100%",
    width: "70%",
  },
  selectListingText: {
    fontSize: 22,
  },
  scrollViewContainer: {
    height: SCREEN_HEIGHT - 80,
    width: SCREEN_WIDTH,
    zIndex: 100,
  },
  scrollView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    zIndex: 100,
  },
  titleText: {
    fontSize: 30,
  },
  fab: {
    backgroundColor: "black",
  },
  header: { width: 300 },
  outlinedAppBar: {
    backgroundColor: "white",
    elevation: 0,
    height: 80,
    width: SCREEN_WIDTH,
    display: "flex",
    justifyContent: "center",
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
  const { selectedJob, employersJobs } = state;
  return { selectedJob, employersJobs };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateSelectedJob,
      updateEmployeesForSwiping,
      toggleJobBoardOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobBoard);
