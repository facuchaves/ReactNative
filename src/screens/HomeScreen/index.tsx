import React from 'react';
import {View, Button, Text} from 'react-native';
import '../../i18n';
import i18n from 'i18next';
import {AppearanceContext} from '../../context/Appearance.context';
import styles from './styles';

const Home = ({navigation}: {navigation: any}) => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = styles(theme);
  return (
    <View style={currentStyle.center}>
      <Text>{i18n.t('home.content')}</Text>
      <Button
        title={i18n.t('home.goToAbout')}
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default Home;
