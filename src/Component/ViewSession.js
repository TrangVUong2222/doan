import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import {addNewMovie} from "../Redux/features/movies/moviesSlice"
const ViewSession = ({data, navigation}) => {
    const dispatch =  useDispatch();
    if (!Array.isArray(data) || data.length === 0) {
        return String()
    }
    console.log("data: ",data)
    const handleClick = (id) => {
        try{
            console.log(id)
            dispatch(addNewMovie(id)).then(() => {
                // Sau khi dispatch hoàn thành, điều hướng đến DetailMovie
                navigation.navigate('Serimovie', { IdM: id });
            }).catch((error) => {
                console.log("Dispatch không thành công!", error)})
            ;}
        catch(error){
            console.log("khong thanh cong!", error)
        }
        
    };

    return (
        <View style={{height:50,marginBottom:15}}>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item, index }) => (
                    
                    <TouchableOpacity onPress={()=> handleClick(item.IdM)} style={{backgroundColor:'#BFBFC7',paddingHorizontal:10, borderRadius:5,marginHorizontal:10,height:40,justifyContent:'center',alignItems:'center'}} >
                        <Text>{`Phần ${index + 1}`}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.IdM.toString()} 
            />
        </View>
    );
};

export default ViewSession;
