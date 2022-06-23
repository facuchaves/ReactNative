import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import statisticsReducer from './statisticsDucks';
import countryInfoReducer from './countryInfoDucks';
import ipsSavedReducer from './ipsSavedDucks';

const rootReducer = combineReducers({
  // el nombre statistics, countryInfo, ipsSaved  es el nombre que va a recibir de la tienda
  // cuando veo mi pagina F12 -> pestaña redux dentro de state -> state
  // ahi voy a ver que se llama statistics, countryInfo, ipsSaved y dentro todo lo que le asignamos con los reducers

  // toda esta informacion de statistics y countryInfo y ipsSaved la obtengo de todos los ...Ducks.js
  // donde cada uno llama a los metodos reducers
  statistics: statisticsReducer,
  countryInfo: countryInfoReducer,
  ipsSaved: ipsSavedReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
}
