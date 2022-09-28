import * as React from 'react';
import {View} from 'react-native';
import {AppearanceContext} from '../../context/Appearance.context';
import {style} from './style';
import Entity from '../../components/Entity';

const EntityScreen = ({route}: {route: any}) => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = style(theme);
  return (
    <View style={currentStyle.view}>
      <Entity entity={route.params.entity} />
    </View>
  );
};

export default EntityScreen;
