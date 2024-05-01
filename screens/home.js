import React, { useEffect, useState } from "react";
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
} from 'react-native'

import styles from "../styles/stylesHome";

export default function Home() {
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
            source={require('../assets/image/backgroundimg.png')}
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
                            source={require('../assets/icon/logo.png')}
                        />
                    </View>
                    <View
                        style={styles.searchBar}
                    >
                        <TextInput
                            style={styles.searchInput}
                            placeholder="search"
                            placeholderTextColor="rgba(255, 255, 255, 0.8)"
                        />
                        <Image
                            style={styles.searchIcon}
                            source={require('../assets/icon/search.png')}
                        />
                    </View>
                    <View
                        style={styles.user}
                    >
                        <Image
                            style={styles.userIcon}
                            source={require('../assets/icon/user.png')}
                        />
                    </View>
                </View>
                <View
                    style={styles.boxSlide}
                >
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ width: 900, height: 240 }}
                        style={styles.slideImg}
                        showsHorizontalScrollIndicator={false}
                    >
                        {imgList.map((item, index) => (
                            <Image key={index} source={item.img} style={styles.slideImgItem} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.boxCenter}>
                    <View style={styles.topPic}>
                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Xem ngay
                            </Text>
                            <Image
                                source={require('../assets/icon/line.png')}
                            />
                        </View>

                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Sắp ra mắt
                            </Text>
                            <Image
                                source={require('../assets/icon/line.png')}
                            />
                        </View>
                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Hot
                            </Text>
                            <Image
                                source={require('../assets/icon/line.png')}
                            />
                        </View>
                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Phổ biến
                            </Text>
                            <Image
                                source={require('../assets/icon/line.png')}
                            />
                        </View>
                    </View>

                    <View style={styles.content}>
                        <ScrollView
                            horizontal={false}
                            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', height: 1500, justifyContent: 'space-around', marginTop: 10 }}
                            showsVerticalScrollIndicator={false}
                        >
                            {imgContentList.map((item, index) => (
                                <Image key={index} source={item.image} style={styles.contentImgItem} />
                            ))}

                        </ScrollView>
                        

                    </View>
                    


                </View>
                <View style={styles.BoxbuttonTap}>
                    <View style={styles.buttonTapItem}>
                        <Image
                            style={styles.iconButtomTap}
                            source={require('../assets/icon/homeicon.png')}

                        />
                        <Text style={styles.textButtonTap}>Trang chủ</Text>

                    </View>
                    <View style={styles.buttonTapItem}>
                        <Image
                            style={styles.iconButtomTap}
                            source={require('../assets/icon/loveicon.png')}

                        />
                        <Text style={styles.textButtonTap}>Trang chủ</Text>

                    </View>
                    <View style={styles.buttonTapItem}>
                        <Image
                            style={styles.iconButtomTap}
                            source={require('../assets/icon/Openbook.png')}

                        />
                        <Text style={styles.textButtonTap}>Trang chủ</Text>

                    </View>

                </View>



            </SafeAreaView>
        </ImageBackground>
    )
}