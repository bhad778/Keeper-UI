import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AsyncStorage from 'react-native';
import Login from '../screens/login/Login';
import BottomTabEmployeeNavigator from './BottomTabEmployeeNavigator';
import BottomTabEmployerNavigator from './BottomTabEmployerNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Messages from '../screens/matches/Messages';
import EmployeeMatched from '../screens/matches/Matched';
import Matched from '../screens/matches/Matched';
import JobBoard from '../screens/employer/jobBoard/JobBoard';
import SignUp from '../screens/login/SignUp';
import AddJob from '../screens/employer/addJob/AddJob';
import EmployeesThatLikedJob from '../screens/employer/EmployeesThatLikedJob/EmployeesThatLikedJob';
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={ColorSchemeName === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="RootEmployee"
        component={BottomTabEmployeeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="JobBoard" component={JobBoard} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="RootEmployer"
        component={BottomTabEmployerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Matched"
        component={Matched}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Messages"
        component={Messages}
      />
      <Stack.Screen name="AddJob" component={AddJob} />
      <Stack.Screen
        name="EmployeesThatLikedJob"
        component={EmployeesThatLikedJob}
      />
    </Stack.Navigator>
  );
}
