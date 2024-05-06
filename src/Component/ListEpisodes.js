import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from "../styles/stylesHome";

const ListEpisodes = ({ navigation, data }) => {
    return (
       
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false} // Ẩn thanh lướt dọc
                    showsHorizontalScrollIndicator={false} // Ẩn thanh lướt ngang
                    numColumns={4}
                    contentContainerStyle={{ height: "auto", justifyContent: 'flex-start', width: '100%' }}
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={{ borderWidth: 1, borderRadius: 5, paddingVertical: 5,margin:3, paddingHorizontal: 10, backgroundColor: '#808090', height: 40, width: 90, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>Tập {index + 1}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        
    );
};

export default ListEpisodes;
