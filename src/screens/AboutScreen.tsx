import React from 'react';
import i18n from 'i18next';
import {View, StyleSheet, Text} from 'react-native';
import '../i18n';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const About = () => (
  <View style={styles.center}>
    <Text>{i18n.t('about.content')}</Text>
  </View>
);

export default About;
