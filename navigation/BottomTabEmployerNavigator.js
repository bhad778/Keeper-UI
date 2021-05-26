import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet } from "react-native";
import EmployerDiscover from "../screens/employer/employerDiscover/EmployerDiscover";
import Profile from "../screens/profile/Profile";
import Matches from "../screens/matches/Matches";
import Icon from "react-native-vector-icons/Feather";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName={"  "}
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          height: props.isJobBoardOpen ? 0 : 80,
          bottom: props.bottomNavBarHeight - 80,
          backgroundColor: "black",
          position: "absolute",
        },
        safeAreaInsets: {
          bottom: 0,
        },
        activeTintColor: "black",
        inactiveBackgroundColor: props.selectedJob.color,
        activeBackgroundColor: props.selectedJob.color,
      }}
    >
      <Tab.Screen
        name=" "
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              style={styles.tabs}
              name="sliders"
              size={props.isJobBoardOpen ? 0 : 30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={EmployerDiscover}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Icon
              style={styles.tabs}
              name="search"
              size={props.isJobBoardOpen ? 0 : 30}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="   "
        component={Matches}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              style={styles.tabs}
              name="message-square"
              size={props.isJobBoardOpen ? 0 : 30}
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

const mapStateToProps = (state) => {
  const { selectedJob, bottomNavBarHeight, isJobBoardOpen } = state;
  return { selectedJob, bottomNavBarHeight, isJobBoardOpen };
};

export default connect(mapStateToProps)(BottomTabNavigator);
