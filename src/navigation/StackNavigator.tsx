import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/HomeScreen';
import About from '../screens/AboutScreen';
import Contact from '../screens/ContactScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

const ContactStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
);

export {MainStackNavigator, ContactStackNavigator};
