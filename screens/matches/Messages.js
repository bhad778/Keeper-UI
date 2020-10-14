import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";
import { GiftedChat } from "react-native-gifted-chat";
const Messages = ({ route, navigation }) => {
  const { pic } = route.params;
  const onPress = () => {
    navigation.goBack();
  };
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "Henlo!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
        avatar: pic,
      },
    },
  ]);
  const handleSend = (newMessage = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          style={styles.backButton}
          icon={() => <Icon name="chevron-left" size={50} />}
          mode="text"
          onPress={onPress}
        ></Button>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: pic,
            }}
            style={styles.images}
          />
        </View>
      </View>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={(newMessage) => handleSend(newMessage)}
          user={{ _id: 1 }}
        />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#F5FFFA",
    borderBottomWidth: 5,
  },
  chatContainer: {
    flex: 8,
  },
  backButton: {
    height: 100,
    width: 100,
    position: "relative",
    right: 14,
    top: 1,
  },
  imageContainer: {
    height: 87.5,
    width: 87.5,
    position: "relative",
    right: 3,
    borderRadius: 87.5 / 2,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 10,
  },

  images: {
    position: "absolute",
    height: 75,
    width: 75,
    borderWidth: 5,
    borderRadius: 75 / 2,
    resizeMode: "contain",
  },
});