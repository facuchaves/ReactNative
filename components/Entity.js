import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Entity = ({entity}) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.head} textStyle={styles.text}>
        {entity.name}
      </Text>
      <Text style={styles.row} textStyle={styles.text}>
        {entity.score}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Entity;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});
