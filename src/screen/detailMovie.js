import React, { useState, useRef, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import axios from "axios";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Modal,

} from 'react-native'
import {LogInCmt, toggleModal} from '../Component/LogInCmt'
import { Video } from 'expo-av';
import ListEpisodes from "../Component/ListEpisodes";
import ListComment from "../Component/ListComment";
import styles from '../styles/stylesDetailMovie';
import StarRating from  '../Component/StarRating';
import { ScreenOrientation } from 'expo';


const DetailMovie = ({ navigation }) => {
    const [isPlayClicked, setIsPlayClicked] = useState(false);
    const tgModal = () => {
        setcheckLoginCmt(false); 
        navigation.navigate('Login')
    }
    const ClickX =()=>{
        setcheckLoginCmt(false)
    }

    const infoUser =false;

    const [checkLoginCmt,setcheckLoginCmt] = useState(false);


    const KiemtraLogin= (infoUser) => {
        if (infoUser == false){
            setcheckLoginCmt(true);
        }else{
            console.log('khong co j')
            
        }
    };

    const playVideo1 = () => {
      
        setIsPlayClicked(true);
    };
    const posterUrl = 'https://th.bing.com/th/id/OIP.CYhAyZpflySpEFKNywH1egHaEK?rs=1&pid=ImgDetMain'; 
    const videoUrl = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
    const videoRef = useRef(null);
    const playVideo = async () => {
        if (videoRef.current) {
            await videoRef.current.playAsync();
        }
    };

    const enterFullScreen = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };
    const [isUpIcon, setIsUpIcon] = useState(true); 
    const [isPickLoveClicked, setIsPickLoveClicked] = useState(false);
    const [isPickAddClicked, setIsPickAddClicked] = useState(false);
    const [clickComment, setClickComment] = useState(false);

    const handleIconPress = () => {
        setIsUpIcon(!isUpIcon); 
    };

    const handlePickLoveClick = () => {
        setIsPickLoveClicked(!isPickLoveClicked);
    };

    const handlePickAddClick = () => {
        setIsPickAddClicked(!isPickAddClicked);
    };

    const toggleComment = () => {
        setClickComment(!clickComment);
        handleIconPress();
    };
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };


                
               
                
                // axios.get('https://de53-118-71-137-232.ngrok-free.app/api/DetailMovie/InForMovie', {
                // params: queryParams
                // })
                // .then(response => {
                //     return response.data
                // })
                // .then(res =>{
                //     console.log(res.data);
                // })
                // .catch(error => {
                // // Xử lý lỗi ở đây
                // console.error(error);
                // });

    useEffect (() => {
        const queryParams = {
            Id: 'ad789fcf-95c1-4c63-a391-00dae7a30347',
            
            };

        axios.get('https://de53-118-71-137-232.ngrok-free.app/api/DetailMovie/InForMovie', {
            params: queryParams
            })
            .then(response => {
                return response.data
            })
            .then(res =>{
                console.log(res);
            })
            .catch(error => {
            // Xử lý lỗi ở đây
            console.log(error.messenge);
            });

    })


    const data1 = [
        { id: 1, name: 'Episode 1' },
        { id: 2, name: 'Episode 2' },
        { id: 3, name: 'Episode 3' },
        { id: 4, name: 'Episode 1' },
        { id: 5, name: 'Episode 2' },
        { id: 6, name: 'Episode 3' },
        { id: 7, name: 'Episode 1' },
        { id: 8, name: 'Episode 2' },
        { id: 9, name: 'Episode 3' },
        // Add more data items if needed
    ];

    const data = [
        {
            id: 1,
            UserName: 'John Doe',
            UserRate: 4,
            UserComment: 'This movie was amazing!'
        },
        {
            id: 2,
            UserName: 'Jane Smith',
            UserRate: 5,
            UserComment: 'I loved every moment of it!'
        },
        {
            id: 3,
            UserName: 'Alex Johnson',
            UserRate: 3,
            UserComment: 'It was okay, but could be better.'
        },
        // Add more items as needed
    ];

    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ flex: 1 }}
        >
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={100}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.boxbackicon}>
                                <Icon
                                    name='chevron-left'
                                    size={25}
                                    color={'white'}
                                />
                        </View>
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>
                            Chi tiết
                        </Text>
                        <TouchableOpacity style={styles.picklove} onPress={handlePickLoveClick}>
                            <View style={styles.boxbackicon}>
                            <Icon
                                name='heart'
                                size={30}
                                color={isPickLoveClicked ? 'red' : 'white'}
                            />
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.posterBox}>
                        <Video
                            ref={videoRef}
                            source={{ uri: videoUrl }}
                            usePoster={true}
                            posterSource={{ uri: posterUrl }} 
                            posterStyle={{
                            resizeMode: 'cover',
                            }}
                            style={styles.video}
                            useNativeControls={true}
                            resizeMode="cover"
                            onFullscreenUpdate={enterFullScreen}
                            isMuted={false} 
                        />
                        {!isPlayClicked && (
                    <TouchableOpacity onPress={() => {playVideo1(); playVideo();}} style={styles.playIcon1}>
                    <Icon
                        name='circle-play'
                        size={60}
                        color='white'
                        style={styles.playIcon}
                    />
                </TouchableOpacity>
            )}
                    </View>
                    {!clickComment && (
                        <View style={styles.MiddelBox}>
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
                            <View style={styles.BoxIconPlus}>
                                <TouchableOpacity onPress={handlePickAddClick}>
                                    <Icon
                                        name="plus"
                                        size={30}
                                        color={isPickAddClicked ? 'red' : 'white'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    {!clickComment && (
                        <View style={styles.bodyunder}> 
                            <ListEpisodes navigation={navigation} data={data1}/>
                        </View>
                    )}
                    <View style={styles.boxcomment}>
                        <View style={styles.boxclick}>
                            <Text style={styles.HeadingTextComment}>Comment</Text>
                            <View></View>
                            <TouchableOpacity onPress={toggleComment}>
                                {isUpIcon ? (
                                    <Icon
                                        name="chevron-up"
                                        size={30}
                                        color={'white'}
                                    />
                                ) : (
                                    <Icon
                                        name="angle-down"
                                        size={30}
                                        color={'white'}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.AddCommentBox}>
                            <View style={styles.AddcmHeader}>
                                <View style={[styles.sub, styles.userBoxImg]}>
                                    <Icon
                                        name='circle-user'
                                        size={35}
                                        color={'white'}
                                    />
                                </View>
                                <View style={styles.sub}>
                                    <Text style={styles.AddcmUsText}>UserName</Text>
                                </View>
                            </View>
                            <View style={styles.AddRate}>
                                <Text style={styles.textdanhgia}> Đánh giá</Text>
                                <View style={styles.rate}>
                                    <StarRating/>
                                </View>
                            </View>
                            <View style={styles.AddCommentContent}>
                                <View style={styles.BoxContent}>
                                    <TextInput
                                        placeholder="Viết bình luận...."
                                        placeholderTextColor="#ffff"
                                        style={styles.CommentText}
                                    />
                                    <View>
                                        <TouchableOpacity onPress={() => KiemtraLogin(infoUser)}>
                                        <Icon
                                            style={styles.PlaneIcon}
                                            name="paper-plane"
                                            color="#ffff"
                                            size={25}
                                        />
                                        <LogInCmt isVisible={checkLoginCmt} tgModal={tgModal }  ClickX = {ClickX}
                                        />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.CommentList}>
                            <ListComment data={data} />
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

export default DetailMovie;
