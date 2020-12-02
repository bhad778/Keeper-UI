import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View, Image } from "react-native";
import Filters from "../../../modals/Filters";
import Icon from "react-native-vector-icons/Feather";
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersModal: false,
      cards: this.hotGirls,
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
    };
  }

  hotGirls = [
    {
      img:
        "https://www.rollingstone.com/wp-content/uploads/2011/03/britneyspears.jpg",
      name: "Britney",
    },
    {
      img:
        "https://cdn.bulbagarden.net/upload/thumb/f/fb/Misty_SM.png/150px-Misty_SM.png",
      name: "Misty",
    },
    {
      img:
        "https://i.pinimg.com/originals/ea/5c/07/ea5c0756f5c2980e8acecf61f52a61fd.jpg",
      name: "Mary Jane",
    },
    {
      img:
        "https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/38686/1522693188-9742-0876/url_large.png",
      name: "Wendy",
    },
    {
      img:
        "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest/top-crop/width/720/height/900?cb=20100423143631",
      name: "Padme",
    },
    {
      img:
        "https://i.pinimg.com/originals/6b/6a/7c/6b6a7c9f4a5174b9d7052444ae7d8da5.jpg",
      name: "Underworld",
    },
    {
      img:
        "https://i.pinimg.com/originals/c3/19/31/c3193181716088d176907ecf1f4d0ca8.jpg",
      name: "Kairi",
    },
    {
      img:
        "https://cdn.flickeringmyth.com/wp-content/uploads/2018/12/Rust-Creek-1-1-600x316.jpg",
      name: "Rust Creek",
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
  swipeRight = (goTo) => {
    this.props.navigation.navigate(goTo);
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };
  filtersModalOn = (visible) => {
    this.setState({ filtersModal: visible });
  };
  render() {
    return (
      <View style={styles.container}>
        <Filters
          filtersModal={this.state.filtersModal}
          filtersModalOn={this.filtersModalOn}
        />
        <View style={styles.headerContainer}>
          <View style={styles.discoverHeader}>
            <View style={styles.headerNewMatchesButtonContainer}>
              <Button mode="text" style={styles.newMatchButton} color="black">
                <Icon name="inbox" size={25} />
              </Button>
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Edge</Text>
            </View>
            <View style={styles.headerFilterButtonContainer}>
              <Button
                style={styles.filterButton}
                mode="text"
                color="black"
                onPress={() => this.filtersModalOn(true)}
              >
                <Icon name="edit-2" size={25} />
              </Button>
            </View>
          </View>
        </View>

        <View style={styles.swiper}>
          <Swiper
            ref={(swiper) => {
              this.swiper = swiper;
            }}
            onSwiped={() => this.onSwiped("general")}
            onSwipedLeft={() => this.onSwiped("left")}
            onSwipedRight={() => this.swipeRight("Matched")}
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
  headerContainer: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "13%",
    alignItems: "center",
  },
  discoverHeader: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "white",
  },
  swiper: { flex: 5 },
  headerNewMatchesButtonContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  newMatchButton: { alignItems: "flex-start" },
  headerTextContainer: {
    height: "50%",
    flex: 2,
    alignItems: "center",
  },
  headerFilterButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  filterButton: { alignItems: "flex-end" },

  headerText: {
    color: "black",
    fontSize: 25,
  },

  card: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    borderRadius: 20,
  },

  images: {
    flex: 1,
    borderRadius: 20,
  },
  profileName: {
    position: "relative",
    left: 5,
    margin: 10,
    color: "black",
    fontSize: 40,
  },
  chipsContainer: {
    position: "absolute",
    left: 8,
    bottom: 8,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
  },
  infoOne: { margin: 10 },
  infoTwo: { margin: 10 },
  infoThree: { margin: 10 },
});
