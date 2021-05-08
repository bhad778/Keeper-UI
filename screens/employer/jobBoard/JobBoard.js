import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Card, Appbar } from "react-native-paper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateSelectedJob } from "../../../redux/actions/JobActions";
import { updateEmployeesForSwiping } from "../../../redux/actions/EmployeesForSwipingActions";
import UsersService from "../../../services/UsersService";
import Icon from "react-native-vector-icons/Feather";
import AddJob from "../addJob/AddJob";
import AppHeaderText from "../../../components/AppHeaderText";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const JobBoard = ({
  updateSelectedJob,
  setJobBoardModalOpenProp,
  updateEmployeesForSwiping,
  employersJobs,
}) => {
  const [addJobModalVisible, setAddJobModalVisible] = useState(false);

  const selectJob = (selectedJob) => {
    UsersService.getEmployeesForSwiping({
      "lng": selectedJob.geoLocation.coordinates[0],
      "lat": selectedJob.geoLocation.coordinates[1],
      "distance": 10000,
      "employeesAlreadySwipedOn": selectedJob.employeesAlreadySwipedOn,
      // "filtersArray": [{ "firstName": "Ash" }, { "lastName": "Ketchum" }],
    }).then((data) => {
      updateEmployeesForSwiping(data);
      updateSelectedJob(selectedJob);
      setJobBoardModalOpenProp(false);
    });
  };

  return (
    <View style={styles.jobBoardModal}>
      <View style={styles.container}>
        <AddJob
          addJobModalVisible={addJobModalVisible}
          setAddJobModalVisible={setAddJobModalVisible}
        />
        <Appbar.Header style={styles.outlinedAppBar}>
          <View
            style={{ display: "flex", width: "100%", flexDirection: "row" }}
          >
            <View style={styles.leftSection}></View>
            <View style={styles.middleSection}>
              <Text style={styles.titleText}>Job Board</Text>
            </View>
            <View style={styles.rightSection}>
              <TouchableOpacity onPress={() => setAddJobModalVisible(true)}>
                <Icon name="plus" size={40} />
              </TouchableOpacity>
            </View>
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
                <View
                  key={i}
                  style={{
                    backgroundColor: job.color,
                    height: 120,
                    width: "100%",
                  }}
                  onPress={() => selectJob(job)}
                >
                  <View
                    style={{ height: "100%", justifyContent: "space-around" }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                      }}
                    >
                      {job.title}
                    </Text>

                    <Text
                      style={{
                        fontSize: 14,
                      }}
                    >
                      {job.companyName.toUpperCase()}
                    </Text>
                  </View>
                </View>
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
  },
  container: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
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
  },
  scrollView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobBoard);
