import React from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18next';
import '../../i18n';
import {AppearanceContext} from '../../context/Appearance.context';
import styles from './styles';

const Contact = () => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = styles(theme);
  return (
    <View style={currentStyle.center}>
      <Text>{i18n.t('contact.content')}</Text>
    </View>
  );
};

export default Contact;
