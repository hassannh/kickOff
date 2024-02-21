import { View, Text } from 'react-native'
import axios from 'axios';
import { getAllPlayers } from '../Actions/MatchActions';




const getAllPlayersThunk = () => async (dispatch) => {
    try {
        const authToken = 'N3eCJzEkfseIrVV0Ec7zohovsV6coLCqYEUdVR1Cbq1L33fwwhk83mzqqLmX';
        const response = await axios.get("https://api.sportmonks.com/v3/football/players",{
            headers: {
                Authorization : authToken,
            },
        })

        const data = response.data;
        console.log('players :',data);

        if (data) {
            dispatch(getAllPlayers(data));
        }
    } catch (error) {
        console.error('Error while sending get request:', error);
    };
};


export default getAllPlayersThunk