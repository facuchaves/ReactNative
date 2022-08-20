import * as React from 'react';
import {View} from 'react-native';
import Entity from '../components/Entity';

const EntityScreen = ({route}: {route: any}) => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    <Entity entity={route.params.entity} />
  </View>
);

export default EntityScreen;
