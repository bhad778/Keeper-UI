/* eslint-disable no-undef */
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import AppHeaderText from "../components/AppHeaderText";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ModalHeader = ({ addNewResponsibility,  postJob, saveText, closeModal, text, screenTitle, border, rightIcon, leftIcon }) => {
  const goBack = () => {
    closeModal(false);
    text && saveText(text);

  };

  return (
    
      <View style={styles.headerContents}>
        <View style={{  backgroundColor: "white",
    width: "100%",
    height: 78,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding:10,
    borderWidth:border,
    flexDirection: "row",}}>
          <View style={styles.leftSection}>
            <TouchableOpacity onPress={() => goBack()}>
              <Icon name={leftIcon} size={40} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.openJobBoardSection}
            onPress={() => setJobBoardModalOpen(true)}
          >
            <View style={styles.titleSection}>
              <AppHeaderText style={styles.titleText}>{screenTitle}</AppHeaderText>
            </View>

            <View style={styles.rightButtonSection}>
              <TouchableOpacity onPress={screenTitle === 'Add Job' ?  postJob :  addNewResponsibility }>
              <Icon name={rightIcon} size={40} />
              </TouchableOpacity>
            
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  headerContents: {
    width: '100%',
    justifyContent: "center",
    marginBottom:20,
    alignItems:'center'
  },
  
  leftSection: {
    height: "100%",
    width: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  openJobBoardSection: {
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleSection: {
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 6,
  },
  titleText: {
    fontSize: 20,
  },
  rightButtonSection: {
    height: "100%",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
});

const mapStateToProps = (state) => {
  const { selectedJob } = state;
  return { selectedJob };
};

export default connect(mapStateToProps)(ModalHeader);
