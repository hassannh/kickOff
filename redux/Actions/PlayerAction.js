import {GET_ALL_PLAYERS} from '../types';




export const getAllPlayers = (data) => ({
  type: GET_ALL_PLAYERS,
  payload: data.records,
});
 