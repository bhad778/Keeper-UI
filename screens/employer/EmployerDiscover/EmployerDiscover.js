import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View, Image } from "react-native";
import Filters from "../../../modals/Filters";
import { FontAwesome } from "@expo/vector-icons";

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
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc1",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc2",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc3",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc4",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc5",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc6",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc7",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc8",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png",
      name: "npc10",
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
              <Button
                mode="text"
                style={styles.newMatchButton}
                onPress={() => {
                  this.props.navigation.navigate("EmployeesThatLikedJob");
                }}
                color="black"
              >
                <FontAwesome name="glass" size={25} />
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
                <FontAwesome size={25} />
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
