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
    Dimensions,
} from 'react-native'

import styles from '../styles/stylesDetailMovie';


export default detaiMovie = () => {
    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <SafeAreaView
                style={styles.container}
            >
                <View style={styles.headerBox}>
                    <Image
                        source={require('../assets/icon/backicon.png')}
                        style={styles.backIcon}
                    />
                    <Text style={styles.textHeader}>
                        Chi tiết
                    </Text>

                    <Image
                        source={require('../assets/icon/loveiconwhite.png')}
                    />


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


                <View
                    style={styles.infoBox}

                >
                    <View style={styles.imgPlace}>
                        <Image
                            source={require('../assets/image/51.png')}
                            style={styles.smallImg}
                        />
                    </View>
                    <View style={styles.infoPlace}>
                        <Text style={styles.name}>Mật vụ ong</Text>

                        <View style={styles.rate}>

                            <Image
                                source={require('../assets/icon/Star.png')}
                            />
                            <Text style={styles.ratePoint}>10.0</Text>
                        </View>


                    </View>
                    <View
                        style={styles.bonusInfo}
                    >
                        <View style={[styles.year, styles.bonusItem]}>
                            <Image
                                style={styles.iconYear}
                                source={require('../assets/icon/year.png')}

                            />
                            <Text style={[styles.yearText, styles.bonusText]}>2024</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../assets/icon/line2.png')}
                            />
                        </View>
                        <View style={[styles.time, styles.bonusItem]}>
                            <Image
                                style={styles.iconTime}
                                source={require('../assets/icon/Wallclock.png')}

                            />
                            <Text style={[styles.timeTex, styles.bonusText]}>120 min</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../assets/icon/line2.png')}
                            />
                        </View>
                        <View style={[styles.genre, styles.bonusItem]}>
                            <Image
                                style={styles.icongenre}
                                source={require('../assets/icon/Stackofpapers.png')}

                            />
                            <Text style={[styles.genreText, styles.bonusText]}>2024</Text>
                        </View>

                    </View>


                </View>

                <View style={styles.middleBox}>
                    <View style={styles.topPic}>
                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Giới thiệu
                            </Text>
                            <Image
                                source={require('../assets/icon/line4.png')}
                            />
                        </View>

                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Diễn viên
                            </Text>
                            <Image
                                source={require('../assets/icon/line4.png')}
                            />
                        </View>

                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Bình Luận
                            </Text>
                            <Image
                                source={require('../assets/icon/line4.png')}
                            />
                        </View>
                    </View>


                    <View style = {styles.topPicContent}>
                        <Text style =  {styles.texIntroduce}>
                        Bộ phim "Người nuôi ong trả thù" kể về hành trình trả thù của một người đàn ông đơn độc. Jason Statham vào vai Adam Clay, một người nuôi ong sống cô độc. Anh rất gắn bó với bà chủ nhà, người duy nhất coi anh như người thân. Tuy nhiên, một bi kịch xảy ra khi bà qua đời, rồi theo đó là sự thật đằng sau cái chết của bà. Đau đớn và phẫn nộ, Adam quyết tâm trả thù bằng một kế hoạch tàn khốc. Anh khéo léo lần mò tìm ra bằng chứng, rồi tiêu diệt từng mắt xích trong đường dây lừa đảo lớn đã gây ra bi kịch cho cuộc đời mình. Bộ phim với nhịp độ gay cấn kịch tính khắc họa nỗi đau và lòng trả thù của con người, đồng thời hé lộ từng chút một về quá khứ bí ẩn của nhân vật chính.
                        </Text>

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
