import React from 'react';
import i18n from 'i18next';
import {View, Text} from 'react-native';
import '../../i18n';
import {AppearanceContext} from '../../context/Appearance.context';
import styles from './styles';

const About = () => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = styles(theme);
  return (
    <View style={currentStyle.center}>
      <Text>{i18n.t('about.content')}</Text>
    </View>
  );
};

export default About;
