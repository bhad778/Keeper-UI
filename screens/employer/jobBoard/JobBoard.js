import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from "react-native";
import { Card, FAB } from "react-native-paper";
import JobsService from "../../../services/JobsService";
import Header from "../../../components/header/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateSelectedJob } from "../../../redux/actions/JobActions";

const JobBoard = ({ navigation, updateSelectedJob }) => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    JobsService.getJobs({
      lng: -84.73555943153565,
      lat: 33.96886433181504,
      distance: 100000,
    }).then((data) => {
      setJobs(data);
    });
  }, []);

  const selectJob = (selectedJob) => {
    updateSelectedJob(selectedJob);
    navigation.navigate("RootEmployer", { message: false });
  };
  const goToAddJobScreen = () => {
    navigation.navigate("AddJob");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{ width: "100%" }}>
          <Header type="noBorder" />
        </View>

        <View
          style={{
            justifyContent: "space-evenly",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text style={{ fontSize: 50, marginBottom: 20 }}>Job Board</Text>
          <Text style={{ fontSize: 20, marginBottom: 40 }}>
            Here is list of the jobs you have created. Tap on one of the jobs to
            start looking at potential employees and view job details.
          </Text>
        </View>

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

        <View
          style={{
            width: "100%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FAB style={styles.fab} icon="plus" onPress={goToAddJobScreen} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  scrollView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  fab: {
    backgroundColor: "black",
  },
  header: { width: 300 },
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
