import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './MyDrawer_style';

const SideBarItems = ({navigation}: {navigation: any}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Entities')}>
    <View style={styles.menuContainer}>
      <View style={styles.iconoContainer}>
        <Icon size={17} name="home" />
      </View>
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTxt}>Entities</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SideBarHeader = () => (
  <View style={styles.bgContainer}>
    <TouchableOpacity>
      <View style={styles.userContainer}>
        <Image style={styles.userImagen} source={require('./logo.jpeg')} />
        <View style={styles.camaraContainer}>
          <Image style={styles.camaraIcon} source={require('./camara.png')} />
        </View>
      </View>

      <View style={styles.userNombre}>
        <Text style={styles.userTitulo}>un Titulo</Text>
        <Text style={styles.userSubTitulo}>un Subtitulo</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const SideBar = (props: any) => (
  <View style={styles.container}>
    <SideBarHeader />
    <SideBarItems {...props} />
  </View>
);

export default SideBar;
