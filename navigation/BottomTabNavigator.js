
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Feather } from "@expo/vector-icons";
import { useColorScheme, Image, View } from "react-native";
import Discover from '../screens/discover/Discover';
import Profile from '../screens/profile/Profile';
import Messages from '../screens/matches/Messages'
import Matches from '../screens/matches/Matches'



const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme('dark');
  const tintColorLight = "#fb5b5a";
  const tintColorDark = "#003f5c";
  const Colors = {
    light: {
      text: "#000",
      background: "#003f5c",
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
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverTab"
        component={Discover}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MatchesTab"
        component={Matches}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="file-text" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab


