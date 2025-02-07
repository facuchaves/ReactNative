import {StyleSheet} from 'react-native';
import getStyles from '../styles/utils';

export const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#A0A0A0',
  },
  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  userImagen: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  camaraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  camaraIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
    bottom: 3,
  },
  userNombre: {
    marginVertical: 10,
  },
  userTitulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userSubTitulo: {
    textAlign: 'center',
    fontSize: 11,
    color: '#a537fd',
    paddingVertical: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 15,
  },
  iconoContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  tituloContainer: {
    flex: 8.5,
    justifyContent: 'center',
  },
  tituloTxt: {
    fontSize: 13,
  },
  difuminado: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  fondoImagen: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});

export const darkMode = StyleSheet.create({
  ...lightStyles,
  container: {
    ...lightStyles.container,
    backgroundColor: 'black',
  },
});

const styles = (theme: string | null | undefined) =>
  getStyles(theme, lightStyles, darkMode);

export default styles;
