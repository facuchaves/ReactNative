import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
// import EntityModel from '../model/entity';
import * as RootNavigation from '../../navigation/NavigationRef';
import '../../i18n';
import {useAppSelector} from '../../hooks/reactReduxHooks';
import {lightStyles} from './styles';

const logo = require('../../layout/logo.jpeg');

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const closeRow = (_rowMap: any, _rowKey: any) => {};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const deleteRow = (_rowMap: any, _rowKey: any) => {};

const renderHiddenItem = (data: any, rowMap: any) => (
  <View style={[lightStyles.rowBack]}>
    <Text>Left</Text>
    <TouchableOpacity
      style={[lightStyles.backRightBtn, lightStyles.backRightBtnLeft]}
      onPress={() => closeRow(rowMap, data.item.key)}>
      <Text style={lightStyles.backTextWhite}>Close</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[lightStyles.backRightBtn, lightStyles.backRightBtnRight]}
      onPress={() => deleteRow(rowMap, data.item.key)}>
      <Text style={lightStyles.backTextWhite}>Delete</Text>
    </TouchableOpacity>
  </View>
);
// ({item}) => <EntityListItem entity={item} />}
// const EntityListItem = ({entity}) => (
//   <View style={lightStyles.listItem}>
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

const renderItem = (data: any) => (
  <TouchableHighlight
    onPress={() => RootNavigation.navigate('Entity', {entity: data.item})}
    style={[lightStyles.listItem, lightStyles.rowFront]}
    underlayColor="#AAA">
    <View style={lightStyles.listItem}>
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
    // <View style={lightStyles.container}>
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
