import React from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18next';
import '../../i18n';
import {AppearanceContext} from '../../context/Appearance.context';
import {style} from './style';

const Contact = () => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = style(theme);
  return (
    <View style={currentStyle.center}>
      <Text>{i18n.t('contact.content')}</Text>
    </View>
  );
};

export default Contact;
