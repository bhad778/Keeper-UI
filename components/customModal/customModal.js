import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, View, Dimensions } from "react-native";
import JobBoard from "../../screens/employer/jobBoard/JobBoard";
import { connect } from "react-redux";
import { toggleJobBoardOpen } from "../../redux/actions/ToggleJobBoardOpenActions";
import { bindActionCreators } from "redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function CustomModal({ toggleJobBoardOpen, isJobBoardOpen }) {
  const [top] = useState(new Animated.Value(SCREEN_HEIGHT));

  useEffect(() => {
    if (isJobBoardOpen) {
      openModal();
      toggleJobBoardOpen(true);
    } else {
      closeModal();
      toggleJobBoardOpen(false);
    }
  }, [isJobBoardOpen]);

  const openModal = () => {
    Animated.spring(top, {
      toValue: 0,
    }).start();
  };

  const closeModal = () => {
    Animated.spring(top, {
      toValue: SCREEN_HEIGHT * 4,
      speed: 1,
    }).start(() => {});
  };

  return (
    <Animated.View
      style={{
        position: "absolute",
        backgroundColor: "gold",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        zIndex: 100,
        top: top,
        left: -15,
      }}
    >
      <View style={styles.body}>
        <JobBoard></JobBoard>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    zIndex: 100,
  },
});

const mapStateToProps = (state) => {
  const { isJobBoardOpen } = state;
  return { isJobBoardOpen };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleJobBoardOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
