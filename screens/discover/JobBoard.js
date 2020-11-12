import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const JobBoard = ({ navigation }) => {
  const [buttonColor, setButtonColor] = useState('black');

  const [activeButtons, setActiveButtons] = useState([]);

  const [typesOfJobs, setTypesOfJobs] = useState({
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
    if (activeButtons.includes(i)) {
      setActiveButtons(activeButtons.filter((item) => item != i));
    } else {
      setActiveButtons((activeButtons) => [...activeButtons, i]);
    }
    console.log(activeButtons);
  };

  const switchScreen = () => {
    navigation.navigate('Root');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          color="black"
          style={styles.headerButton}
          onPress={switchScreen}
          mode="text"
        >
          <Text>Done</Text>
        </Button>
      </View>
      <View style={styles.jobOptionsSection}>
        <ScrollView>
          <View style={styles.flexDirectionRow}>
            {typesOfJobs.jobs.map((item, i) => (
              <Button
                style={styles.jobButtons}
                key={i}
                onPress={() => onPress(i)}
                color={activeButtons.includes(i) ? buttonColor : 'white'}
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
  header: { flex: 1 },
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
