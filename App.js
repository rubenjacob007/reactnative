import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import SearchScreen from "./src/screens/SearchScreen";
import Resultstoshow from "./src/screens/Resultstoshow";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Resultstoshow" component={Resultstoshow} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}