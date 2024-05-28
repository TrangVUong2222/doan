import React, {Component, useEffect} from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from "react-redux";
import {selectUserInfo, selectIsLoggedIn} from "../Redux/selector/userSelector"
import axios from 'axios';
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
} from 'react-native';


export default Profile = ({navigation}) => {
    const user = useSelector(selectUserInfo)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    // console.log(user)
    return(
        <ImageBackground
            source={require("../assets/image/backgroundimg1.png")}
            style={{width:'100%', height:'100%'}}
        > 
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox}>
                    <View style={styles.boxbackicon}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                            <Icon
                                name='chevron-left'
                                size={25}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>  
                    <View style={styles.boxuser}>
                        <Icon 
                            name='circle-user'
                            size={70}
                            color={'white'}
                        />
                    </View>
                    <View></View>
                </View>
                <View style={styles.textName}>
                    <Text style={styles.textHeader}>
                       {isLoggedIn == true ? user.username : "user name" }
                    </Text>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity onPress={() => navigation.navigate('Id')}>
                        <View style={styles.row}>
                            <View style={styles.box}>
                                <Icon 
                                    name='circle-user'
                                    size={30}
                                    color={'white'}
                                />
                            </View>
                            <View style={styles.boxtext}>
                                <Text style={styles.text}>
                                    Thông tin tài khoản
                                </Text>
                            </View>
                            <View style={styles.boxIcon}>
                                <Icon 
                                    name='chevron-right'
                                    size={25}
                                    color={'white'}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.row}> 
                        <View style={styles.box}>
                            <Icon 
                                name='circle-user'
                                size={30}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxtext}>
                            <Text style={styles.text}>
                                Lịch sử xem
                            </Text>
                        </View>
                        <View style={styles.boxIcon}>
                            <Icon 
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.row}> 
                        <View style={styles.box}>
                            <Icon 
                                name='circle-user'
                                size={30}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxtext}>
                            <Text style={styles.text}>
                                Giới thiệu bạn bè
                            </Text>
                        </View>
                        <View style={styles.boxIcon}>
                            <Icon 
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.row}> 
                        <View style={styles.box}>
                            <Icon 
                                name='circle-user'
                                size={30}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxtext}>
                            <Text style={styles.text}>
                                Hỗ trợ
                            </Text>
                        </View>
                        <View style={styles.boxIcon}>
                            <Icon 
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.boxLogin}>
                    <TouchableOpacity style={[styles.buttomOut]} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.textButtom}>
                            Đăng {isLoggedIn == true ? "xuất" : "nhập"}
                        </Text>  
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },    
    headerBox:{
        height: 75,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    textName: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        color: '#ffff',
        fontSize: 25,
        fontWeight: '700',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-around',
    },
    info: {
        marginTop: 43,
    },
    box: {
        backgroundColor: "#9D4C4C",
        borderRadius: 5,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        left: 35,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        marginLeft: 10,
    },
    buttomOut: {
        backgroundColor: "red",
        width: 274,
        height: 49,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    boxLogin: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 250,
    },
    textButtom: {
        width: '100%',
        textAlign: 'center',
        color: '#ffff',
        fontSize: 24,
        fontWeight: '700',
    },
    boxuser: {
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 75, 
        height: 75, 
        borderRadius: 75 / 2, 
    },
    boxtext: {
        width: 200,
    },
});