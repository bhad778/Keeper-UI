import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import AddJob from '../../modals/AddJob';

const JobBoard = ({ navigation }) => {
  const [activeButtons, setActiveButtons] = useState([]);

  const [addJobModal, setAddJobModal] = useState(false);
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
  const onPress = (i) => {
    setActiveButtons((activeButtons) => [...activeButtons, i]);
    navigation.navigate('Root', { message: false });
  };

  return (
    <View style={styles.container}>
      <AddJob addJobModal={addJobModal} setAddJobModal={setActiveButtons} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Job Board</Text>
      </View>
      <View style={styles.jobOptionsSection}>
        <ScrollView>
          <Button onPress={() => setAddJobModal(true)}>Add Job</Button>
          <View style={styles.flexDirectionRow}>
            {typesOfJobs.jobs.map((item, i) => (
              <Button
                style={styles.jobButtons}
                key={i}
                onPress={() => onPress(i)}
                color={'white'}
                mode="contained"
              >
                <Text>{item}</Text>
              </Button>
            ))}
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

  jobButtons: { margin: 10 },

  headerButton: { position: 'relative', top: 30 },
});

export default JobBoard;
