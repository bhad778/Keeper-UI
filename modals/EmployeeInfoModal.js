import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import ModalButtons from "../components/ModalButtons";

const EmployeeInfoModal = ({ employeeInfoModal, employeeInfoModalOn }) => {
  return (
    <Modal animationType="slide" visible={employeeInfoModal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            mode="text"
            color="black"
            onPress={() => employeeInfoModalOn(false)}
          >
            Done
          </Button>
        </View>
        <View style={styles.modalSection}>
          <ScrollView>
            <View style={styles.chipsContainer}>
              <Text style={styles.profileName}>Hello</Text>
              <Text style={styles.info}>
                I'm just a really sweet girl next door type. Dont worry about
                taking me out somplace really really fancy, my daddy is poor
              </Text>
              <Text style={styles.info}>
                I love talking about how the 90s were the last great decade and
                how everything sucks now
              </Text>
              <Text style={styles.info}>
                I love sitting on my boyfriends lap for hours on end
              </Text>
              <Text style={styles.info}>I am the Omega and the Alpha</Text>
            </View>
            <View style={styles.chipsContainer}>
              <Text style={styles.profileName}>Hello</Text>
              <Text style={styles.info}>
                I'm just a really sweet girl next door type. Dont worry about
                taking me out somplace really really fancy, my daddy is poor
              </Text>
              <Text style={styles.info}>
                I love talking about how the 90s were the last great decade and
                how everything sucks now
              </Text>
              <Text style={styles.info}>
                I love sitting on my boyfriends lap for hours on end
              </Text>
              <Text style={styles.info}>I am the Omega and the Alpha</Text>
            </View>
            <View style={styles.chipsContainer}>
              <Text style={styles.profileName}>Hello</Text>
              <Text style={styles.info}>
                I'm just a really sweet girl next door type. Dont worry about
                taking me out somplace really really fancy, my daddy is poor
              </Text>
              <Text style={styles.info}>
                I love talking about how the 90s were the last great decade and
                how everything sucks now
              </Text>
              <Text style={styles.info}>
                I love sitting on my boyfriends lap for hours on end
              </Text>
              <Text style={styles.info}>I am the Omega and the Alpha</Text>
            </View>
            <View style={styles.chipsContainer}>
              <Text style={styles.profileName}>Hello</Text>
              <Text style={styles.info}>
                I'm just a really sweet girl next door type. Dont worry about
                taking me out somplace really really fancy, my daddy is poor
              </Text>
              <Text style={styles.info}>
                I love talking about how the 90s were the last great decade and
                how everything sucks now
              </Text>
              <Text style={styles.info}>
                I love sitting on my boyfriends lap for hours on end
              </Text>
              <Text style={styles.info}>I am the Omega and the Alpha</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flex: 1, justifyContent: "flex-end" },
  modalSection: { flex: 8 },
  card: {
    flex: 2,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    borderRadius: 20,
  },

  profileName: {
    position: "relative",
    left: 5,
    margin: 10,
    color: "black",
    fontSize: 40,
  },
  chipsContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
  },
  info: { margin: 10 },
});

export default EmployeeInfoModal;
