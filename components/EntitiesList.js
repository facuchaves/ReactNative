import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerIpsSavedAccion} from '../redux/ipsSavedDucks';
import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
import * as RootNavigation from '../Screens/RootNavigation';

const EntitiesList = (props) => {
  //EN ESTE EJEMPLO MUESTRO TODAS LAS IPS SIN TENER QUE PEGARLE A NINGUN ENDPOINT ME TRAE TODA LA INFO AL CARGAR ESTE COMPONENTE

  const [isLoading, setIsLoading] = React.useState(false);

  // el useSelector() que importamos para poder leer toda la tienda
  // dentro de la tienda(store.js) tenemos statistics y countryInfo. y en statistics entre otras cosas
  // tiene un objeto con toda la info de las estadisticas que le pega al endpoint correspondiente
  const statistics = useSelector((store) => store.ipsSaved.objetoo);

  // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en los ducks
  const dispatch = useDispatch();

  // useEffect se ejecutara una vez que levante este componente (IpsSaved.jsx)
  useEffect(() => {
    console.log('useEffect del componente IpsSaved');
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    setIsLoading(true);

    dispatch(obtenerIpsSavedAccion());

    setIsLoading(false);
  };

  const data = {
    tableHead: ['Nombre', 'Score'],
    tableData: statistics.map((player) => [player.name, player.score]),
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row
          data={data.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        {data.tableData.map((rowData, rowIndex) => (
          <TableWrapper key={rowIndex} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={element(cellData, props.navigation)}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});

const element = (data, navigation) => (
  <TouchableOpacity onPress={() => RootNavigation.navigate('Entity')}>
    <View>
      <Text>{data}</Text>
    </View>
  </TouchableOpacity>
);

export default EntitiesList;
