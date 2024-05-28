import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from "react-redux";
import { Image } from 'expo-image';
import { 
  selectNewMovies, 
  selectSlideMovies, 
  selectSingleMovies, 
  selectTvSeriesMovies 
} from '../Redux/selector/moviesSelector';
import { getDataHomeMovie } from "../Redux/features/movies/moviesSlice";

import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    ScrollView,
    FlatList,
} from 'react-native';

import styles from "../styles/stylesHome";

export default function Home({ navigation}) {


    const dataNewMovie = useSelector(selectNewMovies);
    const dataSlide = useSelector(selectSlideMovies);
    const dataSingleMovie = useSelector(selectSingleMovies);
    const dataTvSeries = useSelector(selectTvSeriesMovies);

    // console.log("data", dataNewMovie)
    const itemLimitSLide = 5;
    const itemLimitAnother = 10;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataHomeMovie());
    }, [dispatch]);
    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ width: '100%', height: '100%', position: 'relative', }}
        >
            <StatusBar barStyle={"light-content"} />
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image
                            style={styles.imgLogo}
                            source={require('../assets/icon/logo1.png')}
                        />
                    </View>
                    <View style={styles.boxsreach}>
                        <TouchableOpacity style={styles.clicksreach} onPress={() => { navigation.navigate('Sreachscrenn') }}>
                            <View style={styles.searchContainer}>
                                <Text style={styles.searchInput}>
                                    Tìm kiếm phim
                                </Text>
                                <Icon
                                    name='magnifying-glass'
                                    size={20}
                                    color={'white'}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.user}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Icon
                                name='circle-user'
                                size={35}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.boxSlide}>
                        <FlatList
                            horizontal={true}
                            numColumns={1}
                            keyExtractor={(item, index) => index.toString()}
                            data={dataSlide.slice(0, itemLimitSLide)}
                            renderItem={({ item }) => (
                                <View style={styles.imageContainer}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('Serimovie',{IdM : item.IdM})
                                    }}>
                                        <Image
                                            style={[styles.image1, { marginRight : 15 }]}
                                            source={{ uri: item.ImgIntroUrl }}
                                            pagingEnabled={true}
                                           
                                        />
                                         <View style={[styles.rate, styles.rateBox]}>
                                        <Text style={[styles.ratePoint, styles.ratePointBox]}>{item.Rate}</Text>
                                        <Icon
                                            name='star'
                                            size={15}
                                            color={'orange'}
                                            style={{ marginLeft: 5 }}
                                        />
                                    </View>
                                    </TouchableOpacity>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={styles.boxclick}
                                            onPress={() => {
                                                navigation.navigate('Serimovie',{IdM : item.IdM})
                                            }}
                                        >
                                            <Text style={styles.textboxclick}>Xem ngay</Text>
                                            
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.texttitle}>
                            Phim mới
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Viewall', {Data: dataNewMovie, title:"Phim mới"})}>
                            <Text style={[styles.texttitle, styles.texttitle1]}>
                                Xem thêm
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.scroll}>
                        <FlatList
                            horizontal={true}
                            numColumns={1}
                            keyExtractor={(item, index) => index.toString()}
                            data={dataNewMovie.slice(0, itemLimitAnother)}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Serimovie',{IdM : item.IdM})
                                }}>
                                    <Image
                                        style={styles.image2}
                                        source={{ uri: item.ImgIntroUrl }}
                                    />
                                     <View style={[styles.rate, styles.rateBox]}>
                                        <Text style={[styles.ratePoint, styles.ratePointBox]}>{item.Rate}</Text>
                                        <Icon
                                            name='star'
                                            size={15}
                                            color={'orange'}
                                            style={{ marginLeft: 5 }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.texttitle}>
                            Phim nhiều tập
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Viewall',  {Data: dataTvSeries, title: "Phim nhiều tập"})}>
                            <Text style={[styles.texttitle, styles.texttitle1]}>
                                Xem thêm
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.scroll}>
                        <FlatList
                            horizontal={true}
                            numColumns={1}
                            keyExtractor={(item, index) => index.toString()}
                            data={dataTvSeries.slice(0, itemLimitAnother)}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Serimovie',{IdM : item.IdM})
                                }}>
                                    <Image
                                        style={styles.image2}
                                        source={{ uri: item.ImgIntroUrl }}
                                    />
                                     <View style={[styles.rate, styles.rateBox]}>
                                        <Text style={[styles.ratePoint, styles.ratePointBox]}>{item.Rate}</Text>
                                        <Icon
                                            name='star'
                                            size={15}
                                            color={'orange'}
                                            style={{ marginLeft: 5 }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.texttitle}>
                            Phim lẻ
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Viewall',  {Data: dataSingleMovie, title:"Phim lẻ"})}>
                            <Text style={[styles.texttitle, styles.texttitle1]}>
                                Xem thêm
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.scroll}>
                        <FlatList
                            horizontal={true}
                            numColumns={1}
                            keyExtractor={(item, index) => index.toString()}
                            data={dataSingleMovie.slice(0, itemLimitAnother)}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => { navigation.navigate('Serimovie',{IdM : item.IdM}) }}>
                                    <Image
                                        style={styles.image2}
                                        source={{ uri: item.ImgIntroUrl }}
                                    />
                                    <View style={[styles.rate, styles.rateBox]}>
                                        <Text style={[styles.ratePoint, styles.ratePointBox]}>{item.Rate}</Text>
                                        <Icon
                                            name='star'
                                            size={15}
                                            color={'orange'}
                                            style={{ marginLeft: 5 }}
                                        />
                                    </View>
                                </TouchableOpacity>
                                
                            )}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}
