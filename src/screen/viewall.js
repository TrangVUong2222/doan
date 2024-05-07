import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native'




export default function Viewall ({navigation}) {
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
            style={{ width: '100%', height: '100%', position: 'relative', }}
        >
            <StatusBar barStyle={"light-content"} />
            <SafeAreaView style={styles.container}>
                <View style={styles.hearder}>
                    <View style={styles.boxbackicon}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                        <Icon
                        name='chevron-left'
                        size={25}
                        color={'white'}
                        />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.boxtitle}>
                        <Text style={styles.texttitle}>
                            Phim mới
                        </Text>
                    </View>
                    <View>
                        
                    </View>
                </View>
                <View style={styles.boxbody}>
                <View style={styles.scroll}>
                    <FlatList
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()} 
                        data={imgList}
                        contentContainerStyle={styles.flatListContainer}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Serimovie')}>
                            <Image
                                style={styles.image2}
                                source={item.img}
                            />
                            </TouchableOpacity>
                            )}
                    />
                    </View>
                </View>
                     



            </SafeAreaView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
    },
    hearder:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30
    },
    texttitle:{
        color:'white',
        fontSize:20
    },
    boxbody:{
        flex:1,
       
        margin:20
    },
    flatListContainer: {
        paddingHorizontal: 10, 
        paddingVertical: 10, 
      },
    image2: {
       margin:10
    },  
})