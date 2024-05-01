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
} from 'react-native'
import detailMovie from "./detailMovie";

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
    const [isPickLoveClicked, setIsPickLoveClicked] = useState(false);
    const [isAddPickClicked, setIsAddPickClicked] = useState(false);
    const [clicktitle, setClicktitle] = useState(gioithieu);

    const handlePickLoveClick = () => {
        setIsPickLoveClicked(!isPickLoveClicked);
    };

    const handleAddPickClick = () => {
        setIsAddPickClicked(!isAddPickClicked);
    };

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
                    <View style={styles.boxbackicon}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                        <Icon
                        name='chevron-left'
                        size={25}
                        color={'white'}
                        />
                        </TouchableOpacity>
                    </View> 
                    <Text style={styles.textHeader}>Chi tiết</Text>
                    <TouchableOpacity style={styles.picklove} onPress={handlePickLoveClick}>
                        <Icon
                            name='heart'
                            size={30}
                            color={isPickLoveClicked ? 'white' : 'red'}
                        />
                    </TouchableOpacity>
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
                                <Text numberOfLines={2}  style={styles.name}>{shortenText("Mật vụ ong", 25)}</Text>
                            </View>
                            <View style={styles.addpick}>
                                <TouchableOpacity onPress={handleAddPickClick}>
                                    <Icon
                                        name='plus'
                                        size={30}
                                        color={isAddPickClicked ? 'white' : 'red'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.boxinfo}>
                            <ScrollView contentContainerStyle={styles.scrollView} con>
                                <View style={styles.rate}>
                                    <Image
                                        source={require('../assets/icon/Star.png')}
                                    />
                                    <Text style={styles.ratePoint}>10.0</Text>
                                </View>
                                <Text style={styles.textbox}>Trạng thái : 1102 tập</Text>
                                <Text style={styles.textbox}>Sắp chiếu: Tập 1103 Vietsub</Text>
                                <Text style={styles.textbox}>Đạo diễn : Konosuke Uda, Munehisa Sakai, Mamoru Hosoda</Text>
                                <Text style={styles.textbox}>Thời lượng: 25 phút / tập</Text>
                                <Text style={styles.textbox}>Tình trạng: Phim đang chiếu</Text>
                                <Text style={styles.textbox}>Ngôn ngữ: Phụ đề Việt</Text>
                                <Text style={styles.textbox}>Năm sản xuất: 1999</Text>
                                <Text style={styles.textbox}>Quốc gia: Nhật Bản</Text>
                                <Text style={styles.textbox}>Thể loại: Phiêu Lưu - Hành Động, Hoạt Hình, Hài Hước</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                
                <View style={styles.bodyunder}>
                    
                    <ScrollView style={styles.scrollepisode}>
                    <View style={styles.episode}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 16</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 17</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 18</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 19</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 21</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 22</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 23</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={styles.clickepisode}>
                        <Text style={styles.textepisode}>Tập 24</Text>
                    </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
                <View style={styles.middleBox}>

                    <View style={styles.topPic}>
                        <TouchableOpacity onPress = {() =>{setClicktitle(gioithieu)}}style={styles.title}>
                        <View style={styles.topPicItem}>
                            <Text style={styles.topPicText}>
                                Giới thiệu
                            </Text>
                            <Image
                                source={require('../assets/icon/line4.png')}
                            />
                        </View>
                        </TouchableOpacity>
                       
                           
                        
                        <TouchableOpacity onPress = {() =>{setClicktitle(dienvien)}}style={styles.title}>
                           
                        <View style={styles.topPicItem}>
                        
                            <Text style={styles.topPicText}>
                                Diễn viên
                            </Text>
                            <Image
                                source={require('../assets/icon/line4.png')}
                            />
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
        paddingHorizontal: 30,
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
    textbox: {
        color: "white"
    },
    boxinfo: {
        height: 120,
        width: 250,
    },
    miniboxinfo: {
        flexDirection: 'column',
    },
    scrollView: {
        height:200,
    },
    smallImg: {
        borderRadius: 5,
        margin: 20
    },
    boxname: {
        marginTop: 20,
        
        height:70
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
        height:200
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
        marginTop:5,
        width:'100%',
    },
    topPic:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        

    },
    topPicItem:{
      
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
        paddingHorizontal:30,
        marginTop:15
    },
    

   
});
