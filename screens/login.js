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

export default Login = () =>{
    return(
        <ImageBackground
            style={styles.imgbgr}   
        >
            <StatusBar barStyle={"light-content"}/>
            <SafeAreaView style= {styles.container}>
                <View style = {styles.boxImg}>
                    <Image 
                        style= {styles.loginimg}
                        source={require('../assets/image/loginimg.png')}                                          
                    />                   
                </View>
                <View style= {styles.boxLogo}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/icon/logo.png')}
                    />
                    <Text style = {styles.logoText} >Wellcome back</Text>
                </View>
                <View style={styles.inputInfor}>
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
                    
                </View>
                <View style={styles.boxLogin}>
                    <TouchableOpacity style={[styles.buttomLogin]} >
                        <Text style ={styles.textButtom}>
                           Đăng nhập
                        </Text>  
                    </TouchableOpacity>

                    <View style = {styles.textBox} >
                        <Text style ={styles.questionText}>
                            Chưa có tài khoản?
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.singupText}> Đăng ký</Text>
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
    imgbgr:{
        backgroundColor:'black'
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
        height:350,
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
        backgroundColor:'#6B8E81',
    }, 
    textButtom:{
        width:'100%',
        textAlign:'center',
        color:'#ffff',
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
        color:'#6B8E81',
        fontSize:16,
    }






})


