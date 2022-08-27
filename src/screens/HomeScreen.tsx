import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import '../i18n';
import i18n from 'i18next';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const Home = ({navigation}: {navigation: any}) => (
  <View style={styles.center}>
    <Text>{i18n.t('home.content')}</Text>
    <Button
      title={i18n.t('home.goToAbout')}
      onPress={() => navigation.navigate('About')}
    />
  </View>
);

export default Home;
