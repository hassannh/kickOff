import { View, Text,Image ,ScrollView,style ,StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllPlayersThunk from '../redux/thunks/playersThunk';


const Player = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.Players.data)

    console.log('playerData', data);

    useEffect(() => {
        dispatch(getAllPlayersThunk())
    }, [dispatch])




    return (
        <ScrollView >
            {data?.map((player, index) => (
                <View key={index} style={styles.player}>
                    <Text>{player.name}</Text>
                    <Text>{player.height}</Text>
                    <Text>{player.weight}</Text>
                    <Image style={styles.Image} source={{ uri: player.image_path }} />
                </View>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    player: {
        
    }
})

export default Player