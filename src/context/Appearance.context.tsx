import React, {useState} from 'react';
import {Appearance} from 'react-native';

export const AppearanceContext = React.createContext(
  Appearance.getColorScheme(),
);

export const AppearanceProvider = ({children}: {children: any}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme);
  });

  return (
    <AppearanceContext.Provider value={theme}>
      {children}
    </AppearanceContext.Provider>
  );
};
