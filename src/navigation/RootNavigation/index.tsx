import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import i18n from 'i18next';
import {navigationRef} from '../NavigationRef';
import DrawerNavigator from '../DrawerNavigator';
import '../../i18n';
import {AppearanceContext} from '../../context/Appearance.context';
import {style} from './style';

const Navigator = () => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = style(theme);
  return (
    <NavigationContainer ref={navigationRef}>
      <Header
        leftComponent={{icon: 'menu', ...currentStyle}}
        centerComponent={{
          text: i18n.t('navigation.title'),
          style: {...currentStyle},
        }}
        rightComponent={{icon: 'home', ...currentStyle}}
      />
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
