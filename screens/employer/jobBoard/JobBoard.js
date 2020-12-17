import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import JobsService from '../../../services/JobsService';

const JobBoard = ({ navigation }) => {
  const [, setJobs] = useState();

  useEffect(() => {
    JobsService.getJobs().then((data) => {
      setJobs(data);
      console.log(data);
      console.log(data);
    });
  }, []);

  const [typesOfJobs] = useState({
    jobs: [
      'carpenter',
      'teacher',
      'stocks',
      'plumber',
      'sex-therapist',
      'bartender',
      'vote-counter',
      'grandMasterSmoker',
      'cheifffff',
    ],
  });

  const goToFutureEmployees = () => {
    navigation.navigate('RootEmployer', { message: false });
  };
  const goToAddJobScreen = () => {
    navigation.navigate('AddJob');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Job Board</Text>
      </View>
      <View style={styles.jobOptionsSection}>
        <ScrollView>
          <View style={styles.flexDirectionRow}>
            {typesOfJobs.jobs.map((item, i) => (
              <Button
                style={styles.jobButtons}
                key={i}
                onPress={() => goToFutureEmployees(i)}
                color={'white'}
                mode="contained"
              >
                <Text>{item}</Text>
              </Button>
            ))}
            <Button uppercase={false} color="black" onPress={goToAddJobScreen}>
              Add Job
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { fontSize: 20 },
  jobOptionsSection: { flex: 6 },
  flexDirectionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  jobButtons: { margin: 15 },

  headerButton: { position: 'relative', top: 30 },
});

export default JobBoard;
