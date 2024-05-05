import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';


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
    KeyboardAvoidingView
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
            style={{ flex:1 }}
        >
            <KeyboardAvoidingView behavior="padding"
                style={{flex: 1}}
                keyboardVerticalOffset={100}
            >
            <ScrollView>
                <SafeAreaView
                style={styles.container}
            >
                <View style={styles.headerBox}>
                    <View style={styles.boxbackicon}>
                        <TouchableOpacity  onPress={() => navigation.goBack()}>
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
                <View style ={styles.MiddelBox}>
                    <View style={styles.BoxName}> 
                        <View style={styles.BoxNamesub}>
                            <Text numberOfLines={1} style={styles.NameText}>
                                {shortenText("Mật vụ ong ", 40)}
                            </Text>
                        </View>
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
                        
                    </View>
                    <View style={styles.genre}>
                    
                        <Text style={styles.textinfo}>
                        {shortenText("Phiêu Lưu - Hành Động, Hoạt Hình, Hài Hước ", 40)}
                        </Text>
                    </View>
                    <View style = {styles.BoxIconPlus}>
                        <TouchableOpacity>
                            <Icon
                                name="plus"
                                size={30}
                                color= "#ffff"
                            />
                        </TouchableOpacity>
                    </View>
                
                </View>
                
                <View style = {styles.boxcomment}>
                    <Text style={styles.HeadingTextComment}>Comment</Text>
                    <View style ={styles.AddComment}>
                        <View style= {styles.AddcmHeader}>
                        <View style ={[styles.sub, styles.userBoxImg]}>
                            <Image 
                                style ={styles.ImgUser}
                                source={require("../assets/icon/user.png")}
                            />
                        </View>
                        <View style ={styles.sub}>
                            <Text style= {styles.AddcmUsText}>UserName</Text>
                        </View>
                        </View>         
                        </View>  
                            <View style= {styles.AddRate}>
                                <Text style={styles.RateText}>Danh gia:</Text>
                                <TextInput
                                    style={styles.RateValue}
                                
                                />
                            </View>     
                        <View style ={styles.AddCommentContent}>
                        <View style ={styles.BoxContent}>
                            <TextInput
                                placeholder="Viet gi do ...."
                                placeholderTextColor="#ffff"
                                style={styles.CommentText}
                            />
                            <View>
                                <Icon
                                    style={styles.PlaneIcon}
                                    name="paper-plane"
                                    color="#ffff"
                                    size={25}

                                
                                />
                            </View>

                        </View>
                        
                    </View>
                                                 
                    <View style ={styles.Comment}>
                        <View style={styles.CommentItem}>
                            <View style = {styles.ItemInfor}>
                                <View style = {styles.ItemLeft}>
                                    <Image
                                        source={require("../assets/icon/user.png")}
                                    />

                                </View>
                                <View style ={styles.ItemRight}>
                                    <View style ={styles.ItemRightSub}>
                                        <Text>UserName</Text>
                                    </View>
                                    <View style ={styles.ItemRightSub}>
                                        <Text style={styles.UserRated}>10</Text>
                                        <Image
                                            style={styles.StarIcon}
                                            source={require("../assets/icon/Star.png")}
                                        />

                                    </View>
                            

                                </View>

                            </View>
                            <View style= {styles.ItemCommentContent}>
                                <Text>hnaihoifhdoidhdosndsjhdy</Text>

                            </View>
                        </View>


                    </View>

                </View>
                    
                </SafeAreaView>
            </ScrollView>
            </KeyboardAvoidingView>

        </ImageBackground>
    )
}