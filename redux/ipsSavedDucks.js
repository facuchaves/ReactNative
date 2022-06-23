import axios from 'axios';

// constantes
const dataInicial = {
  objetoo: [],
};

const GET_IPS_SAVED_EXITO = 'GET_IPS_SAVED_EXITO';

// reducer
export default function ipsSavedReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_IPS_SAVED_EXITO:
      return {
        ...state,
        objetoo: action.payload,
      };

    default:
      return state;
  }
}

// acciones

export const obtenerIpsSavedAccion = () => async (dispatch, getState) => {
  // getState lo que retorna es el "pokemones" de la tienda y todo lo que tenga asignado a ese parametro

  try {
    const res = await axios.get(
      `http://ec2-18-188-10-21.us-east-2.compute.amazonaws.com:8080/api/resource`,
    );

    console.log('ips saved ducks', res.data);
    // todo el dispatch va a hacer que se ejecute el pokeReducer
    // por esto tenemos el type que es el case especifico del switch a ejecutar
    // y el payload seria todo el state (array y en el ejemplo de abajo array y offset)
    dispatch({
      type: GET_IPS_SAVED_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_IPS_SAVED_EXITO,
      payload: [
        {name: 'Mock Name', score: 88},
        {name: 'Mock Name 2', score: 78},
        {name: 'Mock Name 3', score: 4},
        {name: 'Mock Name 4', score: 17},
        {name: 'Mock Name 5', score: 50},
      ],
    });
  }
};
