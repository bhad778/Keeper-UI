import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";

const ResponsibilitiesModal = ({
  responsibilitiesModalVisible,
  setResponsibilitiesModalVisible,
}) => {
  return (
    <Modal visible={responsibilitiesModalVisible}>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => setResponsibilitiesModalVisible(false)}
        >
          <Text style={{ fontSize: 30 }}>cancel</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15 }}>Responsibilities</Text>
        <TouchableOpacity>
          <Text>save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}></View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: { flex: 1, backgroundColor: "red" },
});
export default ResponsibilitiesModal;
