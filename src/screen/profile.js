import React, {Component} from "react";
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
} from 'react-native';


export default Profile = ({navigation}) =>{
    return(
      
            
        <ImageBackground
            source={require("../assets/image/backgroundimg1.png")}
            style= {{width:'100%', height:'100%'}}    
        > 
         <SafeAreaView
                style={styles.container}>

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
              <View style={styles.boxuser}>
                  <Icon 
                    name='circle-user'
                    size={70}
                    color={'white'}
                  />
              </View>
              <View>
              </View>
                </View>
              <View style={styles.textName}>
                  <Text style={styles.textHeader}>
                        Lam Chi
                  </Text>
              </View>
              <View style={styles.info}>
              <TouchableOpacity onPress={() => navigation.navigate('Id')} >
              <View style={styles.row}>
             
                <View style={styles.box}>
                <Image
                          source={require("../assets/icon/user.png")}
                          style={styles.image}
                          />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.text}>
                    Thông tin tài khoản
                  </Text>
                  <Image
                    style={styles.nextIcon}
                    source={require("../assets/icon/nexticon.png")}
                  />
                </View>
            </View>
            </TouchableOpacity>

                
                      <View style={styles.row}> 
                        <View style={styles.box}>
                          <Image
                          source={require("../assets/icon/user.png")}
                          style={styles.image}
                          />
                        </View>
                        <Text style={styles.text}>
                          Lịch sử xem
                        </Text>
                        <Image
                          style={styles.nextIcon} 
                          source={require("../assets/icon/nexticon.png")}
                        />
                      </View>
                      <View style={styles.row}> 
                        <View style={styles.box}>
                          <Image
                          style={styles.image}
                          source={require("../assets/icon/user.png")}
                          />
                        </View>
                        <Text style={styles.text}>
                          Giới thiệu bạn bè
                        </Text>
                        <Image
                          style={styles.nextIcon}
                          source={require("../assets/icon/nexticon.png")}
                        />
                      </View>
                      <View style={styles.row}> 
                        <View style={styles.box}>
                          <Image
                          source={require("../assets/icon/user.png")}
                          style={styles.image}
                          />
                        </View>
                        <Text style={styles.text}>
                          Hỗ trợ
                        </Text>
                        <Image
                          style={styles.nextIcon}
                          source={require("../assets/icon/nexticon.png")}
                        />
                      </View>
              </View>
              <View style={styles.boxLogin}>
                    <TouchableOpacity style={[styles.buttomOut]} >
                        <Text style ={styles.textButtom}onPress={()=>{
                                navigation.navigate('Login');
                              }}>
                           Đăng xuất
                        </Text>  
              </TouchableOpacity>
              </View>
             
          
       
            

         </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },    
    headerBox:{
      height: 75,
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      paddingHorizontal: 30,
      alignItems: 'center',
      
    },
    textName: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        color: '#ffff',
        fontSize:16 ,
        fontWeight:'700',
        marginTop:20
    },
    row:{
      flexDirection:'row',
      marginTop:27
    },
    info:{
      marginTop:43
    },
    box:{
      backgroundColor:"#9D4C4C",
      borderRadius:5,
      width:31,
      height:27,
      justifyContent:"center",
      alignItems:"center",
      marginLeft:63,
    },
    image:{
      width:18,
      height:18

    },
    text:{
      fontSize:18,
      color:"#fff",
      marginLeft:10,
    },
    nextIcon:{
      position:'absolute',
      right:52
    },
    backIcon:{
      position:"absolute",
      left:45,
      marginTop:-15
    },
    buttomOut:{
      backgroundColor:"red",
      width:274,
      height:49,
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center"
    },
    boxLogin:{
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      marginTop:250,

    },
    textButtom:{
      width:'100%',
      textAlign:'center',
      color:'#ffff',
      fontSize:24,
      fontWeight:'700'
    },
    click:{
      marginLeft:-40,
    },
    boxuser:{
      
      alignItems: 'center', 
      justifyContent: 'center', 
      width: 75, 
      height: 75, 
      borderRadius: 75 / 2, 
      
    }
 

    
   






})