import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
// import EntityModel from '../model/entity';
import * as RootNavigation from '../../navigation/NavigationRef';
import '../../i18n';
import {useAppSelector} from '../../hooks/reactReduxHooks';
import style, {styles} from './styles';
import {AppearanceContext} from '../../context/Appearance.context';

const logo = require('../../layout/logo.jpeg');

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
    onPress={() => RootNavigation.navigate('Entity', {entity: data.item})}
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

  const theme = React.useContext(AppearanceContext);
  const currentStyle = style(theme);

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
