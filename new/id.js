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
} from 'react-native'

export default Id = ({navigation}) =>{
    return(
      
            
        <ImageBackground
            source={require("../assets/image/backgroundimg1.png")}
            style= {{width:'100%', height:'100%'}}    
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
                  <View>
                <Icon 
                    name='circle-user'
                    size={70}
                    color={'white'}
                  />
                  </View>
                  <View>
                  </View>
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
      marginTop:15,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:30
     
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
      marginLeft:-150,
      marginTop:-15
    }
})