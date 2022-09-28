import {StyleSheet} from 'react-native';
import {getStyles} from '../../styles/utils';

const lightStyles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'center'},
});

const darkMode = StyleSheet.create(lightStyles);

export const styles = (theme: string | null | undefined) =>
  getStyles(theme, lightStyles, darkMode);
