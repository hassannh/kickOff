import {GET_ALL_MATCHS,GET_ALL_PLAYERS} from '../types'


const initialState = {
    data: [],
    error: null,
  };
  
  const matchsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MATCHS:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
        case GET_ALL_PLAYERS:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default matchsReducer;
