import {createStore, combineReducers} from 'redux';
import entityReducer from './entityReducer';

// el nombre statistics, countryInfo, ipsSaved  es el nombre que va a recibir de la tienda
// cuando veo mi pagina F12 -> pestaña redux dentro de state -> state
// ahi voy a ver que se llama statistics, countryInfo, ipsSaved y dentro todo lo que le asignamos con los reducers

// toda esta informacion de statistics y countryInfo y ipsSaved la obtengo de todos los ...Ducks.js
// donde cada uno llama a los metodos reducers
const rootReducer = combineReducers({entityStore: entityReducer});

const generateStore = () => createStore(rootReducer);

export default generateStore;
