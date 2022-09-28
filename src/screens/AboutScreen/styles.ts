import {StyleSheet} from 'react-native';
import darkColor from '../../styles';
import {getStyles} from '../../styles/utils';

const lightStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const darkMode = StyleSheet.create({
  center: {...lightStyles.center, backgroundColor: darkColor},
});

export const styles = (theme: string | null | undefined) =>
  getStyles(theme, styles, darkMode);
