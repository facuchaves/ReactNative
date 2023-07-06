import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import EntityModel from '../model/entity';
import * as RootNavigation from '../../navigation/NavigationRef';
import '../../i18n';
import {lightStyles} from './styles';
import useEntities from '../../hooks/useEntities';
import {EntityStatus} from '../../features/entity/entitySlice';
import ERROR_500 from '../../screens/500';

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

const renderItem = (data: any, loading: boolean = false) =>
  loading ? (
    <View style={[lightStyles.listItem, lightStyles.rowFront]}>
      <View style={lightStyles.listItem}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item
              width={60}
              height={60}
              borderRadius={30}
            />
            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item width={120} height={20} />
              <SkeletonPlaceholder.Item marginTop={6} width={40} height={20} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              marginLeft={20}
              marginTop={6}
              width={40}
              height={20}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    </View>
  ) : (
    <TouchableHighlight
      onPress={() => RootNavigation.navigate('Entity', {entity: data.item})}
      style={[lightStyles.listItem, lightStyles.rowFront]}
      underlayColor="#AAA">
      <View style={lightStyles.listItem}>
        <Image source={logo} style={lightStyles.listItemLogo} />
        <View style={lightStyles.listItemView}>
          <Text style={lightStyles.listItemText}>{data.item.name}</Text>
          <Text>{data.item.score}</Text>
        </View>
        <TouchableOpacity style={lightStyles.listItemTouch}>
          <Text style={lightStyles.listItemTouchText}> Call </Text>
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
const EntitiesList = () => {
  const {status, entities, dispatch} = useEntities();

  if (EntityStatus.ERROR === status) {
    return <ERROR_500 />;
  }

  const loading = [EntityStatus.IDLE, EntityStatus.LOADING].includes(status);
  return (
    <SwipeListView
      data={entities.length > 0 ? entities : [...Array(5).keys()]}
      renderItem={(item) => renderItem(item, loading)}
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
