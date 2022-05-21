// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import s from './MyDrawer_style';
import { Header } from 'react-native-elements';

import InicioScreen from '../MyScreens/InicioScreen';
import {navigationRef} from '../MyScreens/RootNavigation';
import EntityScreen from '../MyScreens/Entity';

const DrawerMenu = props => (
  <TouchableOpacity onPress={props.navigation}>
    <View style={s.menuContainer}>
      <View style={s.iconoContainer}>
        <Icon size={17} name={props.iconName} />
      </View>
      <View style={s.tituloContainer}>
        <Text style={s.tituloTxt}>{props.titleName}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const SideBar = props => (
  <View style={s.container}>
    <View style={s.bgContainer}>
      <TouchableOpacity>
        <View style={s.userContainer}>
          <Image style={s.userImagen} source={require('./logo.jpeg')} />
          <View style={s.camaraContainer}>
            <Image style={s.camaraIcon} source={require('./camara.png')} />
          </View>
        </View>

        <View style={s.userNombre}>
          <Text style={s.userTitulo}>un Titulo</Text>
          <Text style={s.userSubTitulo}>un Subtitulo</Text>
        </View>
      </TouchableOpacity>
    </View>
    <DrawerMenu
      iconName="home"
      titleName="Inicio"
      navigation={() => props.navigation.navigate('Inicio')}
    />
  </View>
)

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
  <NavigationContainer ref={navigationRef}>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name="Inicio" component={InicioScreen} />
      <Drawer.Screen name="Entity" component={EntityScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default MyDrawer;
