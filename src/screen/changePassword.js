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
           <View style={styles.head}>
                <Image
                    source={require("../assets/icon/backicon.png")}    
                    style={styles.backicon}            
                />
                 <Text style={styles.heading}>
                    Đổi mật khẩu

                 </Text>
           </View>
           <View style={styles.textbox}>
                <View style={styles.minibox}>
                    <Image
                    source={require("../assets/icon/pwicon.png")}
                    style={styles.pwicon}
                    />
                     <TextInput
                        style={[styles.textInput]}
                        placeholder="Mật khẩu cũ"
                        placeholderTextColor="rgba(255, 255, 255, 0.8)"

                    />  
                </View>
                <View style={styles.minibox}>
                <Image
                    source={require("../assets/icon/pwicon.png")}
                    style={styles.pwicon}
                    />
                      <TextInput
                        style={[styles.textInput]}
                        placeholder="Mật khẩu mới"
                        placeholderTextColor="rgba(255, 255, 255, 0.8)"
                    />  
                    
                </View>
                <View style={styles.minibox}>
                <Image
                    source={require("../assets/icon/pwicon.png")}
                    style={styles.pwicon}
                    />
                     <TextInput
                        style={[styles.textInput]}
                        placeholder="Nhập lại mật khẩu mới"
                        placeholderTextColor="rgba(255, 255, 255, 0.8)"

                    />  
                </View>
                <View style={styles.boxchange}>
                    <TouchableOpacity style={[styles.buttomchange]} >
                        <Text style ={styles.textButtom}>
                           Đổi mật khẩu
                        </Text>  
                    </TouchableOpacity>
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
    head:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontSize:18,
        color:"#fff"
    },
    backicon:{
        position:"absolute",
        left:28,
    },

   password:{
        fontSize:18,
        color:"#fff"

   },
   textInput:{
    width:'100%',
    height:50,
    paddingHorizontal:50,
    borderWidth:1,
    borderColor:'#ffff',
    borderRadius:10,
    color:'#ffff'
    },
    textbox:{
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:12,
        marginTop:101,
        justifyContent:"center",
        alignItems:"center"
    },
    minibox:{
        flexDirection:'row',
        marginVertical:12,
        justifyContent:"center",
        alignItems:"center",
        marginTop:51,
        width:"80%",
       
    
    },
    pwicon:{
        position : "absolute",
        left:20
    },
    buttomchange:{
        marginTop:40,
        width:300,
        borderWidth:1,
        borderColor:'#ffff',
        borderRadius:10,
        height:70,
        justifyContent:'center',
        backgroundColor:'#6B8E81',
    },
    textButtom:{
        width:'100%',
        textAlign:'center',
        color:'#ffff',
        fontSize:24,
        fontWeight:'700'
    }


    
})