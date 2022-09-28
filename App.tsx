import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Navigator from './src/navigation/RootNavigation';
import {AppearanceProvider} from './src/context/Appearance.context';

const App = () => (
  <Provider store={store}>
    <AppearanceProvider>
      <Navigator />
    </AppearanceProvider>
  </Provider>
);

export default App;
