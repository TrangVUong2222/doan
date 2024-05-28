import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { addEpisode } from "../Redux/features/episodes/episodesSlice";

const ListEpisodes = ({ navigation, numberOfEpisodes, IdM }) => {
    const dispatch = useDispatch();

    const handleClick = (IdM, Order) => {
        try{

            const data = {
                IdM: IdM,
                Order: Order
            };
            dispatch(addEpisode(data)).then(() => {
                // Sau khi dispatch hoàn thành, điều hướng đến DetailMovie
                navigation.navigate('DetailMovie', { IdM: IdM, Order: Order });
            }).catch((error) => {
                console.log("Dispatch không thành công!", error)})
            ;}  
        catch(error){
            console.log("khong thanh cong!")
        }
        
    };

    return (
        <View style={styles.BoxListEpisode}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={4}
                contentContainerStyle={{ height: "auto", justifyContent: 'flex-start', width: '100%' }}
                data={Array.from({ length: numberOfEpisodes }, (_, index) => index + 1)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleClick(IdM, item)} style={styles.episodeButton}>
                        <Text style={styles.episodeText}>Tập {item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    BoxListEpisode: {
        minHeight: 50,
        maxHeight: 100,
    },
    episodeButton: {
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        margin: 3,
        paddingHorizontal: 10,
        backgroundColor: '#808090',
        height: 40,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    episodeText: {
        color: 'white',
    }
});

export default ListEpisodes;
