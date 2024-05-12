import React,{Component, useEffect, useState} from "react";

import {  View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const LogInCmt = ({ tgModal ,isVisible, ClickX }) =>{
   
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={()=>tgModal()}
        >
        <TouchableOpacity
            style = {styles.container}
            disabled ={true}>   
            <View style ={styles.boxShow}>
            <Text style ={styles.textShow}>
           Đăng nhập để sử dụng chức năng này!
            </Text>     
            <TouchableOpacity style={styles.boxclose} onPress={() => tgModal()}>
               <Text style ={[styles.textShow,styles.textboxclick]} >
                Đăng Nhập
               </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.boxClose}>
            <TouchableOpacity onPress={() => ClickX()}>
            <Icon
                name="x"
                size={25}
                color={'white'}
            />
            </TouchableOpacity>
         </View>
         
        </TouchableOpacity>
         
         </Modal>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },  
    boxShow:{
        width:260,
        height:200,
        backgroundColor:'#252525',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    textShow:{
        color:'white'
    },
    boxclose:{
        marginTop:30,
        width:120,
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textboxclick:{
        fontSize:20,
        fontWeight:600,
      
    },
    boxClose:{
        position:'absolute',
        right:100,
        top:370,
    }

   

})

export {LogInCmt}