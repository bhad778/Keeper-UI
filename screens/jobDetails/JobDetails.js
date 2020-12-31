import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Title, Text, Chip, Paragraph } from "react-native-paper";
import Header from "../../components/header/Header";
import { FontAwesome } from "@expo/vector-icons";

const JobRequirements = () => {
  const [jobDetailsSections] = useState([
    {
      title: "Responsibilities",
      bulletListItems: ["hey", "whats up", "lets go"],
      type: "bulletList",
    },
  ]);

  const returnBulletListSection = (bulletListItems) => {
    return (
      <View style={styles.bulletListContainer}>
        {bulletListItems.map((bulletItem, index) => {
          return (
            <View style={styles.bulletRow} key={index}>
              <View style={styles.bulletPoint}></View>
              <View style={styles.bulletText}>
                <Text style={styles.normalText}>yasdfas asdflj asdf </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  const returnParagraphSection = (paragraphText) => {
    return <Paragraph>{paragraphText}</Paragraph>;
  };

  return (
    <View style={styles.container}>
      <Header screenTitle="Design Director" />
      <View style={styles.section}>
        <View style={styles.companyDetailsSection}>
          <View style={styles.companyName}>
            <Title>Mail Chimp</Title>
          </View>
          <View style={styles.compensation}>
            <Text>Compensation: (50k/year)</Text>
          </View>
          <View style={styles.location}>
            <FontAwesome color="black" name="map-marker" size={30} />
            <Text>Atlanta, GA</Text>
          </View>
          <View style={styles.chipsContainer}>
            <Chip style={styles.chip} textStyle={styles.chipText}>
              GRAPHIC DESIGN
            </Chip>
            <Chip style={styles.chip} textStyle={styles.chipText}>
              UI/UX DESIGN
            </Chip>
            <Chip style={styles.chip} textStyle={styles.chipText}>
              BRANDING
            </Chip>
          </View>
        </View>
      </View>
      {jobDetailsSections.map((section, i) => (
        <View key={i} style={styles.section}>
          <View style={styles.sectionTitleAndEditContainer}>
            <Title style={styles.sectionTitle}>{section.title}</Title>
            <FontAwesome
              style={styles.editIcon}
              color="black"
              name="pencil"
              size={30}
            />
          </View>
          <View style={styles.sectionContent}>
            {section.type === "bulletList"
              ? returnBulletListSection(section.bulletListItems)
              : returnParagraphSection()}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add9d9",
  },
  section: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  sectionTitleAndEditContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    textDecorationLine: "underline",
  },
  editIcon: {
    position: "absolute",
    right: 5,
  },
  sectionContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  chipsContainer: {
    flexDirection: "row",
  },
  chip: {
    backgroundColor: "black",
  },
  chipText: {
    color: "#add9d9",
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletPoint: {
    width: 6,
    height: 6,
    backgroundColor: "black",
    borderRadius: 50,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default JobRequirements;
