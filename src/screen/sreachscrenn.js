import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Keyboard } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TextInput,
    FlatList
} from 'react-native'





export default function Sreachscrenn({ navigation }) {
    const [imgList, setImgList] = useState([]);
    const [imgContentList, setImgContenList] = useState([]);
    useEffect(() => {
        const data = [
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
        ];
        setImgList(data);
    }, []);
    useEffect(() => {
        const dataContent = [
            { 
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
        ];
        setImgContenList(dataContent);

    }, [])



    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ width: '100%', height: '100%' }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.sreachtab}>
                    <View style={styles.boxsreach}>
                        <TextInput style={styles.sreachtexinput}
                            placeholder="Tìm kiếm phim"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onBlur={Keyboard.dismiss}
                            color = 'white'
                            returnKeyType="search"
                            onSubmitEditing={() => {
                              // Xử lý tìm kiếm khi người dùng nhấn nút "Search"
                            }}
                        />
                    </View>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('HomeStack')} style={styles.clickback}>
                        
                        <Text style={styles.textclickback}>
                            Hủy
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <FlatList
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()} 
                        data={imgList}
                        contentContainerStyle={styles.flatListContainer}
                        renderItem={({ item }) => (
                        <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Serimovie')}>
                            <Image
                              style={styles.image2}
                              source={item.img}
                            />
                        </TouchableOpacity>
                        )}
                    />
                
                </View>   
            </SafeAreaView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    sreachtab:{
        flexDirection:'row',
        
    },
    boxsreach:{
        backgroundColor:'#666666',
        height:40,
        width:'70%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    clickback:{
        
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
    },
    textclickback:{
        color:'white'
    },
    TouchableOpacity:{
        margin:20
    }
    


  

   
});
