import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import s from './MyDrawer_style';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const SideBarItems = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Entities')}>
    <View style={s.menuContainer}>
      <View style={s.iconoContainer}>
        <Icon size={17} name="home" />
      </View>
      <View style={s.tituloContainer}>
        <Text style={s.tituloTxt}>Entities</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SideBarHeader = () => (
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
);

export default SideBar = (props) => (
  <View style={s.container}>
    <SideBarHeader />
    <SideBarItems {...props} />
  </View>
);
