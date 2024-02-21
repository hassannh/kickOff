import { GET_ALL_MATCHS} from '../types';




export const getAllMatches = (match) => ({
  type: GET_ALL_MATCHS,
  payload: match,
});

 