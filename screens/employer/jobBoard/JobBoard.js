import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, ScrollView } from "react-native";
import { Card, Title, FAB } from "react-native-paper";
import JobsService from "../../../services/JobsService";
import Header from "../../../components/header/Header";
const JobBoard = ({ navigation }) => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    JobsService.getJobs({
      lng: -84.73555943153565,
      lat: 33.96886433181504,
      distance: 100000,
    }).then((data) => {
      setJobs(data);
      console.log(jobs);
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
      <Header screenTitle="Job Board" />

      <View style={styles.jobOptionsSection}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.flexDirectionRow}>
            {!jobs && <ActivityIndicator size="large" />}
            {jobs &&
              jobs.map((item, i) => (
                <Card
                  key={i}
                  style={{
                    position: "relative",
                    backgroundColor: item.color,
                    borderRadius: 20,
                    borderColor: "black",
                    borderWidth: 1,
                    alignItems: "center",
                    margin: 15,
                    height: 200,
                    width: "40%",
                  }}
                  onPress={() => goToFutureEmployees(i)}
                >
                  <Card.Content>
                    <Title style={{ fontSize: 40, lineHeight: 50 }}>
                      {item.title}
                    </Title>
                  </Card.Content>
                </Card>
              ))}
            <FAB style={styles.fab} icon="plus" onPress={goToAddJobScreen} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },

  jobOptionsSection: { flex: 6, marginTop: 50 },
  flexDirectionRow: {
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    bottom: -800,
    backgroundColor: "black",
  },

  headerButton: { position: "relative", top: 30 },
});

export default JobBoard;
