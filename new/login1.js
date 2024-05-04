import React, {Component, useState, useEffect} from "react";
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
    KeyboardAvoidingView,
} from 'react-native';

import {checkUserName, checkPassWord, checkSigIn} from "../Validation/LoginValidation"

export default Login = () =>{

    const [username, setusername]  = useState('')
    const [password, setpassword] = useState('')
    const [ErrorMessUs, setErrorMessUs] = useState('')
    const [ErrorMessPW, setErrorMessPW] = useState('')
    const [checkUs, setCheckUs] =useState(true)
    const [checkPW, setCheckPW] = useState(true)

    const handBulerUserName=(username)=>{
        var checkuserName = checkUserName(username)
        if (checkuserName != true){
            setErrorMessUs(checkuserName)
            setCheckUs(false)
        }
        else{setCheckUs(true)
            setErrorMessUs("")
            
        }
    }
   
    const handBulerPassWord=(password)=>{
        var checkpassWord = checkPassWord(password)
        if (checkpassWord != true){
            setErrorMessPW(checkpassWord)
            setCheckPW(false)
        }

        else{setCheckPW(true)
            setErrorMessPW('')
        
        }
    }
    
    
     return(
        <ImageBackground
            source={require('../assets/image/backgroundimg.png')}
            style= {{width:'100%', height:'100%'}}    
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
                <View>
                    <View>
                        {
                            !checkUs && (<View>
                            <Text>{ErrorMessUs}</Text>

                        </View>)
                            

                        }

                    </View>
                        
                    <View style = {styles.infor}>

                        <Image
                            style ={[styles.icon,styles.emailicon]}
                            source={require('../assets/icon/Vector.png')}
                        />
                        

                        </View>
                        
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Nhập Usename của bạn"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onChangeText={text => setusername(text)}
                            onBlur={() => handBulerUserName(username)}
                        /> 
                        
                                            
                    </View>
                    <View style = {styles.infor}>
                        <View>
                        {
                            !checkPW && (
                            <View>
                                <Text>{ErrorMessPW}</Text>

                            </View>
                            )

                        }
                        </View>
                        <Image
                            style ={[styles.icon,styles.passwordicon]}
                            source={require('../assets/icon/pwicon.png')}
                        />
                        
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Mật khẩu"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onChangeText={text => setpassword(text)}
                            onBlur={()=>handBulerPassWord(password)}

                        />                       
                    </View>
                    
                </View>
                <View style={styles.boxLogin}>
                    <TouchableOpacity 
                        
                        onPress={() => navigation.navigate('Home')}
                    
                        style={[styles.buttomLogin]}
                    >
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
        marginTop: 20,
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


