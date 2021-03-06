/* eslint-disable no-undef */
import React from "react";
import { ScrollView, Dimensions } from "react-native";
// import { CommonActions } from "@react-navigation/native";
import { updateBottomNavBarHeight } from "../../redux/actions/NavigationActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const HideBottomNavScrollView = (props) => {
  let offset = 0;
  let currentNavBarHeight = 80;

  let onScrollBeginDrag = (event) => {
    offset = event.nativeEvent.contentOffset.y;
  };

  // basics: if user scrolls down shrink navbar, but dont let it go below 0
  // if user scrolls up, navbar grows but doesnt let it get above 80
  let onScroll = (event) => {
    let currentOffset = event.nativeEvent.contentOffset.y;
    let height = event.nativeEvent.contentSize.height;
    let dif = 0;

    let isScrollingUp = () => currentOffset - offset < 0;

    // if currentNavBarHeight is 0 and user is still scrolling down dont do anything
    if (currentNavBarHeight == 0 && !isScrollingUp()) {
      // not doing anything
    }
    // if currentNavBarHeight is 80 and user is scrolling up dont do anything
    else if (currentNavBarHeight == 80 && isScrollingUp()) {
      // not doing anything
    } // if scrolling up and we hit the top, dont do anything
    else if (offset == 0 && isScrollingUp()) {
      // not doing anything
    } else if (SCREEN_HEIGHT + currentOffset >= height) {
      // not doing anything
    } else {
      dif = currentOffset - offset;
      currentNavBarHeight = currentNavBarHeight - dif;
      if (currentNavBarHeight > 80) {
        currentNavBarHeight = 80;
      }
      if (currentNavBarHeight < 0) {
        currentNavBarHeight = 0;
      }
    }

    if (dif < 0) {
      props.updateBottomNavBarHeight(currentNavBarHeight);
    } else {
      if (dif) {
        props.updateBottomNavBarHeight(currentNavBarHeight);
      }
    }

    // dont let it get below 0
    if (currentNavBarHeight <= 0) {
      currentNavBarHeight = 0;
      offset = currentOffset;
    }

    //dont let it get above 80
    if (currentNavBarHeight >= 80) {
      currentNavBarHeight = 80;
    }

    // at the end of every run, set offset to the global variable,
    // so next run we get the dif based on what the last runs y offset was
    if (currentOffset < 0) {
      currentOffset = 0;
    }
    // if (SCREEN_HEIGHT + currentOffset >= height) {
    //   currentOffset = SCREEN_HEIGHT + currentOffset;
    // }
    offset = currentOffset;
  };

  // at the letting go of the drag, run for loop to set height of nav bar
  // one at a time to look like its sliding up and down vs dissapearing and reappearing at full width
  let onScrollEndDrag = () => {
    if (currentNavBarHeight > 40) {
      for (i = currentNavBarHeight; i < 80; i += 1) {
        props.updateBottomNavBarHeight(i);
      }
      currentNavBarHeight = 80;
    } else {
      for (i = currentNavBarHeight; i > 0; i -= 1) {
        props.updateBottomNavBarHeight(i);
      }
      currentNavBarHeight = 0;
    }
  };

  return (
    <ScrollView
      style={props.style}
      scrollEventThrottle="16"
      onScrollBeginDrag={(e) => onScrollBeginDrag(e)}
      onScroll={(e) => onScroll(e)}
      onScrollEndDrag={() => onScrollEndDrag()}
    >
      {props.children}
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateBottomNavBarHeight,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(HideBottomNavScrollView);
