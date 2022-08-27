import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import i18n from 'i18next';
import '../i18n';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const Contact = () => (
  <View style={styles.center}>
    <Text>{i18n.t('contact.content')}</Text>
  </View>
);

export default Contact;
