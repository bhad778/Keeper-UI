import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import Header from "../../components/header/Header";
import EmployeeService from "../../services/EmployeeService";

const Matches = ({ navigation }) => {
  const [matches, setMatches] = useState([]);

  // {
  //   img:
  //     "https://cdn.bulbagarden.net/upload/thumb/f/fb/Misty_SM.png/150px-Misty_SM.png",
  //   name: "Misty",
  // },
  // {
  //   img:
  //     "https://64.media.tumblr.com/20a9b95f236651f0c994135829c9cd56/ae4f93d74fb55319-8e/s500x750/0f6c4e450f0981ab0fe0d960dfea76e3dd4f29ca.png",
  //   name: "Britney",
  // },
  // {
  //   img:
  //     "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
  //   name: "Mary Jane",
  // },
  // {
  //   img:
  //     "https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/38686/1522693188-9742-0876/url_large.png",
  //   name: "Wendy",
  // },
  // {
  //   img:
  //     "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest/top-crop/width/720/height/900?cb=20100423143631",
  //   name: "Padme",
  // },
  // {
  //   img:
  //     "https://i.pinimg.com/originals/6b/6a/7c/6b6a7c9f4a5174b9d7052444ae7d8da5.jpg",
  //   name: "Underworld",
  // },
  // {
  //   img:
  //     "https://i.pinimg.com/originals/c3/19/31/c3193181716088d176907ecf1f4d0ca8.jpg",
  //   name: "Kairi",
  // },
  // {
  //   img:
  //     "https://cdn.flickeringmyth.com/wp-content/uploads/2018/12/Rust-Creek-1-1-600x316.jpg",
  //   name: "Rust Creek",
  // },

  useEffect(() => {
    EmployeeService.getEmployee({
      email: "employee@employee.com",
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
    <View style={styles.container}>
      <Header screenTitle="Matches" />
      <View style={styles.matchesSection}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
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
                  size={95}
                  source={{ uri: item.profilePic }}
                  style={styles.images}
                />
                <View style={styles.matchTextContainer}>
                  <View style={styles.notificationButtonContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Button
                      style={styles.notificationButton}
                      labelStyle={{ fontSize: 12 }}
                      mode="contained"
                      dark
                      color="#ff8365"
                      uppercase={false}
                    >
                      New Message
                    </Button>
                  </View>

                  <Text numberOfLines={1} style={styles.nameInfo}>
                    eeny meeny miny moe i choose kelly
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: "white",
    justifyContent: "center",
  },
  scrollViewHeaderTextContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "90%",
    height: "12%",
    marginBottom: 10,
  },
  scrollViewHeaderText: { fontSize: 50 },
  matchesSection: {
    flex: 8,
    backgroundColor: "white",
  },
  scrollView: { width: "100%" },

  matchButton: {
    height: 112,
    width: "90%",
    backgroundColor: "white",
  },
  matchTextContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    height: "100%",
    width: "72%",
    justifyContent: "center",
  },
  avatarImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  images: { marginRight: 20 },
  name: {
    fontSize: 20,
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
  nameInfo: { color: "#b1b1b1", fontSize: 18, width: "95%" },
});

export default Matches;
