import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Login from "../screens/login/Login";
import BottomTabEmployeeNavigator from "./BottomTabEmployeeNavigator";
import BottomTabEmployerNavigator from "./BottomTabEmployerNavigator";
// import OptimizedEmployerNavigator from "./OptimizedEmployerNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Messages from "../screens/matches/Messages";
import Matched from "../screens/matches/Matched";
import SignUp from "../screens/login/SignUp";
import AddJob from "../screens/employer/addJob/AddJob";
import EmployeesThatLikedJob from "../screens/employer/employeesThatLikedJob/EmployeesThatLikedJob";
import Resume from "../screens/employee/resume/Resume";
import JobDetails from "../screens/jobDetails/JobDetails";

export default function Navigation({ ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={ColorSchemeName === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RootEmployer"
        component={BottomTabEmployerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RootEmployee"
        component={BottomTabEmployeeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Resume"
        component={Resume}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Matched"
        component={Matched}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AddJob"
        component={AddJob}
      />
      <Stack.Screen
        name="EmployeesThatLikedJob"
        component={EmployeesThatLikedJob}
      />
    </Stack.Navigator>
  );
}
