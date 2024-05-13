import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ViewSession = ({ data }) => {
    if (!Array.isArray(data) || data.length === 0) {
        return String()
    }
    return (
        <View style={{ height: 50, marginBottom: 15 }}>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ backgroundColor: '#BFBFC7', paddingHorizontal: 10, borderRadius: 5, marginHorizontal: 10, height: 40, justifyContent: 'center', alignItems: 'center' }} >
                        <Text>{`Phần ${index + 1} : ${item.name}`}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default ViewSession;
