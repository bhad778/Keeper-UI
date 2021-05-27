import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet } from "react-native";
import EmployeeDiscover from "../screens/employee/employeeDiscover/EmployeeDiscover";
import EmployeeProfile from "../screens/profile/EmployeeProfile";
import EmployeeMatches from "../screens/matches/EmployeeMatches";
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
          height: 80,
          bottom: props.bottomNavBarHeight - 80,
          backgroundColor: "black",
          position: "absolute",
        },
        safeAreaInsets: {
          bottom: 0,
        },
        activeTintColor: "#acd9d9",
        inactiveBackgroundColor: "#ff8267",
        activeBackgroundColor: "#ff8267",
      }}
    >
      <Tab.Screen
        name=" "
        component={EmployeeProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon style={styles.tabs} name="sliders" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={EmployeeDiscover}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Icon style={styles.tabs} name="search" size={30} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="   "
        component={EmployeeMatches}
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

const mapStateToProps = (state) => {
  const { selectedJob, bottomNavBarHeight, isJobBoardOpen } = state;
  return { selectedJob, bottomNavBarHeight, isJobBoardOpen };
};

export default connect(mapStateToProps)(BottomTabNavigator);
