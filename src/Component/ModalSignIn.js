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
import Icon from 'react-native-vector-icons/FontAwesome6';

const ModalSignIn = ({ closeModal ,isVisible }) =>{
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={()=>closeModal()}
        >
        <TouchableOpacity
            style = {styles.container}
            disabled ={true}>   
            <View style ={styles.boxShow}>
            <Text style ={styles.textShow}>
            Đăng nhập không thành công !
            </Text>
            <Text style ={styles.textShow}>
            Sai Email hoặc mật khẩu!
            </Text>
            
            <TouchableOpacity style={styles.boxclose} onPress={() => closeModal()}>
               <Text style ={[styles.textShow,styles.textboxclick]}>
                Ok
               </Text>
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
        width:250,
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
        width:80,
        height:40,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textboxclick:{
        fontSize:20,
        fontWeight:600,
      
    }

   

})

export {ModalSignIn}