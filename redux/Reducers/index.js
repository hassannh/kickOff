import { combineReducers } from 'redux';
import matchReducer from './MatchReducer'
import playerReducer from './PlayerReducer'



const rootReducer = combineReducers({
  matchs: matchReducer,
  players: playerReducer
});

export default rootReducer;