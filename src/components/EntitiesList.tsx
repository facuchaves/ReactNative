import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import i18n from 'i18next';
import {SwipeListView} from 'react-native-swipe-list-view';
// import EntityModel from '../model/entity';
import * as RootNavigation from '../navigation/NavigationRef';
import '../i18n';
import {useAppSelector} from '../hooks/reactReduxHooks';

const logo = require('../layout/logo.jpeg');

const styles = StyleSheet.create({
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

const closeRow = (rowMap, rowKey) => {};

const deleteRow = (rowMap, rowKey) => {};

const renderHiddenItem = (data, rowMap) => (
  <View style={[styles.rowBack]}>
    <Text>Left</Text>
    <TouchableOpacity
      style={[styles.backRightBtn, styles.backRightBtnLeft]}
      onPress={() => closeRow(rowMap, data.item.key)}>
      <Text style={styles.backTextWhite}>Close</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.backRightBtn, styles.backRightBtnRight]}
      onPress={() => deleteRow(rowMap, data.item.key)}>
      <Text style={styles.backTextWhite}>Delete</Text>
    </TouchableOpacity>
  </View>
);

// ({item}) => <EntityListItem entity={item} />}
// const EntityListItem = ({entity}) => (
//   <View style={styles.listItem}>
//     <Image source={logo} style={{width: 60, height: 60, borderRadius: 30}} />
//     <View style={{alignItems: 'center', flex: 1}}>
//       <Text style={{fontWeight: 'bold'}}>{entity.name}</Text>
//       <Text>{entity.score}</Text>
//     </View>
//     <TouchableOpacity
//       style={{
//         height: 50,
//         width: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text style={{color: 'green'}}>Call</Text>
//     </TouchableOpacity>
//   </View>
// );

const renderItem = (data) => (
  <TouchableHighlight
    onPress={() => console.log('You touched me')}
    style={[styles.listItem, styles.rowFront]}
    underlayColor={'#AAA'}>
    <View style={styles.listItem}>
      <Image source={logo} style={{width: 60, height: 60, borderRadius: 30}} />
      <View style={{flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{data.item.name}</Text>
        <Text>{data.item.score}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'green'}}>Call</Text>
      </TouchableOpacity>
    </View>
  </TouchableHighlight>
);

const EntitiesList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = React.useState(false);

  const entities = useAppSelector((state) => state.entity.entities);

  return (
    // <View style={styles.container}>
    //   <FlatList
    //     style={{flex: 1}}
    //     data={entities}
    //     renderItem={({item}) => <EntityListItem entity={item} />}
    //     keyExtractor={(entity) => entity.name}
    //   />
    // </View>
    <SwipeListView
      data={entities}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
    />
  );
};

export default EntitiesList;
