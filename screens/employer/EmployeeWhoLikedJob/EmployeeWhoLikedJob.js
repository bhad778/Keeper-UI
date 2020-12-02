import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
const EmployeeWhoLikedJob = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.peopleWhoLikedYou}>
        <ScrollView>
          <Image
            source={{
              uri:
                "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
            }}
          />
          <Image
            source={{
              uri:
                "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
            }}
          />
          <Image
            source={{
              uri:
                "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
            }}
          />
          <Image
            source={{
              uri:
                "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
            }}
          />
          <Image
            source={{
              uri:
                "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
            }}
          />
          <Image
            source={{
              uri:
                "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1 },
  peopleWhoLikedYou: { flex: 3 },
});
export default EmployeeWhoLikedJob;
