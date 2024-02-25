import {GET_ALL_MATCHS  , ADD_TO_FAVORITS} from '../types'


const initialState = {
    matchs: [],
    favorits: [],
    error: null,
  };
  
  const MatchReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MATCHS:
        return {
          ...state,
          matchs: action.payload,
          error: null
        };
       
      case ADD_TO_FAVORITS:
        return{
          ...state,
          favorits : action.payload,
          error:null
        }
        
      default:
        return state;
    }
  };
  
  export default MatchReducer;
