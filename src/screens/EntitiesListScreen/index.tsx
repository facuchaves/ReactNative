/* eslint-disable react/prop-types */
import * as React from 'react';
import {View} from 'react-native';
import EntitiesList from '../../components/EntitiesList';
import {AppearanceContext} from '../../context/Appearance.context';
import {styles} from './styles';

// eslint-disable-next-line no-undef
const EntitiesListScreen = () => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = styles(theme);
  return (
    <View style={currentStyle}>
      <EntitiesList />
    </View>
  );
};

export default EntitiesListScreen;
