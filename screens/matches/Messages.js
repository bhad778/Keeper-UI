import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { GiftedChat } from 'react-native-gifted-chat';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User',
        avatar: ' ',
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

        <View style={styles.imageContainer}>
          <Avatar.Image
            size={40}
            source={{
              uri: pic,
            }}
            style={styles.images}
          />
        </View>
        <Text style={styles.titleText}>{title}</Text>
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
    backgroundColor: 'white',
  },
  titleText: { position: 'relative', top: 16, right: 65, fontSize: 20 },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  chatContainer: {
    flex: 9,
  },
  backButton: {
    height: 100,
    width: 100,
    position: 'relative',
    left: 10,
    top: 50,
  },
  imageContainer: {
    height: 43.75,
    width: 43.75,
    position: 'relative',
    right: 65,
    top: 15,
    borderRadius: 43.75 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 10,
  },

  images: {},
});
