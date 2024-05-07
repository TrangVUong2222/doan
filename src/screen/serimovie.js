import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Icon from 'react-native-vector-icons/FontAwesome6';
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
} from 'react-native';
import ViewSession  from '../Component/ViewSession'
import ListEmpisodes from "../Component/ListEpisodes";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const heightPoster = windowWidth / 1.8;
const gioithieu = 'gioithieu';
const dienvien = 'dienvien';


const ViewGioiThieu = () =>{
    return(
        <View style={styles.viewtitle}>
            <ScrollView>
            <Text style={styles.texttitle}>
            Bộ phim "Người nuôi ong trả thù" kể về hành trình trả thù của một người đàn ông đơn độc. Jason Statham vào vai Adam Clay, một người nuôi ong sống cô độc. Anh rất gắn bó với bà chủ nhà, người duy nhất coi anh như người thân. Tuy nhiên, một bi kịch xảy ra khi bà qua đời, rồi theo đó là sự thật đằng sau cái chết của bà. Đau đớn và phẫn nộ, Adam quyết tâm trả thù bằng một kế hoạch tàn khốc. Anh khéo léo lần mò tìm ra bằng chứng, rồi tiêu diệt từng mắt xích trong đường dây lừa đảo lớn đã gây ra bi kịch cho cuộc đời mình. Bộ phim với nhịp độ gay cấn kịch tính khắc họa nỗi đau và lòng trả thù của con người, đồng thời hé lộ từng chút một về quá khứ bí ẩn của nhân vật chính.
            </Text>
            </ScrollView>
        </View>
    )
}
const ViewDienvien = () =>{
    return(
        <View style={styles.viewtitle}>
            <Text style={styles.texttitle}>
            Konosuke Uda, Munehisa Sakai, Mamoru Hosoda
            </Text>
        </View>
    )
}



export default function SeriMovie({ navigation }) {

    const data = [
        { id: 1, name: 'Episode 1' },
        { id: 2, name: 'Episode 2' },
        { id: 3, name: 'Episode 3' },
        { id: 4, name: 'Episode 1' },
        { id: 5, name: 'Episode 2' },
        { id: 6, name: 'Episode 3' },
        { id: 7, name: 'Episode 1' },
        { id: 8, name: 'Episode 2' },
        { id: 9, name: 'Episode 3' },
        
    ];
    const data1 = [
        { id: 1, name: 'Session 1' },
        { id: 2, name: 'Session 2' },
        { id: 3, name: 'Session 3' },
        { id: 4, name: 'Session 4' },
        
    ];
    

    const [clicktitle, setClicktitle] = useState(gioithieu);

    const [imgList, setImgList] = useState([]);
    const [imgContentList, setImgContentList] = useState([]);

    useEffect(() => {
        const data = [
            { img: require('../assets/image/121.png') },
            { img: require('../assets/image/121.png') },
            { img: require('../assets/image/121.png') },
            { img: require('../assets/image/121.png') },
            { img: require('../assets/image/121.png') },
        ];
        setImgList(data);
    }, []);

    useEffect(() => {
        const dataContent = [
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
            { image: require('../assets/image/51.png') },
        ];
        setImgContentList(dataContent);
    }, []);

    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <ImageBackground
            source={require('../assets/image/backgroundimg1.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                    <View style={styles.boxbackicon}>
                       
                        <Icon
                        name='chevron-left'
                        size={25}
                        color={'white'}
                        />
                       
                    </View> 
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Chi tiết</Text>
                   <View style={styles.boxbackicon}></View>
                </View>
                               
                <View style={styles.boxbody}>
                    <View style={styles.imgPlace}>
                        <Image
                            source={require('../assets/image/51.png')}
                            style={styles.smallImg}
                        />
                    </View>
                    <View style={styles.miniboxinfo}>
                        <View style={styles.boxadd}>
                            <View style={styles.boxname}> 
                                <Text numberOfLines={2}  style={styles.name}>{shortenText("Mật vụ ong ", 25)}</Text>
                            </View>
                            <View style={styles.addpick}>
                            
                            </View>
                        </View>
                        <View style={styles.boxinfo}>
                            
                                <View style={styles.rate}>
                                    <Text style={styles.ratePoint}>10</Text>
                                    <Icon 
                                        name='star'
                                        size={15}
                                        color={'orange'}
                                        style={{ marginLeft: 5 }}
                                    />
                                </View>
                                <View style={styles.BoxTextInfo}>
                                    <View style={styles.textRow}>
                                        <Icon 
                                            name='thermometer'
                                            size={15}
                                            color={'white'}
                                            style={{ marginLeft: 5 }}
                                        />
                                        <Text style={styles.textInfo}>Hoàn thành</Text>
                                    </View>
                                    <View style={styles.textRow}>
                                        <Icon 
                                            name='layer-group'
                                            size={15}
                                            color={'white'}
                                            style={{ marginLeft: 5 }}
                                        />
                                        <Text style={styles.textInfo} numberOfLines={1}>Hành Động, Phiêu Lưu, Hài Hước, Viễn Tưởnga sdas asdadas ádda</Text>
                                    </View>
                                    <View style={styles.textRow}>
                                        <Icon 
                                            name='calendar-days'
                                            size={15}
                                            color={'white'}
                                            style={{ marginLeft: 5 }}
                                        />
                                        <Text style={styles.textInfo}>2020</Text>
                                    </View>
                                    {/* <View style={styles.textRow}>
                                    <Icon 
                                        name='clock'
                                        size={15}
                                        color={'white'}
                                        style={{ marginLeft: 5 }}
                                    />
                                    <Text style={styles.textInfo}>162 phút</Text>
                                    </View> */}
                                </View>
                                
                                
                            
                        </View>
                    </View>
                </View>
                <View >  
                    
                    <ViewSession data={data1}/>

                   
                </View>
               
             
                <View style={styles.bodyunder}> 
                    
                    <ListEmpisodes navigation={navigation} data={data}/>
                    
                </View>
                <View style={styles.middleBox}>

                    <View style={styles.topPic}>
                        <TouchableOpacity onPress = {() =>{setClicktitle(gioithieu)}}style={styles.title}>
                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Giới thiệu
                            </Text>
                            { (clicktitle == gioithieu) &&(
                           <View style={styles.line}></View>)}
                        </View>
                        </TouchableOpacity>
                       
                           
                        
                        <TouchableOpacity onPress = {() =>{setClicktitle(dienvien)}}style={styles.title}>
                           
                        <View style={styles.topPicItem}>
                        
                            <Text style={styles.topPicText}>
                                Diễn viên
                            </Text>
                            { (clicktitle == dienvien) &&(
                            <View style={styles.line}></View>
                            )}
                        </View>
                        
                        </TouchableOpacity>
                            
                            
                        
                       
                    </View>
                    <View style = {styles.info}>
                        {clicktitle === dienvien && <ViewDienvien/>
                        }
                         {clicktitle === gioithieu && 
                        <ViewGioiThieu/>  }
                    </View>
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
    headerBox: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    textHeader: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: '700',
    },
    posterBox: {
        width: windowWidth,
        height: heightPoster,
    },
    poster: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    playIcon: {
        position: 'absolute',
        width: 55,
        height: 55,
        top: (heightPoster - 55) / 2,
        right: (windowWidth - 55) / 2,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    boxbody: {
        flexDirection: 'row',
    },
    ratePoint: {
        marginLeft: 5,
        color: '#FF8700',
    },
    rate: {
        flexDirection: 'row'
    },
    boxinfo: {
        height: 120,
        width: 250,
    },
    miniboxinfo: {
        flexDirection: 'column',
    },
   
    smallImg: {
        borderRadius: 5,
        margin: 20
    },
    boxname: {
        marginTop:20,
        height:'auto',
        maxHeight:100,
    },
    boxadd: {
        flexDirection: 'row',
    },
    addpick: {
        marginTop: 25,
        marginLeft: 25
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        marginBottom:10,
        flexWrap:'wrap',
        width:180,
    },
    bodyunder:{
        width:"100%",
        height:90,
        justifyContent:'center',
        alignItems:'center'
    },
    clickepisode:{
        backgroundColor:'#808090',
        margin:12,
        width:80,
        height:40,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        
    },
    episode:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    textepisode:{
        color:'white',
    },
    middleBox:{
        marginTop:30,
        width:'100%',
        
    },
    topPic:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center'
        

    },
    topPicItem:{
        marginHorizontal: 50
      
    },
    topPicText:{
        textAlign:'center',
        marginBottom:5,
        color:'#ffff',
    },
    topPicContent:{
        width:'100%',
        height:'auto',
        paddingHorizontal:30,
        marginTop:10,
    },
    texIntroduce:{
        color:'#ffff',
        fontSize: 14,
    },
    BoxbuttonTap:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#2222',
        width:'100%',
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderColor:'black',
        borderTopWidth:2,
        borderEndEndRadius:30,
        backgroundColor:'black',
    },
    buttonTapItem:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    textButtonTap:{
        color:'#ffff',

    },
     click:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    texttitle:{
        color:'white'
    },
    viewtitle:{
        width:'100%',
        paddingHorizontal:30,
        marginTop:15
    },
    row:{
       width:'100%',flexDirection: "row", flexWrap:"Wrap"
    },
    line:{
        backgroundColor:'red',
        height:3,
        borderRadius:10,
        
    },
    textRow:{
        flexDirection:'row',
        marginTop:8
    },
    textInfo:{
        color:'white', 
        marginLeft:5,
        maxWidth:'90%',  
    },
    boxbackicon:{
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center'
    }

   
});
