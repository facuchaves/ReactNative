// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from '../Screens/RootNavigation';
import EntitiesListScreen from '../Screens/EntitiesListScreen';
import EntityScreen from '../Screens/EntityScreen';
import SideBar from '../layout/SideBar';
import {Header} from 'react-native-elements';

const Drawer = createDrawerNavigator();

const Navigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Header
      leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
    <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
      <Drawer.Screen name="Entities" component={EntitiesListScreen} />
      <Drawer.Screen name="Entity" component={EntityScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Navigator;
