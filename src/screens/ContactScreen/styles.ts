import {StyleSheet} from 'react-native';
import darkColor from '../../styles';
import getStyles from '../../styles/utils';

const lightStyles = StyleSheet.create({
  component: {color: '#fff'},
});

const darkMode = StyleSheet.create({
  ...lightStyles,
  component: {color: darkColor},
});

const styles = (theme: string | null | undefined) =>
  getStyles(theme, lightStyles, darkMode);

export default styles;
