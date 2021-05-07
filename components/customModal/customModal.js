import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, View, Dimensions } from "react-native";
import JobBoard from "../../screens/employer/jobBoard/JobBoard";
import { connect } from "react-redux";
import { toggleJobBoardOpen } from "../../redux/actions/ToggleJobBoardOpenActions";
import { bindActionCreators } from "redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function CustomModal({
  jobBoardModalOpen,
  setJobBoardModalOpen,
  toggleJobBoardOpen,
}) {
  const [top] = useState(new Animated.Value(SCREEN_HEIGHT));

  useEffect(() => {
    if (jobBoardModalOpen && top._value != 0) {
      openModal();
      toggleJobBoardOpen(true);
    } else {
      closeModal();
      toggleJobBoardOpen(false);
    }
  }, [jobBoardModalOpen]);

  const setJobBoardModalOpenProp = (isOpen) => {
    setJobBoardModalOpen(isOpen);
  };

  const openModal = () => {
    Animated.spring(top, {
      toValue: 0,
    }).start();
  };

  const closeModal = () => {
    Animated.spring(top, {
      toValue: SCREEN_HEIGHT,
    }).start();
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
      }}
    >
      <View style={styles.body}>
        <JobBoard
          setJobBoardModalOpenProp={setJobBoardModalOpenProp}
        ></JobBoard>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleJobBoardOpen,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(CustomModal);
