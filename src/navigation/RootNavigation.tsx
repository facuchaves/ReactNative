import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import i18n from 'i18next';
import {navigationRef} from './NavigationRef';
import DrawerNavigator from './DrawerNavigator';
import '../i18n';

const Navigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Header
      leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{
        text: i18n.t('navigation.title'),
        style: {color: '#fff'},
      }}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
    <DrawerNavigator />
  </NavigationContainer>
);

export default Navigator;
