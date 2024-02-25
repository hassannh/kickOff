import axios from 'axios';
import {getAllMatches} from '../Actions/MatchActions'




const getAllMatchsThunk = () => async (dispatch) => {

    try {
        
        const response = await axios.get("https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-02-22")

        /** @type {SofascoreResponse} */

        const data = response.data;

        if (data) {
            dispatch(getAllMatches(data));
        }
    } catch (error) {
        console.error('Error while sending get request:', error);
    };
};


export default getAllMatchsThunk