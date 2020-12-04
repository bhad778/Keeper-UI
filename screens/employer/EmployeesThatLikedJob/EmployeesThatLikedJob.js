import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";
import ProfileView from "../../../modals/ProfileView";
const EmployeesThatLikedJob = ({ navigation }) => {
  const [profileViewModalVisible, setProfileViewModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [peopleWhoLikedJob] = useState({
    people: [
      "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
      "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
      "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
      "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
      "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
      "https://www.niagarafallsreporter.com/Stories/2014/DEC09/Images/Obese.jpg",
    ],
  });
  const onPress = () => {
    navigation.goBack();
  };
  const bringUpEmployeeProfile = (i) => {
    setImages((images) => [...images, i]);
    setProfileViewModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <ProfileView
        profileViewModalVisible={profileViewModalVisible}
        setProfileViewModalVisible={setProfileViewModalVisible}
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <Icon color="#808080" name="chevron-left" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.peopleWhoLikedYou}>
          <View style={styles.imagesContainer}>
            {peopleWhoLikedJob.people.map((item, i) => (
              <TouchableOpacity onPress={() => bringUpEmployeeProfile(i)}>
                <Image style={styles.images} source={{ uri: item }} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, justifyContent: "center" },
  scrollViewContainer: { flex: 5 },
  images: { height: 100, width: 100, margin: 10, borderRadius: 20 },
  imagesContainer: { justifyContent: "center" },
});
export default EmployeesThatLikedJob;
