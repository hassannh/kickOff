import { combineReducers } from 'redux';
import matchReducer from './MatchReducer'
import playerReducer from './PlayerReducer'
import favoritsReducer from './FavoritsReducer'



const rootReducer = combineReducers({
  matchs: matchReducer,
  players: playerReducer,
  favorits: favoritsReducer
});

export default rootReducer;