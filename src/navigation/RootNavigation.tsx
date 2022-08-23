import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import {navigationRef} from './NavigationRef';
import DrawerNavigator from './DrawerNavigator';

const Navigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Header
      leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
    <DrawerNavigator />
  </NavigationContainer>
);

export default Navigator;
