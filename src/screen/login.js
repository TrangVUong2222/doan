import React, { Component, useState } from "react";
import axios from "axios";
import { checkUserName, checkPassWord, checkSigIn } from "../Validation/LoginValidation";

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
import { toggleModal, ModalSignIn } from '../Component/ModalSignIn'

export default Login = ({ navigation }) => {
    const [username, setusername] = useState(null)
    const [password, setpassword] = useState(null)
    const [ErrorMessUs, setErrorMessUs] = useState(null)
    const [ErrorMessPW, setErrorMessPW] = useState(null)
    const [checkLogin, setCheckLogin] = useState(false);

    const tgModal = () => {
        setCheckLogin(false);
    }

    const handBulerUserName = (username) => {
        var checkuserName = checkUserName(username)
        if (checkuserName != true) {
            setErrorMessUs(checkuserName)
        }
        else {
            setErrorMessUs(null)
        }
    }

    const handBulerPassWord = (password) => {
        var checkpassWord = checkPassWord(password)
        if (checkpassWord != true) {
            setErrorMessPW(checkpassWord)
        }
        else {
            setErrorMessPW(null)

        }
    }

    const handleLogin = () => {
        const data = {
            UserName: "jhn_doe",
            Password: "Pass@1234",
        };

        axios.post("https://de53-118-71-137-232.ngrok-free.app/api/Account/SignIn", data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => {
                return res.data
            })
            .then((rs) => {
                console.log(rs)

            })
            .catch(error => {
                console.log("Error during login:", error);
                setCheckLogin(true);

            });
    };




    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <StatusBar barStyle={"light-content"} />
            <SafeAreaView style={styles.container}>

                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/icon/logo1.png')}
                    />
                    <Text style={styles.logoText} >Wellcome back</Text>
                </View>
                <View style={styles.inputInfor}>
                    <View>{
                        ErrorMessUs && (<View >
                            <Text style={styles.textvalidation}>{ErrorMessUs}</Text>

                        </View>)
                    }

                    </View>
                    <View style={styles.infor}>
                        <Image
                            style={[styles.icon, styles.emailicon]}
                            source={require('../assets/icon/Vector.png')}
                        />
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Nhập tên đăng nhập"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onChangeText={text => setusername(text)}
                            onBlur={() => handBulerUserName(username)}

                        />
                    </View>
                    <View >
                        {
                            ErrorMessPW && (
                                <View>
                                    <Text style={styles.textvalidation}>{ErrorMessPW}</Text>

                                </View>
                            )
                        }
                    </View>
                    <View style={styles.infor}>
                        <Image
                            style={[styles.icon, styles.passwordicon]}
                            source={require('../assets/icon/pwicon.png')}
                        />
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Mật khẩu"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onChangeText={text => setpassword(text)}
                            onBlur={() => handBulerPassWord(password)}
                            secureTextEntry={true}

                        />
                    </View>

                </View>
                <View style={styles.boxLogin}>
                    <TouchableOpacity onPress={() => handleLogin()} disabled={checkSigIn(username, password) ? false : true} style={[styles.buttomLogin]} >
                        <Text style={styles.textButtom}>
                            Đăng Nhập
                        </Text>
                    </TouchableOpacity>
                    <ModalSignIn toggleModal={toggleModal} isVisible={checkLogin} tgModal={tgModal} />

                    <View style={styles.textBox} >
                        <Text style={styles.questionText}>
                            Chưa có tài khoản?
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.singupText} onPress={() => {
                                navigation.navigate('Sigup');
                            }}>Đăng ký</Text>
                        </TouchableOpacity>
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
        alignItems: 'center'
    },
    boxImg: {
        width: '100%',
        height: 'auto',

    },
    boxLogo: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: '700',
        color: 'white'
    },

    loginimg: {
        width: '100%',
        height: 350,
        resizeMode: 'stretch',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,

    },
    inputInfor: {
        width: '70%',
        paddingHorizontal: 20,
        paddingVertical: 12,

    },
    infor: {
        flexDirection: 'row',
        marginVertical: 12,


    },
    icon: {
        position: 'absolute',
        top: 18,
        marginLeft: 10,
        resizeMode: 'stretch'

    },
    passwordicon: {
        marginTop: -4,

    },

    textInput: {
        width: '100%',
        height: 50,
        paddingHorizontal: 50,
        borderWidth: 1,
        borderColor: '#ffff',
        borderRadius: 10,
        color: '#ffff'
    },
    boxLogin: {
        width: '70%',
        paddingHorizontal: 20,
        // paddingVertical:10,
        flexDirection: 'column',
        // justifyContent:'center',
        alignItems: 'center',

    },
    buttomLogin: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ffff',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'red',

    },
    textButtom: {
        width: '100%',
        textAlign: 'center',
        color: '#ffff',
        fontSize: 24,
        fontWeight: '700'
    },
    textBox: {
        marginTop: 10,
        flexDirection: 'row',

    },
    questionText: {
        color: '#ffff'
    },
    singupText: {
        marginLeft: 5,
        color: 'red',
        fontSize: 16,
    },
    textvalidation: {
        color: 'red'
    },
    logo: {
        width: 100,
        height: 100
    }





})


