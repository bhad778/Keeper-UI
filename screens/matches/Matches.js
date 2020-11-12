import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

const Matches = ({ navigation }) => {
  const [matches] = useState([
    {
      img:
        'https://cdn.bulbagarden.net/upload/thumb/f/fb/Misty_SM.png/150px-Misty_SM.png',
      name: 'Misty',
    },
    {
      img:
        'https://www.rollingstone.com/wp-content/uploads/2011/03/britneyspears.jpg',
      name: 'Britney',
    },
    {
      img:
        'https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg',
      name: 'Mary Jane',
    },
    {
      img:
        'https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/38686/1522693188-9742-0876/url_large.png',
      name: 'Wendy',
    },
    {
      img:
        'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest/top-crop/width/720/height/900?cb=20100423143631',
      name: 'Padme',
    },
    {
      img:
        'https://i.pinimg.com/originals/6b/6a/7c/6b6a7c9f4a5174b9d7052444ae7d8da5.jpg',
      name: 'Underworld',
    },
    {
      img:
        'https://i.pinimg.com/originals/c3/19/31/c3193181716088d176907ecf1f4d0ca8.jpg',
      name: 'Kairi',
    },
    {
      img:
        'https://cdn.flickeringmyth.com/wp-content/uploads/2018/12/Rust-Creek-1-1-600x316.jpg',
      name: 'Rust Creek',
    },
  ]);

  const switchScreen = (img, name) => {
    navigation.navigate('Messages', {
      screen: 'Messages',
      pic: img,
      title: name,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.matchesSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.scrollViewHeader}>Messages</Text>
          {matches.map((item) => (
            <TouchableHighlight
              style={styles.matchButton}
              underlayColor="#D3D3D3"
              onPress={() => {
                switchScreen(item.img, item.name);
              }}
            >
              <View>
                <Avatar.Image
                  source={{ uri: item.img }}
                  style={styles.images}
                />
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  scrollViewHeader: { fontSize: 35 },
  matchesSection: { flex: 8, backgroundColor: 'white', alignItems: 'center' },
  matchButton: {
    justifyContent: 'center',
    height: 80,
    width: 350,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },

  images: { position: 'relative', top: 20 },
  name: {
    height: 40,
    width: 120,
    position: 'relative',
    left: 100,
    bottom: 20,
    fontSize: 20,
  },
});

export default Matches;
