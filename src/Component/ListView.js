import React, {Component, useState}from "react";
import {   View,
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
    Modal
 } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { ModalDelete } from "./ModalDelete";

const ListView = ({ navigation, data, toggleModal }) => {
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false} 
                showsHorizontalScrollIndicator={false} 
                renderItem={({ item, index }) => (
                    
                        <TouchableOpacity onPress={() => navigation.navigate('Serimovie')}>
                        <View style={styles.ViewAll}>
                            <View>
                                <Image
                                    source={item.img}
                                    style={styles.Image}
                                />
                            </View>

                            <View style={styles.BoxBigInfo}>
                                <View style={styles.BoxNameMovie}>
                                <Text style={[styles.editText,styles.textName]}>
                                {shortenText(`${item.MovieName}`, 40)}
                                </Text>
                                </View>
                                <View style={styles.boxrate}>
                                    <Text style={styles.textRate}>
                                        {item.rate}
                                    </Text>
                                    <Icon 
                                        name='star'
                                        size={18}
                                        color={'orange'}
                                        style={{ marginLeft: 5 }}
                                    />
                                </View>
                                <View style={styles.boxMiniInfo}>
                                    <Icon 
                                        name='layer-group'
                                        size={15}
                                        color={'#808090'}
                                    />
                                <Text style={[styles.editText]} numberOfLines={1}>
                                    {item.category}
                                </Text>
                                </View>
                                <View style={styles.boxMiniInfo}>
                                    <Icon 
                                        name='calendar-days'
                                        size={15}
                                        color={'#808090'}
                                    />
                                <Text style={styles.editText}>
                                    {item.year}
                                </Text>
                                </View>
                                <View style={styles.boxMiniInfo}> 
                                    <Icon 
                                        name='clock'
                                        size={15}
                                        color={'#808090'}
                                    />
                                <Text style={styles.editText}>
                                    {item.time}
                                </Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={styles.BoxTapDelete}>
                        <View style={styles.boxtap}>
                                <Text style={styles.textTap}>
                                    {item.tap}
                                </Text>
                            </View>
                        <View style={styles.boxDelete}>
                            <TouchableOpacity onPress={() =>toggleModal()}>
                            <Icon 
                                name='trash-can'
                                size={35}
                                color={'white'}
                            />
                            </TouchableOpacity>
                           
                        </View>
                        </View>
                        </TouchableOpacity>
                    
                )}
                keyExtractor={(item) => item.id.toString()} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        flex:1,
        flexDirection: 'column',
      
    },
    Image:{
        width: 124,
        height: 192,
        borderRadius: 5 
    },
   
    boxtap:{
        padding:10,
        backgroundColor:'#808090',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,

    },
    BoxBigInfo:{
        flex:1,
        flexDirection:'column',
      
        marginLeft:20
    },
    editText:{
        color:'white',
        fontSize:15,
        marginLeft:5
       
    },
    ViewAll:{
        flexDirection:'row',
        marginTop:20,
        marginHorizontal:20
    },
    boxrate:{
        flexDirection:'row',
        marginTop:10,
       
    },
    textRate:{
        color:'orange',
        
    },
    textName:{
        fontSize:20,
        fontWeight:600
    },
    BoxNameMovie:{
        width:'73%',
        height:'auto',
        maxHeight:100,
        
    },
    // numberOfLine:{
    //     numberOfLines:1,
    // },
    textTap:{
        color:'white'
    },
    boxMiniInfo:{
        flexDirection:'row',
        marginTop:15,
        
    },
    boxDelete:{
        top:10,
    },
    BoxTapDelete:{
       position:"absolute",
       justifyContent:'center',
       alignItems:'center',
       top:20,
       right:30,
    }
})
export default ListView;
