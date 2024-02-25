import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllPlayersThunk from '../redux/thunks/playersThunk';
import { useNavigation } from '@react-navigation/native';



const BestPlayers = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.players.players)

    // const player = data.players
    // console.log('match dataaa',data);


    useEffect(() => {
        dispatch(getAllPlayersThunk())
    }, [dispatch])


    const handleShowDetails = (player) => {
        navigation.navigate('playerdetail', { player })
    }


    return (
        <ScrollView horizontal={true}>
            {data?.map((player, index) => (
                <TouchableOpacity onPress={() => handleShowDetails(player)}>
                    <View key={index} style={styles.BestTeams}>
                        <Image style={styles.Image} source={{ uri: player.player_picture }} />
                    </View>
                </TouchableOpacity>
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
        borderRadius: 50,
    }


})

export default BestPlayers