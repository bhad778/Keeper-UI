import React from "react";
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
import { connect } from "react-redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Matches = ({ navigation, selectedJob, matches }) => {
  const switchScreen = (matchData) => {
    navigation.navigate("Messages", {
      matchData,
    });
  };

  return (
    <View
      style={{
        backgroundColor: selectedJob.color,
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <View style={styles.matchesPageContents}>
          <View style={styles.whiteMatchesContainer}>
            <View style={styles.scrollViewHeaderTextContainer}>
              <Text style={styles.scrollViewHeaderText}>Matches</Text>
            </View>

            <View style={styles.matchesContainer}>
              {matches.map((matchData, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.matchButton}
                  underlayColor="#D3D3D3"
                  onPress={() => {
                    switchScreen(matchData);
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
                        <Text style={styles.name}>{matchData.firstName}</Text>
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
  matchesPageContents: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 20,
    flex: 1,
    paddingBottom: 100,
  },
  scrollViewHeaderTextContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "90%",
    height: 85,
    marginBottom: 10,
  },
  scrollViewHeaderText: { fontSize: 40 },
  matchesContainer: {
    paddingBottom: 10,
  },
  matchButton: {
    height: 90,
    marginTop: 5,
    marginBottom: 5,
    width: "90%",
    backgroundColor: "white",
  },
  matchTextContainer: {
    height: "100%",
    width: "68%",
  },
  whiteMatchesContainer: {
    width: "100%",
    minHeight: SCREEN_HEIGHT - 230,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 35,
    paddingLeft: 20,
    overflow: "hidden",
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
  const { selectedJob, matches } = state;
  return { selectedJob, matches };
};

export default connect(mapStateToProps)(Matches);
