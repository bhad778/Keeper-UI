import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-paper";

const Matched = ({ navigation }) => {
  const onYesPress = async () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.matchedSection}>
        <Text style={styles.title}>You Matched!</Text>
        <View style={styles.matchAvatars}>
          <Avatar.Image
            size={100}
            source={{
              uri:
                "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
            }}
          />
          <Avatar.Image
            size={100}
            source={{
              uri:
                "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest/top-crop/width/720/height/900?cb=20100423143631",
            }}
          />
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button
          onPress={onYesPress}
          contentStyle={{ width: 200 }}
          color="white"
          dark={false}
          mode="contained"
          style={styles.yesButton}
        >
          Keep Swiping
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  matchedSection: {
    flex: 2,
    alignItems: "center",
  },
  buttonSection: { flex: 1 },
  title: { position: "relative", top: 250, fontSize: 40 },
  matchAvatars: {
    width: 350,
    position: "relative",
    top: 300,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  noButton: { margin: 20, borderRadius: 20 },
  yesButton: { margin: 20, borderRadius: 20 },
});

export default Matched;
