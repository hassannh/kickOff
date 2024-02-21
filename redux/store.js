import { createStore,applyMiddleware , combineReducers  } from 'redux';
import {thunk} from 'redux-thunk';
import matchsReducer from './Reducers/MatchReducer'


const rootReducer = combineReducers({
    Matchs: matchsReducer,
    Players: matchsReducer
  });



const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;
