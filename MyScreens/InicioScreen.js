import * as React from 'react';
import {View } from 'react-native';
import EntitiesList from '../components/EntitiesList';

export default InicioScreen = props => (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <EntitiesList navigation={props.navigation}/>
    </View>
  );
