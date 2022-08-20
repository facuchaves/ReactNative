import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import EntityModel from '../model/entity';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});

const Entity = ({entity}: {entity: EntityModel}) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <Text style={{...styles.head, ...styles.text}}>{entity.name}</Text>
      <Text style={{...styles.row, ...styles.text}}>{entity.score}</Text>
    </View>
  </TouchableOpacity>
);

Entity.propTypes = {
  entity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Entity;
