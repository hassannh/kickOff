import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';


export default function Players() {

    const [searchQuery, setSearchQuery] = React.useState('');

    return (

        <>
            <View style={{ flex: 1, backgroundColor: '#1F1D2B' }}>

                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Players Screen</Text>
                </View>
            </View>




        </>

    )

}

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 3,
        marginRight: 3
    }
})