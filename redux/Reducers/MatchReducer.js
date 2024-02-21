import {GET_ALL_MATCHS} from '../types'


const initialState = {
    Matchs: [],
  };
  
  const matchsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MATCHS:
        return {
          ...state,
          Matchs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default matchsReducer;
