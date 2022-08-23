import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

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
    <Text>This is the home screen</Text>
    <Button
      title="Go to About Screen"
      onPress={() => navigation.navigate('About')}
    />
  </View>
);

export default Home;
