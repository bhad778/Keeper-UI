import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import JobsService from '../../../services/JobsService';

const JobBoard = ({ navigation }) => {
  const [jobs, setJobs] = useState([
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.6672413, 33.9675459],
      },
      _id: '5fd41ccf53b3e83cdc22b2ff',
      title: 'Daily Grind Barista',
      description:
        'Work at the window taking orders from drive in customers and making coffee',
      address: '3960 Mary Eliza Trace NW, Marietta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.6654436, 33.966947],
      },
      _id: '5fd41ca4d0f9e03cdc130cfe',
      title: 'Marietta Pizza Co. Line Cook',
      description: 'Cooking on the line to make pizzas',
      address: '3901 Mary Eliza Trace NW, Marietta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.66321669999999, 33.9650919],
      },
      _id: '5fd41c7746e9a83cdc3b3eed',
      title: 'Brusters Ice Cream Maker',
      description: 'Make ice cream and also run cashiers',
      address: '3795 Due W Rd NW, Marietta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.3587589, 33.7623174],
      },
      _id: '5fd41cf6ab06353cdc43aa7a',
      title: 'Beetle Cat Bartender',
      description: 'Night shift bartender for the basement bar',
      address: '299 North Highland Avenue Northeast, Atlanta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.3587589, 33.7623174],
      },
      _id: '5fdadad7a948340008dd5ffa',
      title: 'Beetle Cat Bartender',
      description: 'Night shift bartender for the basement bar',
      address: '299 North Highland Avenue Northeast, Atlanta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.3587589, 33.7623174],
      },
      _id: '5fdad1fd770d810009fc219e',
      title: 'Beetle Cat Bartender',
      description: 'Night shift bartender for the basement bar',
      address: '299 North Highland Avenue Northeast, Atlanta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.3587589, 33.7623174],
      },
      _id: '5fdad1b7b51bdb1a3d1745a6',
      title: 'Beetle Cat Bartender',
      description: 'Night shift bartender for the basement bar',
      address: '299 North Highland Avenue Northeast, Atlanta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.3587589, 33.7623174],
      },
      _id: '5fdad8259829ff1cc198ba79',
      title: 'Beetle Cat Bartender',
      description: 'Night shift bartender for the basement bar',
      address: '299 North Highland Avenue Northeast, Atlanta, GA',
      __v: 0,
    },
    {
      geoLocation: {
        type: 'Point',
        coordinates: [-84.3587589, 33.7623174],
      },
      _id: '5fdad2a6770d810009fc219f',
      title: 'Beetle Cat Bartender',
      description: 'Night shift bartender for the basement bar',
      address: '299 North Highland Avenue Northeast, Atlanta, GA',
      __v: 0,
    },
  ]);

  /*useEffect(() => {
    JobsService.getJobs().then((data) => {
      setJobs(data);
      console.log(data);
      console.log(data);
    });
  }, []);
  */

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
        <Button uppercase={false} color="black" onPress={goToAddJobScreen}>
          Add Job
        </Button>
      </View>
      <View style={styles.jobOptionsSection}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.flexDirectionRow}>
            {jobs.map((item, i) => (
              <Button
                contentStyle={{
                  height: 120,
                }}
                style={styles.jobButtons}
                key={i}
                onPress={() => goToFutureEmployees(i)}
                color="red"
                mode="text"
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

  jobButtons: {
    flexDirection: 'column',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    width: '30%',
  },
  buttonTextContainer: {},
  headerButton: { position: 'relative', top: 30 },
});

export default JobBoard;
