import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import {useDispatch, useSelector} from 'react-redux';
import EntityModel from '../model/entity';
import getEntitiesAccion from '../redux/entityAction';
import * as RootNavigation from '../screens/RootNavigation';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});

const EntitiesList = () => {
  // EN ESTE EJEMPLO MUESTRO TODAS LAS IPS SIN TENER QUE PEGARLE A NINGUN ENDPOINT ME TRAE TODA LA INFO AL CARGAR ESTE COMPONENTE

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = React.useState(false);

  // el useSelector() que importamos para poder leer toda la tienda
  // dentro de la tienda(store.js) tenemos statistics y countryInfo. y en statistics entre otras cosas
  // tiene un objeto con toda la info de las estadisticas que le pega al endpoint correspondiente
  const entities: Array<EntityModel> = useSelector(
    (store) => store.entityStore.entities,
  );

  // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en los ducks
  const dispatch = useDispatch();

  const obtenerDatos = async () => {
    setIsLoading(true);
    getEntitiesAccion(dispatch);
    setIsLoading(false);
  };

  // useEffect se ejecutara una vez que levante este componente (IpsSaved.jsx)
  useEffect(() => {
    obtenerDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const element = (data: any) => (
    <View>
      <Text>{data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row
          data={['Name', 'Score']}
          style={styles.head}
          textStyle={styles.text}
        />
        {entities.map((currentEntity) => (
          <TouchableOpacity
            onPress={() =>
              RootNavigation.navigate('Entity', {entity: currentEntity})
            }>
            <TableWrapper key={currentEntity.entity_id} style={styles.row}>
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
