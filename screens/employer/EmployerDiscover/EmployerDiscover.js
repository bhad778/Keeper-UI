import React, { Component } from "react";
// import Swiper from "../../../components/swiper/Swiper";

import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

import Filters from "../../../modals/Filters";
import EmployeeInfoModal from "../../../modals/EmployeeInfoModal";
import Resume from "../../employee/resume/Resume";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersModal: false,
      jobBoardModalOpen: false,
      employeeInfoModal: false,
      cards: this.hotGirls,
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
      isLoading: false,
      slideUpValue: new Animated.Value(0),
      wholeSwiperFadeAnim: new Animated.Value(1),
      xIconFadeAnim: new Animated.Value(0),
      xIconScaleXValue: new Animated.Value(0.5),
      xIconScaleYValue: new Animated.Value(0.5),
      xIconTranslateYValue: new Animated.Value(0),
      wholeSwiperTranslateY: new Animated.Value(0),
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

  runSlideUpAnimation = () => {
    Animated.timing(this.state.slideUpValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  componentDidMount() {
    this.runSlideUpAnimation();
  }

  renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Image style={styles.images} source={{ uri: card.img }} />
      </View>
    );
  };

  scrollResumeToTop = () => {
    this.resumeScrollViewRef.scrollTo({ x: 0, y: 0, animated: true });
  };

  toggleJobBoardModal = () => {
    this.setState({ jobBoardModalOpen: !this.state.jobBoardModalOpen });
  };
  filtersModalOn = (visible) => {
    this.setState({ filtersModal: visible });
  };
  pressLikeButton = () => {
    this.setState({ isLoading: true }, () => {
      setTimeout(() => {
        this.setState({ isLoading: false });
        this.runSlideUpAnimation();
      }, 500);
    });
  };
  pressDislikeButton = () => {
    Animated.parallel([
      // swiper fades out
      Animated.timing(this.state.wholeSwiperFadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        // instantly after fade send swiper down below screen so it can slide back up later
        Animated.timing(this.state.wholeSwiperTranslateY, {
          toValue: 1,
          duration: 1,
          useNativeDriver: true,
        }).start(() => {
          // instantly fade back in for slide up later
          Animated.timing(this.state.wholeSwiperFadeAnim, {
            toValue: 1,
            duration: 1,
            useNativeDriver: true,
          }).start();
        });
        this.scrollResumeToTop();
      }),

      // X icon fade in
      Animated.timing(this.state.xIconFadeAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start(),

      // X icon grow width
      Animated.timing(this.state.xIconScaleXValue, {
        toValue: 2,
        duration: 350,
        useNativeDriver: true,
      }).start(),

      // X icon grow height
      Animated.timing(this.state.xIconScaleYValue, {
        toValue: 2,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {}),

      // X icon slide up
      Animated.timing(this.state.xIconTranslateYValue, {
        toValue: -125,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        Animated.parallel([
          // slide swiper back up
          Animated.timing(this.state.wholeSwiperTranslateY, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }).start(),

          //X icon height shrink
          Animated.timing(this.state.xIconFadeAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }).start(() => {
            // revert y value for next swipe
            Animated.timing(this.state.xIconTranslateYValue, {
              toValue: 0,
              duration: 1,
              useNativeDriver: true,
            }).start();
            // revert width for next swipe
            Animated.timing(this.state.xIconScaleXValue, {
              toValue: 0.5,
              duration: 1,
              useNativeDriver: true,
            }).start(),
              // revert height for next swipe
              Animated.timing(this.state.xIconScaleYValue, {
                toValue: 0.5,
                duration: 1,
                useNativeDriver: true,
              }).start(() => {});
          }),
        ]).start(() => {});
      }),
    ]).start(() => {});
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
        {/* <View
          style={{
            height: 100,
            width: 100,
            position: "absolute",
            zIndex: 999999999,
            // top: 0,
            // left: 20,
          }}
        >
          <TouchableOpacity onPress={this.pressDislikeButton}>
            <Image
              // style={styles.skillCircleImage}
              style={styles.dislikeButton}
              source={{
                uri:
                  "https://rileymann.com/wp-content/uploads/2021/02/keeper-dislike.png",
              }}
            ></Image>
          </TouchableOpacity>
        </View> */}
        <Animated.Image
          source={{
            uri:
              "https://rileymann.com/wp-content/uploads/2021/03/keeper_logo_black.png",
          }}
          style={[
            styles.xIcon,
            {
              opacity: this.state.xIconFadeAnim, // Bind opacity to animated value
              transform: [
                { scaleX: this.state.xIconScaleXValue },
                { scaleY: this.state.xIconScaleYValue },
                {
                  translateY: this.state.xIconTranslateYValue,
                },
              ],
            },
          ]}
        ></Animated.Image>
        <View style={styles.swiperContainer}>
          {this.state.isLoading && <ActivityIndicator size="large" />}
          {!this.state.isLoading && (
            <Animated.View
              style={[
                styles.resumeContainer,
                {
                  opacity: this.state.wholeSwiperFadeAnim,
                  transform: [
                    {
                      translateY: this.state.wholeSwiperTranslateY.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, SCREEN_HEIGHT],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Resume
                navigation={this.props.navigation}
                pressDislikeButton={this.pressDislikeButton}
                resumeScrollViewRef={(el) => (this.resumeScrollViewRef = el)}
              />
            </Animated.View>
          )}
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
  resumeContainer: {},
  xIcon: {
    width: 30,
    height: 26,
    position: "absolute",
    left: SCREEN_WIDTH / 2 - 15,
    top: SCREEN_HEIGHT / 2 - 13,
    zIndex: 1,
  },
  headerContainer: {
    height: "12%",
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
