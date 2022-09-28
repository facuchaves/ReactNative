import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import i18n from 'i18next';
import '../i18n';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {styles, darkMode} from './styles';
import {AppearanceContext} from '../context/Appearance.context';

const logo = require('./logo.jpeg');
const camera = require('./camera.png');

const SideBarHeader = () => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = theme == 'light' ? styles : darkMode;

  return (
    <View style={currentStyle.bgContainer}>
      <TouchableOpacity>
        <View style={currentStyle.userContainer}>
          <Image style={currentStyle.userImagen} source={logo} />
          <View style={currentStyle.camaraContainer}>
            <Image style={currentStyle.camaraIcon} source={camera} />
          </View>
        </View>

        <View style={currentStyle.userNombre}>
          <Text style={currentStyle.userTitulo}>{i18n.t('sidebar.title')}</Text>
          <Text style={currentStyle.userSubTitulo}>
            {i18n.t('sidebar.subtitle')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SideBar = (props: any) => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = theme == 'light' ? styles : darkMode;

  return (
    <View style={currentStyle.container}>
      <SideBarHeader />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default SideBar;
