import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import i18n from 'i18next';
import '../i18n';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from './SideBarStyles';

const logo = require('./logo.jpeg');
const camera = require('./camera.png');

const SideBarHeader = () => (
  <View style={styles.bgContainer}>
    <TouchableOpacity>
      <View style={styles.userContainer}>
        <Image style={styles.userImagen} source={logo} />
        <View style={styles.camaraContainer}>
          <Image style={styles.camaraIcon} source={camera} />
        </View>
      </View>

      <View style={styles.userNombre}>
        <Text style={styles.userTitulo}>{i18n.t('sidebar.title')}</Text>
        <Text style={styles.userSubTitulo}>{i18n.t('sidebar.subtitle')}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const SideBar = (props: any) => (
  <View style={styles.container}>
    <SideBarHeader />
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
);

export default SideBar;
