import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

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
    <Text>This is the contact screen</Text>
  </View>
);

export default Contact;
