import { ADD_TO_FAVORITS ,CLEAR_FAVORITS} from '../types'


const initialState = {
    favorits: []
  };
  
  const favoritsReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case ADD_TO_FAVORITS:
        return{
          ...state,
          favorits : [...state.favorits, action.payload],
          
        }
        case CLEAR_FAVORITS:
      return {
        ...state,
        favorits: [],
        
      };
        
      default:
        return state;
    }
  };
  
  export default favoritsReducer;
