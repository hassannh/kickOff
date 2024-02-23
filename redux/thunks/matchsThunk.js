import axios from 'axios';
import {getAllMatches} from '../Actions/MatchActions'




const getAllMatchsThunk = () => async (dispatch) => {
    try {
        const authToken = 'N3eCJzEkfseIrVV0Ec7zohovsV6coLCqYEUdVR1Cbq1L33fwwhk83mzqqLmX';


        const response = await axios.get("https://api.sportmonks.com/v3/football/fixtures",{
            headers: {
                Authorization : authToken,
            },
        })

        console.log('data :',response.data);
        const data = response.data;

        if (data) {
            dispatch(getAllMatches(data));
        }
    } catch (error) {
        console.error('Error while sending get request:', error);
    };
};


export default getAllMatchsThunk