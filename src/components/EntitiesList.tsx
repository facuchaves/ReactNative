import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import i18n from 'i18next';
// import EntityModel from '../model/entity';
import * as RootNavigation from '../navigation/NavigationRef';
import '../i18n';
import {useAppSelector} from '../hooks/reactReduxHooks';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});

const EntitiesList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = React.useState(false);

  const entities = useAppSelector((state) => state.entity.entities);

  const element = (data: any) => (
    <View>
      <Text>{data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row
          data={[
            i18n.t('entityList.table.headers.name'),
            i18n.t('entityList.table.headers.score'),
          ]}
          style={styles.head}
          textStyle={styles.text}
        />
        {entities.map((currentEntity) => (
          <TouchableOpacity
            key={currentEntity.entity_id}
            onPress={() =>
              RootNavigation.navigate('Entity', {entity: currentEntity})
            }>
            <TableWrapper style={styles.row}>
              <Cell
                data={element(currentEntity.name)}
                textStyle={styles.text}
              />
              <Cell
                data={element(currentEntity.score)}
                textStyle={styles.text}
              />
            </TableWrapper>
          </TouchableOpacity>
        ))}
      </Table>
    </View>
  );
};

export default EntitiesList;
