import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ContactStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';
import EntitiesListScreen from '../screens/EntitiesListScreen';
import EntityScreen from '../screens/EntityScreen';
import SideBar from '../layout/SideBar';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    <Drawer.Screen name="Entities" component={EntitiesListScreen} />
    <Drawer.Screen name="Entity" component={EntityScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
