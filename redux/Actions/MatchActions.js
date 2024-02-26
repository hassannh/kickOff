import { GET_ALL_MATCHS , ADD_TO_FAVORITS,CLEAR_FAVORITS} from '../types';



export const clearFavorits = () => ({
  type: CLEAR_FAVORITS,
});

export const getAllMatches = (data) => ({
  type: GET_ALL_MATCHS,
  payload: data.events,
});

export const addToFavorits = (payload) => ({
  type: ADD_TO_FAVORITS,
  payload: payload,
});