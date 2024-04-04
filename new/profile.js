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
} from 'react-native';


export default Profile = () =>{
    return(
      
            
        <ImageBackground
            source={require("../assets/image/backgroundimg.png")}
            style= {{width:'100%', height:'100%'}}    
        > 
         <SafeAreaView
                style={styles.container}
          >
              <View style={styles.headerBox}>
                  <Image
                    source={require("../assets/icon/backicon.png")}
                    style={styles.backIcon}
                    />
                  <Image
                    source={require("../assets/icon/user1.png")}
                    style={styles.user}
                  />
                </View>
              <View style={styles.textName}>
                  <Text style={styles.textHeader}>
                        Lam Chi
                  </Text>
              </View>
              <View style={styles.info}>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Image 
                        source={require("../assets/icon/user.png")}
                        style={styles.image}
                        />
                      </View>
                        <Text style={styles.text}>
                                Thông tin tài khoản
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
                        <Text style ={styles.textButtom}>
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
        width:'100%',
        height: 75,
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:30,
        alignItems:'center',
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
      left:44,
    },
    buttomOut:{
      backgroundColor:"#6B8E81",
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

    }
    
   






})