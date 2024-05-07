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



const ModalDelete = ({ toggleModal,isVisible }) =>{
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={()=>toggleModal()}
        >
        <TouchableOpacity
            style = {styles.container}
            disabled ={true}
        >   
        <View style={styles.screen}>
            <Text style={styles.textshows}>
                Bạn muốn xóa Video này ?
            </Text>
            <View style={styles.boxclick}>
            
            <TouchableOpacity onPress={()=>toggleModal()} style={styles.TouchableOpacity}>
                <Text style={styles.textbutton}>
                    OK
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.boxClickX}>
            <TouchableOpacity onPress={()=>toggleModal()} >
            <Icon
                name='x'
                size={25}
                color={'white'}
            />
            </TouchableOpacity>
        </View>
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
    screen:{
        width:300,
        height:200,
        backgroundColor:'#252525',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    boxclick:{
        flexDirection:'row'
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
    textshows:{
        color:'white',
    },
    boxClickX:{
        position:'absolute',
        top:10,
        right:10,
    }

})

export {ModalDelete}