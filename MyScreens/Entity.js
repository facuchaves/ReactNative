import * as React from 'react';
import { View } from 'react-native';
import Entity from '../components/Entity';

const mockEntity = {name:'Mock Name', score: 88}

export default EntityScreen = props => (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Entity entity={mockEntity}/>
    </View>
  );