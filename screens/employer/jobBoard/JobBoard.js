import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";
import JobsService from "../../../services/JobsService";

const JobBoard = ({ navigation }) => {
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

  const goToFutureEmployees = () => {
    navigation.navigate("RootEmployer", { message: false });
  };
  const goToAddJobScreen = () => {
    navigation.navigate("AddJob");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Job Board</Text>
        <Button uppercase={false} color="black" onPress={goToAddJobScreen}>
          Add Job
        </Button>
      </View>
      <View style={styles.jobOptionsSection}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.flexDirectionRow}>
            {!jobs && <ActivityIndicator size="large" />}
            {jobs &&
              jobs.map((item, i) => (
                <Button
                  contentStyle={{
                    height: 120,
                  }}
                  style={styles.jobButtons}
                  key={i}
                  onPress={() => goToFutureEmployees(i)}
                  mode="contained"
                  color={item.color}
                >
                  <View style={styles.buttonTextContainer}>
                    <Text style={styles.headerText}>{item.title}</Text>
                  </View>
                </Button>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: { fontSize: 20 },
  jobOptionsSection: { flex: 6 },
  flexDirectionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  jobButtons: {
    flexDirection: "column",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
    width: "30%",
  },
  buttonTextContainer: {},
  headerButton: { position: "relative", top: 30 },
});

export default JobBoard;
