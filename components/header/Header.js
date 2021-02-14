/* eslint-disable no-undef */
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";

const Header = ({
  screenTitle,
  children,
  navigation,
  // type,
  withBackButton,
  withEditButton,
  selectedJob,
}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header
      // style={
      //   type === "outlined"
      //     ? styles.outlinedAppBar
      //     : type === "noBorder"
      //     ? styles.noBorderAppBar
      //     : styles.filledAppBar
      // }
      style={{ backgroundColor: selectedJob.color }}
    >
      <View style={styles.leftSection}>
        <Image
          source={{
            uri:
              "https://rileymann.com/wp-content/uploads/2020/12/pare_logo.png",
          }}
          style={{ width: 25, height: 39 }}
        />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.titleText}>{screenTitle}</Text>
      </View>
      {!children && (
        <View style={styles.rightSection}>
          {withBackButton && (
            <TouchableOpacity onPress={goBack}>
              <Icon name="arrow-back" size={40} />
            </TouchableOpacity>
          )}
          {withEditButton && (
            <TouchableOpacity onPress={goBack}>
              <Icon name="create" size={40} />
            </TouchableOpacity>
          )}
        </View>
      )}
      {children && (
        <View style={styles.rightHeaderIconContainer}>{children}</View>
      )}
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  filledAppBar: {
    backgroundColor: "white",
    elevation: 0,
    height: 80,
    width: "100%",
  },
  outlinedAppBar: {
    backgroundColor: "white",
    elevation: 0,
    borderBottomWidth: 1,
    height: 80,
    width: "100%",
  },
  noBorderAppBar: {
    backgroundColor: "white",
    elevation: 0,
    height: 80,
    width: "100%",
  },

  leftSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middleSection: {
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
  },
  rightHeaderIconContainer: {
    paddingRight: 10,
  },
  logoButton: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    overflow: "visible",
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(Header);
