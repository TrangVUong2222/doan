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
} from 'react-native'

export default Profile = () =>{
    return(
      
            
        <ImageBackground
            source={require("../assets/image/backgroundimg.png")}
            style= {{width:'100%', height:'100%'}}    
        > 
         <SafeAreaView style={styles.container}>
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
            <View style={styles.info}>
                <View style={styles.row}>
                  <Text style ={[styles.id,styles.column1]}>
                           ID:
                  </Text>  
                  <Text style ={[styles.number,styles.column2]}>
                           23446336
                  </Text>  
                  
                </View>
                <View style={styles.row}>
                  <Text style ={[styles.name,styles.column1]}>
                           Tên hiển thị:
                  </Text>  
                  <Text style ={[styles.textname,styles.column2]}>
                           Nguyễn Thế Nam
                  </Text>  
                  <Image style={styles.nextIcon}
                      source={require("../assets/icon/nexticon.png")}
                  
                  />
                </View>
                <View style={styles.row}>
                  <Text style ={[styles.password,styles.column1]}>
                           Mật khẩu:
                  </Text>  
                  <Text style ={[styles.passwordtext,styles.column2]}>
                           ********
                  </Text>  
                  <Image style={styles.nextIcon}
                      source={require("../assets/icon/nexticon.png")}
                  />
                </View>
                <View style={styles.row}>
                  <Text style ={[styles.email,styles.column1]}>
                           Email:
                  </Text>  
                  <Text style ={[styles.textEmail,styles.column2]}>
                           thenam@gmail.com
                  </Text>  
                  <Image style={styles.nextIcon}
                      source={require("../assets/icon/nexticon.png")}
                  
                  />
                </View>
                <View style={styles.row}>
                  <Text style ={[styles.date,styles.column1]}>
                           Ngày sinh:
                  </Text>  
                  <Text style ={[styles.textdate,styles.column2]}>
                           22/04/2003
                  </Text>  
                  <Image style={styles.nextIcon}
                      source={require("../assets/icon/nexticon.png")}
                  
                  />
                </View>
                <View style={styles.row}>
                  <Text style ={[styles.sex,styles.column1]}>
                           Giới tính:
                  </Text>  
                  <Text style ={[styles.textsex,styles.column2]}>
                           Nữ
                  </Text>  
                  <Image style={styles.nextIcon}
                      source={require("../assets/icon/nexticon.png")}
                  
                  />
                </View>
            </View>
            
              
       
       
            

         </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative', 
    },
    headerBox:{
      width:'100%',
      height: 75,
      marginTop:42,
      flexDirection:'row',
      justifyContent:'center',
      paddingHorizontal:30,
      alignItems:'center',
    },    
   
    
    user: {
      justifyContent:"center"
    },
    column1:{
      width:110,
      marginLeft:38,
      fontSize:18,
      color:"#fff",
      marginBottom:21,
    },
    info:{
      flexDirection:"column",
      marginTop:65,
    },
    row:{
      flexDirection:"row",
    },
    column2:{
      fontSize:18,
      color:"#fff",
    },
    nextIcon:{
      position:"absolute",
      right:50
    },
    backIcon:{
      position:"absolute",
      left:28
    }
})