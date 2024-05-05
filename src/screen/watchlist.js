import React, {Component} from "react";
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

export default Watchlist = ({navigation}) =>{
    return(
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style= {{width:'100%', height:'100%'}}    
        >
            <SafeAreaView
                style={styles.container}
            >
            <StatusBar barStyle={"light-content"}/>
                <View style={styles.heading}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            style={styles.Imgbackicon}
                            source={require('../assets/icon/backicon.png')}
                        />
                    </TouchableOpacity>
                    
                    
                        <Text style={styles.textHeading} >
                            Xem sau
                        </Text>
                </View>
                <ScrollView style={styles.scrollView}>
                <View style={styles.boxlist}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')}>
                    <View style={styles.boxItem}>
                        <Image
                        style={styles.imgitem}
                        source={require('../assets/image/51.png')}
                        />
                        <View style={styles.info}>
                            <Text style={styles.textName}>
                                One Piece
                            </Text>
                            <View style={styles.rowstar}>
                                <Image
                                    style={styles.iconstart}
                                    source={require('../assets/icon/Star.png')}
                                />
                                <Text style={styles.numbeStar}>
                                    9
                                </Text>
                            </View>
                            <View style={styles.rowCategory}>
                                <Image
                                    style={styles.iconCategory}
                                    source={require('../assets/icon/Stackofpapers.png')}
                                />
                                <Text style={styles.textCategory}>
                                    Anime
                                </Text>
                            </View>
                            <View style={styles.rowDate}>
                                <Image
                                    style={styles.iconDate}
                                    source={require('../assets/icon/year.png')}
                                />
                                <Text style={styles.textDate}>
                                    1999
                                </Text>
                            </View>
                            <View style={styles.rowTime}>
                                <Image
                                    style={styles.iconTime}
                                    source={require('../assets/icon/Wallclock.png')}
                                />
                                <Text style={styles.textTime}>
                                    24min
                                </Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Serimovie')}>
                    <View style={styles.boxItem}>
                        <Image
                        style={styles.imgitem}
                        source={require('../assets/image/51.png')}
                        />
                        <View style={styles.info}>
                            <Text style={styles.textName}>
                                One Piece
                            </Text>
                            <View style={styles.rowstar}>
                                <Image
                                    style={styles.iconstart}
                                    source={require('../assets/icon/Star.png')}
                                />
                                <Text style={styles.numbeStar}>
                                    9
                                </Text>
                            </View>
                            <View style={styles.rowCategory}>
                                <Image
                                    style={styles.iconCategory}
                                    source={require('../assets/icon/Stackofpapers.png')}
                                />
                                <Text style={styles.textCategory}>
                                    Anime
                                </Text>
                            </View>
                            <View style={styles.rowDate}>
                                <Image
                                    style={styles.iconDate}
                                    source={require('../assets/icon/year.png')}
                                />
                                <Text style={styles.textDate}>
                                    1999
                                </Text>
                            </View>
                            <View style={styles.rowTime}>
                                <Image
                                    style={styles.iconTime}
                                    source={require('../assets/icon/Wallclock.png')}
                                />
                                <Text style={styles.textTime}>
                                    24min
                                </Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Serimovie')}>
                    <View style={styles.boxItem}>
                        <Image
                        style={styles.imgitem}
                        source={require('../assets/image/51.png')}
                        />
                        <View style={styles.info}>
                            <Text style={styles.textName}>
                                One Piece
                            </Text>
                            <View style={styles.rowstar}>
                                <Image
                                    style={styles.iconstart}
                                    source={require('../assets/icon/Star.png')}
                                />
                                <Text style={styles.numbeStar}>
                                    9
                                </Text>
                            </View>
                            <View style={styles.rowCategory}>
                                <Image
                                    style={styles.iconCategory}
                                    source={require('../assets/icon/Stackofpapers.png')}
                                />
                                <Text style={styles.textCategory}>
                                    Anime
                                </Text>
                            </View>
                            <View style={styles.rowDate}>
                                <Image
                                    style={styles.iconDate}
                                    source={require('../assets/icon/year.png')}
                                />
                                <Text style={styles.textDate}>
                                    1999
                                </Text>
                            </View>
                            <View style={styles.rowTime}>
                                <Image
                                    style={styles.iconTime}
                                    source={require('../assets/icon/Wallclock.png')}
                                />
                                <Text style={styles.textTime}>
                                    24min
                                </Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Serimovie')}>
                    <View style={styles.boxItem}>
                        <Image
                        style={styles.imgitem}
                        source={require('../assets/image/51.png')}
                        />
                        <View style={styles.info}>
                            <Text style={styles.textName}>
                                One Piece
                            </Text>
                            <View style={styles.rowstar}>
                                <Image
                                    style={styles.iconstart}
                                    source={require('../assets/icon/Star.png')}
                                />
                                <Text style={styles.numbeStar}>
                                    9
                                </Text>
                            </View>
                            <View style={styles.rowCategory}>
                                <Image
                                    style={styles.iconCategory}
                                    source={require('../assets/icon/Stackofpapers.png')}
                                />
                                <Text style={styles.textCategory}>
                                    Anime
                                </Text>
                            </View>
                            <View style={styles.rowDate}>
                                <Image
                                    style={styles.iconDate}
                                    source={require('../assets/icon/year.png')}
                                />
                                <Text style={styles.textDate}>
                                    1999
                                </Text>
                            </View>
                            <View style={styles.rowTime}>
                                <Image
                                    style={styles.iconTime}
                                    source={require('../assets/icon/Wallclock.png')}
                                />
                                <Text style={styles.textTime}>
                                    24min
                                </Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>

                </View>
                </ScrollView>
               


        
            </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
    },
    heading:{
        width:"100%",
        height:'10%',
      
        flexDirection:'row',
        alignItems:'center'
    },
    textHeading:{
        marginLeft:120,
        fontSize:24,
        color:'white'
    },
    Imgbackicon:{
        marginLeft:36,
    },
    boxItem:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30,
        marginLeft:-45,
    },
    info:{
        marginLeft:26,
    },
    imgitem:{
        borderRadius:15,
    },
    textName:{
        fontSize:25,
        color:'white',
        marginLeft:8,
    },
    numbeStar:{
        color:'#FF8700',
        fontSize:15,
        marginLeft:8,
    },
    textCategory:{
        color:'white',
        fontSize:15,
        marginLeft:8,
    },
    textDate:{
        color:'white',
        fontSize:15,
        marginLeft:8,
    },
    textTime:{
        color:'white',
        fontSize:15,
        marginLeft:8,
    },
    rowstar:{
        flexDirection:'row',
        marginTop:10,
    },
    rowCategory:{
        flexDirection:'row',
        marginTop:10,
    },
    rowDate:{
        flexDirection:'row',
        marginTop:10,
    },
    rowTime:{
        flexDirection:'row',
        marginTop:10,
    },
    scrollView:{
        width:'100%'
    },
    

})


