import React from "react";
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


const ModalSigup = ({ toggleModalAndNavigate}) =>{
    return (
        <TouchableOpacity
            style = {style.container}
            disabled ={true}
        >   
        <View style={style.screen}>
            <Text style={style.textshows}>
                Đăng ký thành công !
            </Text>
            <TouchableOpacity onPress={()=>toggleModalAndNavigate()} style={style.TouchableOpacity}>
                <Text style={style.textbutton}>
                    Ok
                </Text>
            </TouchableOpacity>
        </View>
            
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },  
    screen:{
        width:300,
        height:200,
        backgroundColor:'#252525',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    textshows:{
        fontSize:25,
        color:'white',
        fontWeight:'700',
    },
    TouchableOpacity:{
        marginTop:40,
        backgroundColor:'red',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    textbutton:{
        fontSize:20,
        color:'white',
        fontWeight:'800',
    }
        
        
    

})

export {ModalSigup}