import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import { Keyboard } from 'react-native';
import { KeyboardAvoidingView} from 'react-native';
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
    ScrollView,
    Dimensions,
} from 'react-native'

import styles from '../styles/stylesDetailMovie';


export default DetaiMovie = ({navigation}) => {

    const [isPickLoveClicked, setIsPickLoveClicked] = useState(false);
    
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };
    const handlePickLoveClick = () => {
        setIsPickLoveClicked(!isPickLoveClicked);
    };
    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <SafeAreaView
                style={styles.container}
            >
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

                    <Text style={styles.textHeader}>
                        Chi tiết
                    </Text>
                    <TouchableOpacity style={styles.picklove} onPress={handlePickLoveClick}>
                        <Icon
                            name='heart'
                            size={30}
                            color={isPickLoveClicked ? 'red' : 'white'}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.posterBox}
                >
                    <Image
                        source={require('../assets/image/poster.png')}
                        style={styles.poster}
                    />
                    <Image
                        style={styles.playIcon}
                        source={require('../assets/icon/playicon.png')}
                    />
                </View>
                <View style={styles.nameMovie}> 
                <View style={styles.rowname}>
                <Text numberOfLines={1} style={styles.name}>
                    {shortenText("Mật vụ ong ", 40)}
                </Text>
                <View style={styles.boxnumber}>
                    <Text style={styles.textboxnumber}>
                        Tập 1
                    </Text>
                </View>

                </View>

                <View style={styles.infomovie}>
                
                    <Text style={styles.textinfo}>
                        2024
                    </Text>
                    <Icon
                        name='grip-lines-vertical'
                        size={15}
                        color={'white'}
                        
                    />
                    <Text style={styles.textinfo}>
                        55 phút
                    </Text>
                    <Icon
                        name='grip-lines-vertical'
                        size={15}
                        color={'white'}
                    />
                    <Text style={styles.textinfo}>
                        Việt Nam
                    </Text>
                    <Icon
                        name='grip-lines-vertical'
                        size={15}
                        color={'white'}
                    />
                </View>
                <View style={styles.infomovie}>
                
                    <Text style={styles.textinfo}>
                    Phiêu Lưu - Hành Động, Hoạt Hình, Hài Hước
                    </Text>
                </View>
                </View>
                <View style={styles.boxcomment}>
                    <Text style={styles.textboxcomment}>
                        Bình luận
                    </Text>
                </View>
                    <ScrollView style={styles.scrollcomment}>
                    <View style={styles.bigboxcomment}>
                    <View style={styles.boxusercomment}>
                        <View style={styles.usercomment}>
                            <Icon 
                                name='circle-user'
                                size={40}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxcmtaction}>
                        <View style={styles.boxdisplay}>
                                <Text style={styles.usernamedisplay}>
                                    Người ẩn danh
                                </Text>
                                <Text style={styles.textboxdisplay}>
                                    phim hay xuất sắc
                                </Text>
                        </View>
                        <View style={styles.action}>
                            <Icon 
                                name='thumbs-up'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                            <Icon 
                                name='comments'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                        </View>
                        </View>
                        
                    </View>
                    <View style={styles.boxusercomment}>
                        <View style={styles.usercomment}>
                            <Icon 
                                name='circle-user'
                                size={40}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxcmtaction}>
                        <View style={styles.boxdisplay}>
                                <Text style={styles.usernamedisplay}>
                                    Người ẩn danh
                                </Text>
                                <Text style={styles.textboxdisplay}>
                                    phim hay xuất sắc
                                </Text>
                        </View>
                        <View style={styles.action}>
                            <Icon 
                                name='thumbs-up'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                            <Icon 
                                name='comments'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                        </View>
                        </View>
                        
                    </View>
                    <View style={styles.boxusercomment}>
                        <View style={styles.usercomment}>
                            <Icon 
                                name='circle-user'
                                size={40}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxcmtaction}>
                        <View style={styles.boxdisplay}>
                                <Text style={styles.usernamedisplay}>
                                    Người ẩn danh
                                </Text>
                                <Text style={styles.textboxdisplay}>
                                    phim hay xuất sắc
                                </Text>
                        </View>
                        <View style={styles.action}>
                            <Icon 
                                name='thumbs-up'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                            <Icon 
                                name='comments'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                        </View>
                        </View>
                        
                    </View>
                    <View style={styles.boxusercomment}>
                        <View style={styles.usercomment}>
                            <Icon 
                                name='circle-user'
                                size={40}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxcmtaction}>
                        <View style={styles.boxdisplay}>
                                <Text style={styles.usernamedisplay}>
                                    Người ẩn danh
                                </Text>
                                <Text style={styles.textboxdisplay}>
                                    phim hay xuất sắc
                                </Text>
                        </View>
                        <View style={styles.action}>
                            <Icon 
                                name='thumbs-up'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                            <Icon 
                                name='comments'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                        </View>
                        </View>
                        
                    </View>
                    <View style={styles.boxusercomment}>
                        <View style={styles.usercomment}>
                            <Icon 
                                name='circle-user'
                                size={40}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxcmtaction}>
                        <View style={styles.boxdisplay}>
                                <Text style={styles.usernamedisplay}>
                                    Người ẩn danh
                                </Text>
                                <Text style={styles.textboxdisplay}>
                                    phim hay xuất sắc
                                </Text>
                        </View>
                        <View style={styles.action}>
                            <Icon 
                                name='thumbs-up'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                            <Icon 
                                name='comments'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                        </View>
                        </View>
                        
                    </View>
                    <View style={styles.boxusercomment}>
                        <View style={styles.usercomment}>
                            <Icon 
                                name='circle-user'
                                size={40}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxcmtaction}>
                        <View style={styles.boxdisplay}>
                                <Text style={styles.usernamedisplay}>
                                    Người ẩn danh
                                </Text>
                                <Text style={styles.textboxdisplay}>
                                    phim hay xuất sắc
                                </Text>
                        </View>
                        <View style={styles.action}>
                            <Icon 
                                name='thumbs-up'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                            <Icon 
                                name='comments'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                        </View>
                        </View>
                        
                    </View>
                    <View style={styles.boxusercomment}>
                        <View style={styles.usercomment}>
                            <Icon 
                                name='circle-user'
                                size={40}
                                color={'white'}
                            />
                        </View>
                        <View style={styles.boxcmtaction}>
                        <View style={styles.boxdisplay}>
                                <Text style={styles.usernamedisplay}>
                                    Người ẩn danh
                                </Text>
                                <Text style={styles.textboxdisplay}>
                                    phim hay xuất sắc
                                </Text>
                        </View>
                        <View style={styles.action}>
                            <Icon 
                                name='thumbs-up'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                            <Icon 
                                name='comments'
                                size={30}
                                color={'white'}
                                style={styles.icon}
                            />
                        </View>
                        </View>
                        
                    </View>
                    </View>
                    </ScrollView>
                    
                    <View style={styles.myboxcmt}>
                        <Icon 
                            name='user-circle'
                            size={30}
                            color={'white'}
                            style={styles.icon}
                        />
                        <View style={styles.boxinputcmt}>
                        <TextInput style={styles.sreachtexinput}
                            placeholder="Viết bình luận..."
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onBlur={Keyboard.dismiss}
                            returnKeyType="send"
                            onSubmitEditing={() => {
                              
                            }}
                        />
                        </View>

                        </View>
               


               

                
                

            </SafeAreaView>

        </ImageBackground>
    )
}