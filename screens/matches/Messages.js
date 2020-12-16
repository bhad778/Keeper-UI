import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { GiftedChat } from "react-native-gifted-chat";
import { Avatar } from "react-native-paper";

const Messages = ({ route, navigation }) => {
  const { pic, title } = route.params;
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
        avatar: " ",
      },
    },
  ]);
  const handleSend = (newMessage = []) => {
    setMessages(GiftedChat.append(messages, newMessage));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <Icon color="#808080" name="chevron-left" size={30} />
        </TouchableOpacity>
        <View style={styles.avatarImage}>
          <Avatar.Image
            size={40}
            source={{
              uri: pic,
            }}
          />
        </View>
        <View>
          <Text style={styles.titleText}>{title}</Text>
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
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#F0F0F0",
  },
  chatContainer: {
    flex: 9,
  },

  avatarImage: { width: "14%" },
  backButton: { marginLeft: 10, marginRight: 10 },
});
