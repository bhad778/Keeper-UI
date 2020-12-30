import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { Avatar } from "react-native-paper";
import ChatService from "../../services/ChatService";

const Messages = ({ route, navigation }) => {
  const { pic, title } = route.params;
  const onPress = () => {
    navigation.goBack();
  };
  const [messages, setMessages] = useState();

  useEffect(() => {
    ChatService.getConversationMessages({
      conversationId: "5feb67c795a11711d901e214",
    }).then((data) => {
      data.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setMessages(data);
    });
  }, []);

  const handleSend = (newMessage = []) => {
    newMessage[0].conversationId = "5feb67c795a11711d901e214";
    delete newMessage[0]._id;
    ChatService.addMessage({
      text: "Yo you here yet?",
      createdAt: "2020-12-30T03:54:34.828Z",
      conversationId: "5feb67c795a11711d901e214",
      user: { _id: "ssss@fffff.com" },
    });
    setMessages(GiftedChat.append(messages, newMessage));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <FontAwesome color="#808080" size={30} />
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
          user={{ _id: "ssss@fffff.com" }}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  left: {
                    color: "black",
                    fontWeight: "600",
                    display: "flex",
                    marginLeft: 6,
                    marginRight: 6,
                  },
                  right: {
                    color: "white",
                    fontWeight: "600",
                    display: "flex",
                    marginLeft: 6,
                    marginRight: 6,
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: "#add9d9",
                    left: -40,
                  },
                  right: {
                    backgroundColor: "#016568",
                  },
                }}
              />
            );
          }}
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
