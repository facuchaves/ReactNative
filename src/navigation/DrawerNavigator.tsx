import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ContactStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';
import EntitiesListScreen from '../screens/EntitiesListScreen';
import SideBar from '../layout/SideBar';
import EntityScreen from '../screens/EntityScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  // eslint-disable-next-line react/no-unstable-nested-components, react/jsx-props-no-spreading
  <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
    <Drawer.Screen name="Entity" component={EntityScreen} />
    <Drawer.Screen name="Entities" component={EntitiesListScreen} />
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Contact" component={ContactStackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
