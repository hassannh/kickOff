import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Player from '../components/Player';
import SearchInput from '../components/SearchInput';
import getAllPlayersThunk from '../redux/thunks/playersThunk';


export default function Players() {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const  data  = useSelector(state => state.players.players);


    useEffect(() => {
        dispatch(getAllPlayersThunk());
    },
    //  [dispatch]
     );


    const filteredData = data.filter((player) =>
        player.player_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (

        <>
            <ScrollView style={{ backgroundColor: '#1F1D2B' }}>
                <SearchInput setSearchQuery={setSearchQuery} />
                <Player data={filteredData} />
            </ScrollView>


        </>

    )

}

const styles = StyleSheet.create({

    player: {
        display: 'flex',
        flexDirection: 'row',
    },

})