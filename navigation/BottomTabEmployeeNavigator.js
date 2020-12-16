import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme, StyleSheet } from "react-native";
import EmployeeDiscover from "../screens/employee/EmployeeDiscover/EmployeeDiscover";
import Profile from "../screens/profile/Profile";

import Matches from "../screens/matches/Matches";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const tintColorLight = "#fb5b5a";
  const tintColorDark = "#fff";
  const Colors = {
    light: {
      text: "#000",
      background: "#fff",
      tint: tintColorLight,
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorLight,
    },
    dark: {
      text: "#fff",
      background: "#000",
      tint: tintColorDark,
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorDark,
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={"  "}
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: { borderTopWidth: 0, height: 75 },
      }}
    >
      <Tab.Screen
        name=" "
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon style={styles.tabs} name="user" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={EmployeeDiscover}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon style={styles.tabs} name="search" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="   "
        component={Matches}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              style={styles.tabs}
              name="file-text"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabs: { position: "relative", top: 5 },
});

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
