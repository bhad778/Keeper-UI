import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Card, Appbar } from "react-native-paper";
import JobsService from "../../../services/JobsService";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateSelectedJob } from "../../../redux/actions/JobActions";
import Icon from "react-native-vector-icons/Feather";
import AddJob from "../addJob/AddJob";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const JobBoard = ({
  updateSelectedJob,
  jobBoardModalOpen,
  setJobBoardModalOpen,
}) => {
  const [jobs, setJobs] = useState();
  const [addJobModalVisible, setAddJobModalVisible] = useState(false);

  useEffect(() => {
    JobsService.getEmployersJobs({
      email: "employer123@gmail.com",
    }).then((data) => {
      setJobs(data);
    });
  }, []);

  const selectJob = (selectedJob) => {
    setJobBoardModalOpen(false);
    updateSelectedJob(selectedJob);
  };

  return (
    <Modal
      animationType="slide"
      visible={jobBoardModalOpen}
      style={styles.jobBoardModal}
    >
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
            {!jobs && <ActivityIndicator size="large" />}

            {jobs &&
              jobs.map((job, i) => (
                <Card
                  key={i}
                  style={{
                    borderRadius: 15,
                    backgroundColor: job.color,
                    height: 145,
                    margin: 6,
                    width: "45%",
                  }}
                  onPress={() => selectJob(job)}
                >
                  <Card.Content
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
                  </Card.Content>
                </Card>
              ))}
            {/* if theres an odd number of jobs the last job needs to be left aligned */}
            {jobs && !jobs.length % 2 == 0 && (
              <Card
                style={{
                  borderRadius: 15,
                  backgroundColor: "transparant",
                  color: "transparant",
                  height: 145,
                  margin: 6,
                  width: "45%",
                }}
              ></Card>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  jobBoardModal: {
    position: "absolute",
    left: 1000,
    top: 1000,
  },
  container: {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
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
    borderBottomWidth: 1,
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
  const { selectedJob } = state;
  return { selectedJob };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateSelectedJob,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JobBoard);
