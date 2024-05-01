import React, {Component} from "react";
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
} from 'react-native'

export default Sigup = ({navigation}) =>{
    return(
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style= {{width:'100%', height:'100%'}}    
        >
            <StatusBar barStyle={"light-content"}/>
            <SafeAreaView style= {styles.container}>
                
                <View style= {styles.boxLogo}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/icon/logo.png')}
                    />
                    
                </View>
                <View style={styles.inputInfor}>
                    <View style = {styles.infor}>
                        <Image
                            style ={[styles.icon,styles.emailicon]}
                            source={require('../assets/icon/usnameicon.png')}
                        />
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Tên hiển thị"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"

                        />                       
                    </View>
                    <View style = {styles.infor}>
                        <Image
                            style ={[styles.icon,styles.emailicon]}
                            source={require('../assets/icon/Vector.png')}
                        />
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Nhập Email của bạn"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"

                        />                       
                    </View>
                    <View style = {styles.infor}>
                        <Image
                            style ={[styles.icon,styles.passwordicon]}
                            source={require('../assets/icon/pwicon.png')}
                        />
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Mật khẩu"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"

                        />                       
                    </View>
                    <View style = {styles.infor}>
                        <Image
                            style ={[styles.icon,styles.passwordicon]}
                            source={require('../assets/icon/pwicon.png')}
                        />
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="nhập lại mật khẩu"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"

                        />                       
                    </View>
                    
                </View>
                <View style={styles.boxLogin}>
                    <TouchableOpacity  onPress={()=>{
                                navigation.navigate('HomeStack');
                              }} style={[styles.buttomLogin]} >
                        <Text style ={styles.textButtom}>
                              
                           Đăng ký
                        </Text>  
                    </TouchableOpacity>

                    <View style = {styles.textBox} >
                        <Text style ={styles.questionText}>
                            Đã có tài khoản?
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.singupText}
                            onPress={()=>{
                                navigation.navigate('Login');
                              }}> Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </SafeAreaView>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center'
    },
    boxImg:{
        width:'100%',
        height:'auto',
        
    },
    boxLogo:{
        marginTop: 20,
        flexDirection:'column' ,
        justifyContent:'center',
        alignItems:'center',
    },
    logoText:{
        marginTop:10,
        marginBottom:20,
        fontSize:24,
        fontWeight:'700',
    },

    loginimg :{ 
        width:'100%',
        height:300,
        resizeMode:'stretch',
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
        
    },
    inputInfor:{
        width:'70%',
        paddingHorizontal:20,
        paddingVertical:12,
        
    },
    infor:{
        flexDirection:'row',
        marginVertical:12,
        
    
    },
    icon:{
        position:'absolute',
        top:18,
        marginLeft:10,
        resizeMode:'stretch'

    },
    passwordicon:{
        marginTop:-4,

    },
    
    textInput:{
        width:'100%',
        height:50,
        paddingHorizontal:50,
        borderWidth:1,
        borderColor:'#ffff',
        borderRadius:10,
        color:'#ffff'
    },
    boxLogin:{
        width:'70%',
        paddingHorizontal:20,
        // paddingVertical:10,
        flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center',

    },
    buttomLogin:{
        width:'100%',
        borderWidth:1,
        borderColor:'#ffff',
        borderRadius:10,
        height:50,
        justifyContent:'center',
        backgroundColor:'red',
        
    }, 
    textButtom:{
        width:'100%',
        textAlign:'center',
        color:'white',
        fontSize:24,
        fontWeight:'700'
    },
    textBox:{
        marginTop:10,
        flexDirection:'row',
    
    },
    questionText:{
        color:'#ffff'
    },
    singupText:{
        marginLeft:5,
        color:'red',
        fontSize:16,
    }






})


