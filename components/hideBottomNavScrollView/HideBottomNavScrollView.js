/* eslint-disable no-undef */
import React, { useRef, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import { updateBottomNavBarHeight } from "../../redux/actions/NavigationActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;

let offset = 0;
let currentNavBarHeight = 80;

const HideBottomNavScrollView = (props) => {
  const resumeScrollViewRef = useRef(null);
  let isBottomTabNavListeningToScroll = true;

  const scrollResumeToTop = () => {
    resumeScrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  useEffect(() => {
    isBottomTabNavListeningToScroll = false;
    scrollResumeToTop();
  }, [props.currentEmployee]);

  let onScrollBeginDrag = (event) => {
    offset = event.nativeEvent.contentOffset.y;
  };

  // basics: if user scrolls down shrink navbar, but dont let it go below 0
  // if user scrolls up, navbar grows but doesnt let it get above 80
  let onScroll = (event) => {
    let currentOffset = event.nativeEvent.contentOffset.y;

    if (isBottomTabNavListeningToScroll) {
      if (currentOffset != -456) {
        if (currentOffset < 0) {
          currentOffset = 0;
        }
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
      }
    }
    offset = currentOffset;
  };

  // at the letting go of the drag, run for loop to set height of nav bar
  // one at a time to look like its sliding up and down vs dissapearing and reappearing at full width
  let onScrollEndDrag = () => {
    if (currentNavBarHeight > 40) {
      currentNavBarHeight = 80;
      props.updateBottomNavBarHeight(currentNavBarHeight);
    } else {
      currentNavBarHeight = 0;
      props.updateBottomNavBarHeight(currentNavBarHeight);
    }
  };

  let onMomentumScrollEnd = () => {
    isBottomTabNavListeningToScroll = true;
  };

  return (
    <ScrollView
      style={props.style}
      scrollEventThrottle="16"
      showsVerticalScrollIndicator={false}
      onScrollBeginDrag={(e) => onScrollBeginDrag(e)}
      onScroll={(e) => onScroll(e)}
      onScrollEndDrag={() => onScrollEndDrag()}
      onMomentumScrollEnd={(e) => onMomentumScrollEnd(e)}
      ref={resumeScrollViewRef}
      // scrollEnabled={!props.isJobBoardOpen}
    >
      {props.children}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const { isJobBoardOpen } = state;
  return { isJobBoardOpen };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateBottomNavBarHeight,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HideBottomNavScrollView);
