import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { useColorScheme, StyleSheet } from "react-native";
import EmployerDiscover from "../screens/employer/EmployerDiscover/EmployerDiscover";
import Profile from "../screens/profile/Profile";
import Matches from "../screens/matches/Matches";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={"  "}
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
        },
        activeTintColor: "#acd9d9",
      }}
    >
      <Tab.Screen
        name=" "
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="sliders" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={EmployerDiscover}
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
              name="message-square"
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
