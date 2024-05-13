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
    FlatList,
} from 'react-native'


import styles from "../styles/stylesHome";

export default function Home({ navigation }) {
    const [imgList, setImgList] = useState([]);
    const [imgContentList, setImgContenList] = useState([]);

    useEffect(() => {
        const data = [
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
            {
                img: require('../assets/image/121.png')
            },
        ];
        setImgList(data);
    }, []);

    useEffect(() => {
        const dataContent = [
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
            {
                image: require('../assets/image/51.png')
            },
        ];
        setImgContenList(dataContent);

    }, [])

    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ width: '100%', height: '100%', position: 'relative', }}
        >
            <StatusBar barStyle={"light-content"} />
            <SafeAreaView style={styles.container}>
                <View
                    style={styles.header}
                >
                    <View
                        style={styles.logo}
                    >
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
                            data={imgList}
                            renderItem={({ item }) => (
                                <View style={styles.imageContainer}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('Serimovie')
                                    }}>
                                        <Image
                                            style={[styles.image1, { marginRight: 15 }]}
                                            source={item.img}
                                            pagingEnabled={true}
                                        />
                                        <View style={styles.rate}>
                                            <Text style={styles.ratePoint}>10</Text>
                                            <Icon
                                                name='star'
                                                size={25}
                                                color={'orange'}
                                                style={{ marginLeft: 5 }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={styles.boxclick}
                                            onPress={() => {
                                                navigation.navigate('Serimovie')
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
                        <TouchableOpacity onPress={() => navigation.navigate('Viewall')}>
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
                            data={imgList}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Serimovie')
                                }}>
                                    <Image
                                        style={styles.image2}
                                        source={item.img}
                                    />
                                    <View style={[styles.rate, styles.rateBox]}>
                                        <Text style={[styles.ratePoint, styles.ratePointBox]}>10</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Viewall')}>
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
                            data={imgList}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Serimovie')
                                }}>
                                    <Image
                                        style={styles.image2}
                                        source={item.img}
                                    />
                                    <View style={[styles.rate, styles.rateBox]}>
                                        <Text style={[styles.ratePoint, styles.ratePointBox]}>10</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Viewall')}>
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
                            data={imgList}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => { /* Xử lý khi ảnh được nhấn */ }}>
                                    <Image
                                        style={styles.image2}
                                        source={item.img}
                                    />
                                    <View style={[styles.rate, styles.rateBox]}>
                                        <Text style={[styles.ratePoint, styles.ratePointBox]}>10</Text>
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
    )
}
