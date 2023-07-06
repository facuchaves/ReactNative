import {StyleSheet} from 'react-native';
import getStyles from '../../styles/utils';

export const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    marginTop: 60,
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  listItemLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  listItemView: {
    flex: 1,
    marginLeft: 20,
  },
  listItemText: {
    fontWeight: 'bold',
  },
  listItemTouch: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemTouchText: {
    color: 'green',
  },
  rowFront: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  rowBack: {
    margin: 10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    borderRadius: 5,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});

const darkMode = StyleSheet.create({
  ...lightStyles,
  listItem: {
    ...lightStyles.listItem,
    backgroundColor: 'black',
  },
});

const styles = (theme: string | null | undefined) =>
  getStyles(theme, lightStyles, darkMode);

export default styles;
