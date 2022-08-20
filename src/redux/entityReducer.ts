const dataInicial = {entities: []};
const GET_ENTITIES_SUCCESS = 'GET_ENTITIES_SUCCESS';

const entityReducer = (state = dataInicial, action: any) => {
  switch (action.type) {
    case GET_ENTITIES_SUCCESS:
      return {
        ...state,
        entities: action.payload,
      };

    default:
      return state;
  }
};

export default entityReducer;
