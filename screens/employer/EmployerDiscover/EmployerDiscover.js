import React, { Component } from "react";
import Swiper from "../../../components/swiper/Swiper";

import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";

import Filters from "../../../modals/Filters";
import EmployeeInfoModal from "../../../modals/EmployeeInfoModal";
import Icon from "react-native-vector-icons/Feather";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersModal: false,
      employeeInfoModal: false,
      cards: this.hotGirls,
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
    };
  }

  hotGirls = [
    {
      img:
        "https://hips.hearstapps.com/sev.h-cdn.co/assets/cm/15/09/54ed45cf7f0c9_-_1998-l-busacca-lgn.jpg?fill=320:426&resize=480:*",
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
  employeeInfoModalOn = (visible) => {
    this.setState({ employeeInfoModal: visible });
  };
  render() {
    return (
      <View style={styles.container}>
        <Filters
          filtersModal={this.state.filtersModal}
          filtersModalOn={this.filtersModalOn}
        />
        <EmployeeInfoModal
          employeeInfoModal={this.state.employeeInfoModal}
          employeeInfoModalOn={this.employeeInfoModalOn}
        />
        <View style={styles.headerContainer}>
          <View style={styles.peopleWhoLikeYou}>
            <Button mode="text" style={styles.newMatchButton} color="black">
              <Icon name="sliders" size={25} />
            </Button>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Pare</Text>
          </View>
          <View style={styles.headerFilterButtonContainer}>
            <Button
              style={styles.filterButton}
              mode="text"
              color="black"
              onPress={() => this.filtersModalOn(true)}
            >
              <Icon name="sliders" size={25} />
            </Button>
          </View>
        </View>
        <View style={styles.swiperContainer}>
          <Swiper />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    height: "12%",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  peopleWhoLikeYou: {
    position: "relative",
    bottom: 2,
    width: "32%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },

  headerTextContainer: {
    position: "relative",
    bottom: 7,
    width: "32%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerFilterButtonContainer: {
    position: "relative",
    bottom: 2,
    width: "32%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  filterButton: {},

  headerText: {
    color: "black",
    fontSize: 28,
  },
  card: {
    zIndex: 444,
    flex: 2,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    borderRadius: 20,
  },
  images: {
    flex: 1,
    height: 401,
    width: "100%",
    borderRadius: 20,
  },
});
