import { View, Text } from 'react-native'
import axios from 'axios';
import { getAllPlayers } from '../Actions/PlayerAction';




const getAllPlayersThunk = () => async (dispatch) => {
    try {
        // const authToken = 'N3eCJzEkfseIrVV0Ec7zohovsV6coLCqYEUdVR1Cbq1L33fwwhk83mzqqLmX';
        const response = await axios.get("https://www.footballtransfers.com/en/players/actions/overview/overview")

        const data = response.data;

        if (data) {
            dispatch(getAllPlayers(data));
        }
    } catch (error) {
        console.error('Error while sending get request:', error);
    };
};


export default getAllPlayersThunk