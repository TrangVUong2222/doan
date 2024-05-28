import React, {Component ,useState, useEffect} from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from "react-redux";
import {selectUserInfo, selectIsLoggedIn} from "../Redux/selector/userSelector"
import {LogInCmt} from "../Component/LogInCmt"
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
import ListView from "../Component/ListView";
import { ModalDelete } from "../Component/ModalDelete";

export default Watchlist = ({navigation}) =>{
    const [isModalVisible, setModalVisible] = useState(false);
    const [checkLoginCmt,setcheckLoginCmt] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const ClickX =()=>{
        setcheckLoginCmt(false)
    }
    const tgModal = () => {
        setcheckLoginCmt(false); 
        navigation.navigate('Login')
    }
    useEffect (()=>{
        if(isLoggedIn == true){
            return
        }
        else{
            setcheckLoginCmt(true)
            return 
        }
    })
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const data = [
        {
            id: 1,
            img: require('../assets/image/51.png'),
            MovieName: 'VƯƠNG TRIỀU XÁC SỐNG 1',
            rate: 4.5,
            category: 'Hành Động, Phiêu Lưu, Hài Hước, Viễn Tưởng',
            year: '2016',
            time: '119 phút',
            tap: 'Tập 1'
        },
        {
            id: 2,
            img: require('../assets/image/51.png'),
            MovieName: 'VƯƠNG TRIỀU XÁC SỐNG 2',
            rate: 4.0,
            category: 'Hành Động, Phiêu Lưu, Hài Hước, Viễn Tưởng',
            year: '2016',
            time: '119 phút',
            tap: 'Tập 2'
        },
        // Thêm các mục khác nếu cần
    ];
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
                        <Icon
                            name='chevron-left'
                            size={25}
                            color={'white'}
                        />
                    </TouchableOpacity>
                    
                    
                        <Text style={styles.textHeading} >
                            Xem sau
                        </Text>
                    <View>
                        <Icon
                            name='plus'
                            size={25}
                            color={'red'}
                        />
                    </View>
                    <LogInCmt isVisible={checkLoginCmt} tgModal={tgModal }  ClickX = {ClickX}/>
                </View>
                
                <ListView  navigation={navigation} data={data} toggleModal={toggleModal} />
                <ModalDelete isVisible={isModalVisible} toggleModal={toggleModal} />


        
            </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
      
    },
    heading:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
    },
    textHeading:{
        fontSize:25,
        color:'white',
        fontWeight:"600"
    },
    
    
    

})


