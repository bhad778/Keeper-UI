import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Avatar } from "react-native-paper";
import Header from "../../components/header/Header";
import EmployerService from "../../services/EmployerService";
import { connect } from "react-redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Matches = ({ navigation, selectedJob }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    EmployerService.getEmployer({
      email: "employer123@gmail.com",
    }).then((data) => {
      setMatches(data[0].matches);
    });
  }, []);

  const switchScreen = (img, name, connectionId) => {
    navigation.navigate("Messages", {
      pic: img,
      title: name,
      connectionId: connectionId,
    });
  };

  return (
    <View
      style={{
        backgroundColor: selectedJob.color,
      }}
    >
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <View style={styles.matchesPageContents}>
          <View style={styles.matchesScrollViewContainer}>
            <View style={styles.whiteMatchesContainer}>
              <View style={styles.scrollViewHeaderTextContainer}>
                <Text style={styles.scrollViewHeaderText}>Matches</Text>
              </View>

              {matches.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.matchButton}
                  underlayColor="#D3D3D3"
                  onPress={() => {
                    switchScreen(item.profilePic, item.name, item.connectionId);
                  }}
                >
                  <View style={styles.avatarImageContainer}>
                    <Avatar.Image
                      size={85}
                      source={{
                        uri:
                          "https://data.whicdn.com/images/83928957/original.jpg",
                      }}
                      style={styles.images}
                    />
                    <View style={styles.matchTextContainer}>
                      <View style={styles.notificationButtonContainer}>
                        <Text style={styles.name}>Seto Kaiba</Text>
                      </View>

                      <Text numberOfLines={1} style={styles.nameInfo}>
                        Your pathetic grandpas deck has no cards yugi
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewHeaderTextContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "90%",
    height: 85,
    marginBottom: 10,
  },
  scrollViewHeaderText: { fontSize: 40 },
  matchesPageContents: {
    height: SCREEN_HEIGHT - 204,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  matchesScrollViewContainer: {
    height: "95%",
    width: "100%",
    paddingRight: 15,
    paddingLeft: 15,
  },
  whiteMatchesContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 35,
  },
  matchButton: {
    height: 105,
    width: "90%",
    backgroundColor: "white",
  },
  matchTextContainer: {
    height: "100%",
    width: "68%",
  },
  avatarImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  images: { marginRight: 20 },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingTop: 22,
    paddingBottom: 3,
  },
  notificationButtonContainer: {
    flexDirection: "row",
    marginBottom: 5,
    width: "90%",
    justifyContent: "space-between",
  },
  notificationButton: {
    width: "50%",
    fontSize: 10,
    borderRadius: 20,
  },
  nameInfo: {
    fontWeight: "400",
    fontSize: 14,
    width: "95%",
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Matches);
