import {GET_ALL_PLAYERS } from '../types'


const initialState = {
    players:[],
    error: null,
  };
  
  const playerReducer = (state = initialState, action) => {
    switch (action.type) {
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
  
  export default playerReducer;
