/* eslint-disable no-undef */
import React from "react";
import { ScrollView } from "react-native";
// import { CommonActions } from "@react-navigation/native";
// import UpdateBottomTabNavHeight from "../../redux/actions/NavigationActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const HideBottomNavScrollView = (props) => {
  let offset = 0;
  let onScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - (offset || 0);

    if (dif < 0) {
      // props.navigation.dispatch(
      //   CommonActions.setParams({
      //     tabBarVisible: true,
      //   })
      // );
      // props.updateBottomTabNavHeight(40);
    } else {
      // props.navigation.dispatch(
      //   CommonActions.setParams({
      //     tabBarVisible: false,
      //   })
      // );
      // props.updateBottomTabNavHeight(40);
    }

    offset = currentOffset;
  };
  return (
    <ScrollView
      style={props.style}
      scrollEventThrottle="16"
      onScroll={(e) => onScroll(e)}
    >
      {props.children}
    </ScrollView>
  );
};

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       UpdateBottomTabNavHeight,
//     },
//     dispatch
//   );

// export default connect(mapDispatchToProps)(HideBottomNavScrollView);
export default HideBottomNavScrollView;
