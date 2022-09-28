import {StyleSheet} from 'react-native';
import {getStyle} from '../../styles/utils';

const styles = StyleSheet.create({view: {flex: 1, justifyContent: 'center'}});

const darkMode = StyleSheet.create(styles);

export const style = (theme: string | null | undefined) =>
  getStyle(theme, styles, darkMode);
