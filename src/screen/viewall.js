import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Image } from "expo-image";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native'




export default function Viewall ({navigation, route}) {

    const Data = route.params.Data
    const title = route.params.title
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
                           {title}
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
                        data={Data}
                        contentContainerStyle={styles.flatListContainer}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Serimovie', {IdM : item.IdM})}>
                            <Image
                                style={styles.image2}
                                source={{uri: item.ImgIntroUrl}}
                            />
                            <View style={styles.rate}>
                                    <Text style={styles.ratePoint}>{item.Rate}</Text>
                                    <Icon
                                        name='star'
                                        size={15}
                                        color={'orange'}
                                        style={{ marginLeft: 5, marginTop:10 }}
                                    />
                                </View>
                                <View style={styles.boxName}>
                            <Text style={styles.textname} numberOfLines={2} ellipsizeMode="tail">{item.NameMovie}</Text>
                            </View>
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
       margin:25,
       height:200,
       width:130,
       borderRadius:5,

    },  
    rate: {
        position: 'absolute',
        flexDirection: 'row',
        left: 30,
        top: 20
    },
    ratePoint: {
        color: 'orange'
    },
    boxName: {
        marginTop: 10,
        width: 130,
        height: 40,
        marginLeft:25
        
    },
    textname:{
        color: "#fff",
        textAlign: "left",
        lineHeight: 20, // Khoảng cách giữa các dòng
        maxLines: 2,
    },
})