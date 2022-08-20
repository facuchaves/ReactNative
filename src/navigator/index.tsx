import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header} from 'react-native-elements';
import {navigationRef} from '../screens/RootNavigation';
import EntitiesListScreen from '../screens/EntitiesListScreen';
import EntityScreen from '../screens/EntityScreen';
import SideBar from '../layout/SideBar';

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
