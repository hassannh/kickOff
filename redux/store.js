import { createStore,applyMiddleware , combineReducers  } from 'redux';
import {thunk} from 'redux-thunk';
import Reducer from './Reducers/MatchReducer'


const store = createStore(Reducer,applyMiddleware(thunk));
export default store;
