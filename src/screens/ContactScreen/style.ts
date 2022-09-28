import {StyleSheet} from 'react-native';
import darkColor from '../../styles';
import {getStyle} from '../../styles/utils';

const styles = StyleSheet.create({
  component: {color: '#fff'},
});

const darkMode = StyleSheet.create({...styles, component: {color: darkColor}});

export const style = (theme: string | null | undefined) =>
  getStyle(theme, styles, darkMode);
