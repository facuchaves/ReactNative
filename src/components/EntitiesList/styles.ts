import {StyleSheet} from 'react-native';

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

const styles = (theme: string | null | undefined) => {
  return theme == 'light' ? lightStyles : darkMode;
};

export default styles;
