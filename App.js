import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './Navigator';
import {Provider} from 'react-redux';
import generateStore from './redux/store';

export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
