import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import generateStore from './src/redux/store';
import Navigator from './src/navigator';

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
