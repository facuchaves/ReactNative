/* eslint-disable react/prop-types */
import * as React from 'react';
import {View} from 'react-native';
import EntitiesList from '../../components/EntitiesList';
import {AppearanceContext} from '../../context/Appearance.context';
import {style} from './style';

// eslint-disable-next-line no-undef
const EntitiesListScreen = () => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = style(theme);
  return (
    <View style={currentStyle}>
      <EntitiesList />
    </View>
  );
};

export default EntitiesListScreen;
