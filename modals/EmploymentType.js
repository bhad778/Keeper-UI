import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
const EmploymentType = ({
  employmentTypeModalVisible,
  setEmploymentTypeModalVisible,
}) => {
  const goBack = () => {
    setEmploymentTypeModalVisible(false);
  };
  return (
    <Modal visible={employmentTypeModalVisible}>
      <View style={styles.header}>
        <Button color="black" onPress={goBack} uppercase={false}>
          <Text style={{ color: "black" }}>Cancel</Text>
        </Button>
        <Text style={{ fontSize: 30 }}>Employment</Text>
        <Button uppercase={false}>
          <Text style={{ color: "black" }}>Add</Text>
        </Button>
      </View>
      <View style={styles.buttonSection}>
        <Button
          onPress={() => console.log("hey")}
          dark={false}
          color="white"
          style={styles.buttons}
          mode="contained"
        >
          <Text>Full Time</Text>
        </Button>
        <Button
          style={styles.buttons}
          color="white"
          dark={false}
          mode="contained"
        >
          <Text>Part Time</Text>
        </Button>
        <Button
          style={styles.buttons}
          color="white"
          dark={false}
          mode="contained"
        >
          <Text>Contract</Text>
        </Button>
        <Button
          style={styles.buttons}
          color="white"
          dark={false}
          mode="contained"
        >
          <Text>Hourly</Text>
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    backgroundColor: "#add9da",
    marginBottom: 35,
  },
  buttonSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    borderRadius: 30,
    width: "45%",
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    justifyContent: "center",
  },
});
export default EmploymentType;
