/* eslint-disable react/prop-types */
import * as React from 'react';
import {View} from 'react-native';
import EntitiesList from '../components/EntitiesList';

// eslint-disable-next-line no-undef
const EntitiesListScreen = () => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    <EntitiesList />
  </View>
);

export default EntitiesListScreen;
