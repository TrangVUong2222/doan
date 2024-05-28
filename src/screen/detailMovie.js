import React, { useState, useRef, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from "react-redux";
import {addEpisode} from "../Redux/features/episodes/episodesSlice";
import {selectEpisodeByIdMAndOrder, selectAllEpisodes} from "../Redux/selector/episodesSelector";
import { selectMovieById, selectAllMovies } from "../Redux/selector/moviesSelector";
import axios, { all } from "axios";
import { getListDataComments, addComment } from "../Redux/features/comments/commentsSlice";
import {selectCommentsByEpisodeId,selectAllComments} from "../Redux/selector/commentsSelector";
import {selectUserInfo, selectIsLoggedIn} from "../Redux/selector/userSelector";
import { Image } from 'expo-image';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
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
import { PiNavigationArrowDuotone } from "react-icons/pi";
import userSlice from "../Redux/features/user/userSlice";


const DetailMovie = ({ navigation, route }) => {
    const [error, setError] = useState("");
    const [newCmtRate, setNewCmtRate]= useState()
    const [newCmtContent, setNewCmtContent]= useState("")
    const [IdE, setIdE] = useState(null)
    const [poster, setPoster] =useState("https://th.bing.com/th/id/OIP.CYhAyZpflySpEFKNywH1egHaEK?rs=1&pid=ImgDetMain");
    const [linkVideo,setLinkVideo]=useState("http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4");
    const [dataCmt, setDataCmt]= useState([])
    const [isPlayClicked, setIsPlayClicked] = useState(false);
    const dispatch = useDispatch();
    const IdM = route.params.IdM;
    const Order = route.params.Order;
    const episode = useSelector(selectEpisodeByIdMAndOrder(IdM, Order))
    const user = useSelector(selectUserInfo)
    const movie = useSelector(selectMovieById(IdM))
    useEffect(() => {
        if (episode) {
            setIdE(episode.IdE); 
            setPoster(movie.ImgPosterUrl)
            setLinkVideo(episode.VideoUrl)
            dispatch(getListDataComments(episode.IdE));
        }
    }, [dispatch, episode, IdM]);
    const dataComment = useSelector(selectCommentsByEpisodeId(IdE));

    const prevDataCommentLength = useRef(dataComment.length);
    // const allcmt = useSelector(selectAllComments)
    // console.log("dataallcmt: ",allcmt)
    useEffect(() => {
        // console.log(dataComment);
        if (dataComment.length !== prevDataCommentLength.current) {
            setDataCmt(dataComment);
            prevDataCommentLength.current = dataComment.length;
        }
    }, [dataComment]);
    const tgModal = () => {
        setcheckLoginCmt(false); 
        navigation.navigate('Login')
    }
    const ClickX =()=>{
        setcheckLoginCmt(false)
    }
    const [checkLoginCmt,setcheckLoginCmt] = useState(false);
    
    const playVideo1 = () => {   
        setIsPlayClicked(true);
    };
    // const posterUrl = 'https://th.bing.com/th/id/OIP.CYhAyZpflySpEFKNywH1egHaEK?rs=1&pid=ImgDetMain'; 

    const videoRef = useRef(null);
    const playVideo = async () => {
        if (videoRef.current) {
            await videoRef.current.playAsync();
        }
    };
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.setStatusAsync({ shouldPlay: false }).then(() => {
                videoRef.current.loadAsync({ uri: linkVideo }, {}, false).then(() => {
                    videoRef.current.playAsync();
                });
            });
        }
    }, [linkVideo]);

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
    const clickBoxComment = () =>{
        setClickComment(true);
        setIsUpIcon(false);
    }

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
    // useEffect(()=>{
    //     console.log(newCmtContent)
    //     console.log(newCmtRate)
    // },[newCmtContent, newCmtRate])
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const KiemtraLogin= (infoUser) => {
        if (infoUser == false){
            return false
        }else{
            return true
            
        }
    };
    
    // console.log("IdU",user.IdU)
    const handleCommentSubmit = () => {
        let checklogin = KiemtraLogin(isLoggedIn);
        console.log(isLoggedIn);
        // console.log(newCmtContent)
        if (checklogin) {
            if (newCmtContent.trim() === ""|| newCmtContent.trim() === null) {
                setError("Vui lòng nhập bình luận!");
                return;
            }

            if (newCmtRate === 0 || newCmtRate === null) {
                setError("Vui lòng thêm giá trị cho phần đánh giá!");
                return;
            }
            

            const commentData = {
                IdU: user.IdU, // Assuming you have user id
                IdE: episode.IdE,
                Content: newCmtContent.trim(),
                Rate: newCmtRate,
            };
            dispatch(addComment(commentData))
            .then(() => {
                dispatch(getListDataComments(episode.IdE)); // Cập nhật danh sách bình luận sau khi thêm
            });
            setNewCmtContent('');
            setNewCmtRate(0);
            setError('');
        } else {
            setcheckLoginCmt(true);
        }
    };
    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ flex: 1 }}
        >
         <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} >
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerBox}>
                    <TouchableOpacity onPress={() => navigation.navigate("Serimovie", {IdM: IdM})}>
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
                            source={{ uri: linkVideo }}
                            usePoster={true}
                            posterSource={{ uri: poster }} 
                            posterStyle={{
                            resizeMode: "stretch",
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
                                        {shortenText(movie.NameMovie, 40)}
                                    </Text>
                                </View>
                                <View style={styles.boxnumber}>
                                    <Text style={styles.textboxnumber}>
                                        Tập {Order}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.infomovie}>
                                <Text style={styles.textinfo}>
                                   {episode.ReleaseDate == null || undefined ?  'N/A': episode.ReleaseDate} 
                                </Text>
                                <Icon
                                    name='grip-lines-vertical'
                                    size={15}
                                    color={'white'}
                                />
                                <Text style={styles.textinfo}>
                                    {episode.Duration} min
                                </Text>
                                
                            </View>
                            <View style={styles.genre}>
                                <Text style={styles.textinfo}>
                                    {shortenText(movie.Genre.join(', '), 40)}
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
                            <ListEpisodes navigation={navigation} numberOfEpisodes={movie.Episode} IdM ={IdM} />
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
                                    <Text style={styles.AddcmUsText}>{user.username == "" || null ? "User Name": user.username}</Text>
                                </View>
                            </View>
                            <View style={styles.AddRate}>
                                <Text style={styles.textdanhgia}> Đánh giá</Text>
                                <View style={styles.rate}>
                                    <StarRating
                                        rating={newCmtRate}
                                        setRating={setNewCmtRate}
                                    />
                                </View>
                            </View>
                            <View>
                                {error && (
                                    <Text style={{ color: 'red' }}>
                                        {error}
                                    </Text>
                                )}
                            </View>
                            <View style={styles.AddCommentContent}>
                                <View style={styles.BoxContent}>
                                    <TextInput
                                        placeholder="Viết bình luận...."
                                        placeholderTextColor="#ffff"
                                        style={styles.CommentText}
                                        value={newCmtContent}
                                        onChangeText={setNewCmtContent}
                                        onPress={()=> clickBoxComment()}
                                    />
                                    <View>
                                        <TouchableOpacity onPress={() => handleCommentSubmit()}>
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
                            <ListComment data={dataCmt}/>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

export default DetailMovie;
