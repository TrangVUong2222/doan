import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView    
} from 'react-native'
import ListEpisodes from "../Component/ListEpisodes";
import ListComment from "../Component/ListComment";
import styles from '../styles/stylesDetailMovie';
import StarRating from  '../Component/StarRating';


const DetailMovie = ({ navigation }) => {
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
                        <View style={styles.boxbackicon}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
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
                    
                    <View style={styles.posterBox}>
                        <Image
                            source={require('../assets/image/poster.png')}
                            style={styles.poster}
                        />
                        <Image
                            style={styles.playIcon}
                            source={require('../assets/icon/playicon.png')}
                        />
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
                                        <Icon
                                            style={styles.PlaneIcon}
                                            name="paper-plane"
                                            color="#ffff"
                                            size={25}
                                        />
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
