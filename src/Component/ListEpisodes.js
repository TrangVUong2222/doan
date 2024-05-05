import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ListEmpisodes = ({ data }) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity> // xu ly onpress
                        <Text>`Tap ${index + 1}`</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()} 
            />
        </View>
    );
};

export default ListEmpisodes 
