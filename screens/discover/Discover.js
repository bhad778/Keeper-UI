import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
export default class Exemple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.hotGirls,
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
    };
  }
  hotGirls = [
    {
      img:
        "https://cdn.bulbagarden.net/upload/thumb/f/fb/Misty_SM.png/150px-Misty_SM.png",
    },
    {
      img:
        "https://www.rollingstone.com/wp-content/uploads/2011/03/britneyspears.jpg",
    },
    {
      img:
        "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
    },
    {
      img:
        "https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/38686/1522693188-9742-0876/url_large.png",
    },
    {
      img:
        "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest/top-crop/width/720/height/900?cb=20100423143631",
    },
    {
      img:
        "https://i.pinimg.com/originals/6b/6a/7c/6b6a7c9f4a5174b9d7052444ae7d8da5.jpg",
    },
    {
      img:
        "https://i.pinimg.com/originals/c3/19/31/c3193181716088d176907ecf1f4d0ca8.jpg",
    },
    {
      img:
        "https://cdn.flickeringmyth.com/wp-content/uploads/2018/12/Rust-Creek-1-1-600x316.jpg",
    },
  ];
  renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Image style={styles.images} source={{ uri: card.img }} />
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
          <Icon style={styles.inbox} name="inbox" size={30} color="black" />
          <Text style={styles.discoverText}>Job Finder</Text>
        </View>
        <View style={styles.swiper}>
          <Swiper

            ref={(swiper) => {
              this.swiper = swiper;
            }}
            onSwiped={() => this.onSwiped("general")}
            onSwipedLeft={() => this.onSwiped("left")}
            onSwipedRight={() => this.onSwiped("right")}
            onTapCard={this.swipeLeft}
            cards={this.state.cards}
            cardIndex={this.state.cardIndex}
            cardVerticalMargin={80}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={3}
            stackSeparation={0}
            backgroundColor='#003f5c'
            overlayLabels={{

              left: {
                title: "NOPE",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "black",
                    color: "white",
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: "LIKE",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "black",
                    color: "white",
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
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

    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    zIndex: 1,
    position: "absolute",
  },
  swiper: { flex: 5 },
  inbox: {
    position: 'relative',
    left: 15,
    top: 29
  },
  discoverText: {
    position: 'relative',
    left: 70,
    top: 25,
    fontSize: 40,
  },

  card: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20
  },
  images: {
    flex: 1,

  },


});