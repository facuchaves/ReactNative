// import axios from 'axios';
import EntityService from '../services/Entity.service';

const GET_ENTITIES_SUCCESS = 'GET_ENTITIES_SUCCESS';

const getEntitiesAccion = async (dispatch: any) => {
  // getState lo que retorna es el "pokemones" de la tienda y todo lo que tenga asignado a ese parametro

  const entityService = new EntityService();

  const entities = entityService.getAllEntities();

  dispatch({
    type: GET_ENTITIES_SUCCESS,
    payload: entities,
  });

  // try {
  //   const res = await axios.get(
  //     `http://ec2-18-188-10-21.us-east-2.compute.amazonaws.com:8080/api/resource`,
  //   );

  //   console.log('ips saved ducks', res.data);
  //   // todo el dispatch va a hacer que se ejecute el pokeReducer
  //   // por esto tenemos el type que es el case especifico del switch a ejecutar
  //   // y el payload seria todo el state (array y en el ejemplo de abajo array y offset)
  //   dispatch({
  //     type: GET_IPS_SAVED_EXITO,
  //     payload: res.data,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   dispatch({
  //     type: GET_IPS_SAVED_EXITO,
  //     payload: [
  //       {name: 'Mock Name', score: 88},
  //       {name: 'Mock Name 2', score: 78},
  //       {name: 'Mock Name 3', score: 4},
  //       {name: 'Mock Name 4', score: 17},
  //       {name: 'Mock Name 5', score: 50},
  //     ],
  //   });
  // }
};

export default getEntitiesAccion;
