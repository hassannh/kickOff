import { GET_ALL_MATCHS,GET_ALL_PLAYERS} from '../types';




export const getAllMatches = (data) => ({
  type: GET_ALL_MATCHS,
  payload: data,
});


export const getAllPlayers = (data) => ({
  type: GET_ALL_PLAYERS,
  payload: data,
});
 