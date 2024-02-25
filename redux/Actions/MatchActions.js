import { GET_ALL_MATCHS , ADD_TO_FAVORITS} from '../types';




export const getAllMatches = (data) => ({
  type: GET_ALL_MATCHS,
  payload: data.events,
});

export const addToFavorits = (data) => ({
  type: ADD_TO_FAVORITS,
  payload: data,
});