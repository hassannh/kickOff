import axios from 'axios';
import {getAllMatches} from '../Actions/MatchActions'




const getAllMatchsThunk = () => async (dispatch) => {
    try {
        const response = await axios.get("https://api.sportmonks.com/v3/football/fixtures")

        console.log(response);
        const data = response.data;

        if (data) {
            dispatch(getAllMatches(data));
        }
    } catch (error) {
        console.error('Error while sending get request:', error);
    }
};


export default getAllMatchsThunk