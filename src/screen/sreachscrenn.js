import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {searchMovies, removeSearchMovies} from "../Redux/features/movies/moviesSlice"
import {selectTvSearchMovies, selectMoviesStatus} from "../Redux/selector/moviesSelector";
import Icon from 'react-native-vector-icons/FontAwesome6'
import { Keyboard } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TextInput,
    FlatList
} from 'react-native'

export default function SearchScreen({ navigation }) {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [imgList, setImgList] = useState([]);
    const [keyword, setKeyword] = useState("");

    // Lắng nghe sự thay đổi của TextInput và cập nhật giá trị vào state keyword
    const handleKeywordChange = (text) => {
        setKeyword(text);
    };
    const searchStatus = useSelector(selectMoviesStatus);
    // Xử lý tìm kiếm khi người dùng nhấn nút "Search"
    const handleSearch = () => {
        if (keyword.trim() === "") {
            setError("Vui lòng nhập từ khóa tìm kiếm.");
            return;
        }
        setError("");
        dispatch(removeSearchMovies());
        dispatch(searchMovies(keyword.trim()));
        // Đóng bàn phím
        Keyboard.dismiss();
    };
    const searchResultData = useSelector(selectTvSearchMovies);
    // Cập nhật state searchResult khi dữ liệu tìm kiếm thay đổi
    useEffect(() => {
        if (searchResultData.length > 0) {
            setSearchResult(searchResultData);
        }
    }, [searchResultData]);
    useEffect(() => {
        return () => {
            setSearchResult([]);
            dispatch(removeSearchMovies());
        };
      }, [dispatch]); 
  
    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ width: '100%', height: '100%' }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.searchTab}>
                    <View style={styles.searchBox}>
                        <TextInput 
                            style={styles.searchTextInput}
                            placeholder="Tìm kiếm phim"     
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                            onChangeText={handleKeywordChange} // Lắng nghe sự thay đổi của TextInput
                            value={keyword} // Giá trị của TextInput là keyword
                            textAlign="center"
                            returnKeyType="search"
                            onSubmitEditing={handleSearch} // Xử lý tìm kiếm khi người dùng nhấn nút "Search"
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeStack')} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>
                            Hủy
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxResult}>
                    <View style= {styles.boxResultHeader}>
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                        {searchStatus === 'loading' && <Text style={styles.statusText}>Đang tải...</Text>}
                        {searchStatus === 'failed' && <Text style={styles.statusText}>Tìm kiếm thất bại. Vui lòng thử lại.</Text>}
                    </View>
                    <FlatList
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()} 
                        data={searchResult}
                        contentContainerStyle={styles.flatListContainer}
                        renderItem={({ item }) => (
                        <View style = {styles.boxItem}>
                            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Serimovie', {IdM:item.IdM})}>
                                <Image
                                    style={styles.image2}
                                    source={{uri: item.ImgIntroUrl}}
                                />
                                <View style={styles.rate}>
                                    <Text style={styles.ratePoint}>{item.Rate}</Text>
                                    <Icon
                                        name='star'
                                        size={15}
                                        color={'orange'}
                                        style={{ marginLeft: 5 }}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={styles.boxName}>
                            <Text style={styles.textname} numberOfLines={2} ellipsizeMode="tail">{item.NameMovie}</Text>
                            </View>
                        </View>
                        )}
                    />
                </View>   
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    searchTab:{
        flexDirection:'row',
    },
    boxResultHeader:{
        justifyContent: "center",

    },
    errorText:{
        color: "red",
        paddingVertical: 5,
    },
    statusText:{
        paddingVertical: 5,
        color: "red"
    }, 
    textname:{
        color: "#fff",
        textAlign: "left",
        lineHeight: 20, // Khoảng cách giữa các dòng
        maxLines: 2,
    },
    boxItem:{
        justifyContent: "center",
        alignItems: "center",
        width: 200,
    },
    boxResult:{
        flex: 1,
        justifyContent:"center"
    },
    searchTextInput:{
        backgroundColor:'#666666',
        height:40,
        width:'90%',
        borderRadius:5,
        color: "#ffff"
    },
    searchBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    cancelButton:{
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
    },
    cancelButtonText:{
        color:'white'
    },
    TouchableOpacity:{
        margin:20
    },
    image2:{
        height:200,
        width:130,
        borderRadius:5,

    },
    rate: {
        position: 'absolute',
        flexDirection: 'row',
        left: 20,
        top: 5
    },
    ratePoint: {
        color: 'orange'
    },
    boxName: {
        marginTop: 10,
        width: 160,
        height: 40,
        marginLeft: 35
    },
});
