import {GET_ALL_MATCHS,GET_ALL_PLAYERS} from '../types'


const initialState = {
    matchs: [],
    players:[],
    error: null,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MATCHS:
        return {
          ...state,
          matchs: action.payload,
          error: null,
        };
       
      case GET_ALL_PLAYERS:
            return {
              ...state,
              players: action.payload,
              error: null,
            };
        
      default:
        return state;
    }
  };
  
  export default Reducer;
