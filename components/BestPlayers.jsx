import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllPlayersThunk from '../redux/thunks/playersThunk';



const BestPlayers = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.Players.data)

console.log('playerData',data);

    useEffect(() => {
        dispatch(getAllPlayersThunk())
    }, [dispatch])


    return (
        <ScrollView horizontal={true}>
            {data?.map((player, index) => (
                <View key={index} style={styles.BestTeams}>
                    
                    <Image style={styles.Image} source={{ uri: player.image_path }} />
                </View>
            ))}

        </ScrollView>
    )
}


const styles = StyleSheet.create({

    BestTeams: {

        marginTop: 20,
        marginLeft: 10,
        borderRadius: 50,
    },
    Image: {
        width: 73,
        height: 73,
        borderRadius:50,
    }


})

export default BestPlayers