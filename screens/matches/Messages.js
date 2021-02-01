import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import ChatService from "../../services/ChatService";
import Header from "../../components/header/Header";

// when you match with someone it hits the addConversation api call and creates the conversation, which makes a mongoDB ID automatically and that
// will be the conversationId that lives in each message object in the messages table. These conversationIds will also live on each user object
// so that they can be easily pulled for each user.
const Messages = ({ navigation, route }) => {
  const [messages, setMessages] = useState();
  const [connectionId, setConnectionId] = useState();
  const [webSocket, setWebSocket] = useState();

  const user = { _id: "asdf@asdf.com" };
  const { title } = route.params;

  useEffect(() => {
    if (!webSocket) {
      setWebSocket(
        new WebSocket(
          "wss://i4l2b5zpn9.execute-api.us-east-1.amazonaws.com/dev?conversationId=5feb5edaa13b6b1097df6957&email=asdf@asdf.com"
        )
      );
    }

    ChatService.getConversationMessages({
      // when you click on a conversation from the matches page, what the user clicked on
      // will have the conversationId and pass it in to here
      conversationId: "5feb5edaa13b6b1097df6957",
    }).then((data) => {
      // we have to manually put the messages in order
      data.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setMessages(data);
    });

    // doing this call just to get connectionId to test websockets, will probably
    // get this from user call in future
    ChatService.getConversation({
      conversationId: "5feb5edaa13b6b1097df6957",
    }).then((data) => {
      setConnectionId(data[0].participants[0].connectionId);
    });
  }, []);

  useEffect(() => {
    if (webSocket) {
      webSocket.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log("connected");
      };

      webSocket.onmessage = (event) => {
        // on receiving a message, add it to the list of messages
        const message = event.data;
        handleReceiveMessage(message);
      };

      webSocket.onclose = () => {
        console.log("disconnected");
        // automatically try to reconnect on connection loss
        //setWs(new WebSocket(URL));
      };
    }
  }, [webSocket]);

  const handleSendMessage = async (newMessage = {}) => {
    newMessage.conversationId = "5feb5edaa13b6b1097df6957";
    delete newMessage._id;
    webSocket.send(
      JSON.stringify({
        action: "onMessage",
        message: JSON.stringify(newMessage),
      })
    );
    // ChatService.wsSendMessage({
    //   connectionId: connectionId,
    //   message: newMessage,
    // });
    ChatService.addMessage(newMessage);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessage)
    );
  };

  const handleReceiveMessage = (newMessage) => {
    const messageObject = JSON.parse(newMessage);
    messageObject.user = "ssss@fffff.com";
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messageObject)
    );
    // just uncomment this when we actually setup messages working
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, JSON.parse(newMessage))
    // );
  };

  return (
    <View style={styles.container}>
      <Header
        screenTitle={title}
        navigation={navigation}
        type="outlined"
        withBackButton
      ></Header>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={(newMessage) => handleSendMessage(newMessage[0])}
          user={user}
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
