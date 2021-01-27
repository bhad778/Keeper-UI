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
      console.log(data);
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
      <ScrollView contentContainerStyle={styles.scrollView}>
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
                height: "35%",
                margin: 5.6,
                width: "45%",
                // backgroundColor: jobs.length - 1 == i ? "black" : item.color,
              }}
              onPress={() => goToFutureEmployees(i)}
            >
              <Card.Content>
                <Title style={{ fontSize: 25, lineHeight: 30 }}>
                  {item.title}
                </Title>
              </Card.Content>
            </Card>
          ))}
        <View style={styles.fabContainer}>
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
  },
  scrollView: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  scrollViewInteriorContainer: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  fabContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    backgroundColor: "black",
  },

  headerButton: { position: "relative", top: 30 },
});

export default JobBoard;
