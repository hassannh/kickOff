import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import Player from '../components/Player';


export default function Players() {

    const [searchQuery, setSearchQuery] = React.useState('');

    return (

        <>
            <View style={{ flex: 1, backgroundColor: '#1F1D2B' }}>

                <Searchbar
                style={{ marginTop:70 }}
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />

                <View style={styles.player}>
                    <Player/>
                </View>
            </View>




        </>

    )

}

const styles = StyleSheet.create({

    player: {
        display:'flex',
        // flexWrap:'wrap',
        backgroundColor:'white',
        // gap:3,
        // border:1,
    }
})