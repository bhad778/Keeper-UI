import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.hotGirls,
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
    };
  }
  hotGirls = [
    {
      img:
        'https://www.rollingstone.com/wp-content/uploads/2011/03/britneyspears.jpg',
      name: 'Britney',
    },
    {
      img:
        'https://cdn.bulbagarden.net/upload/thumb/f/fb/Misty_SM.png/150px-Misty_SM.png',
      name: 'Misty',
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
  ];
  renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Image style={styles.images} source={{ uri: card.img }} />
        <View style={styles.chipsContainer}>
          <Text style={styles.profileName}>{card.name}</Text>
          <Text style={styles.infoOne}>
            Somteimes I think about hoofing, but then again I could just
            doof...or poof.
          </Text>
          <Text style={styles.infoTwo}>I said "hey"...no response.</Text>
          <Text style={styles.infoThree}>
            I just want you to sit on my lap, not asking for much.
          </Text>
        </View>
      </View>
    );
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.discoverHeader}>
          <Icon style={styles.inbox} name="inbox" size={20} color="black" />
          <Text style={styles.discoverText}>Edge</Text>
        </View>
        <View style={styles.swiper}>
          <Swiper
            ref={(swiper) => {
              this.swiper = swiper;
            }}
            onSwiped={() => this.onSwiped('general')}
            onSwipedLeft={() => this.onSwiped('left')}
            onSwipedRight={() => this.onSwiped('right')}
            onTapCard={this.swipeLeft}
            cards={this.state.cards}
            cardIndex={this.state.cardIndex}
            cardVerticalMargin={80}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={3}
            stackSeparation={0}
            backgroundColor="white"
            overlayLabels={{
              left: {
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          ></Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  discoverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    zIndex: 1,
    position: 'absolute',
  },
  swiper: { flex: 5 },
  inbox: {
    position: 'relative',
    left: 30,
    top: 45,
  },
  discoverText: {
    position: 'relative',
    color: 'black',
    left: 155,
    top: 40,
    fontSize: 25,
  },

  card: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  cardScrollView: {},
  images: {
    flex: 1,
    borderRadius: 20,
  },
  profileName: {
    position: 'relative',
    left: 5,
    margin: 10,
    color: 'black',
    fontSize: 40,
  },
  chipsContainer: {
    bottom: 10,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: 10,
    width: 350,
  },
  infoOne: { margin: 10 },
  infoTwo: { margin: 10 },
  infoThree: { margin: 10 },
});
