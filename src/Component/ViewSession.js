import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ViewSession = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        return String()
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity>
                        <Text>{`Phan ${index + 1} : ${item.name}`}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()} 
            />
        </View>
    );
};

export default ViewSession;
