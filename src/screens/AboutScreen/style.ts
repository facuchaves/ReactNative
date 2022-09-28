import {StyleSheet} from 'react-native';
import darkColor from '../../styles';
import {getStyle} from '../../styles/utils';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const darkMode = StyleSheet.create({
  center: {...styles.center, backgroundColor: darkColor},
});

export const style = (theme: string | null | undefined) =>
  getStyle(theme, styles, darkMode);
