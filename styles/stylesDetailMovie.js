import React ,{Component} from "react";
import {
    StyleSheet,
    Dimensions,

} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const heightPoster = windowWidth/1.8;
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative',    
    },
    headerBox:{
        width:'100%',
        height: 75,

        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        alignItems:'center'
    },
    textHeader:{
        color: '#ffff',
        fontSize:18 ,
        fontWeight:'700',
    },
    posterBox:{
        width: windowWidth,
        height:heightPoster,

    },
    poster:{
        width:'100%',
        height:'100%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    playIcon: {
        position: 'absolute',
        width:55,
        height:55,
        top:(heightPoster-55)/2,
        right:(windowWidth-55)/2,
    },
    
    imgPlace:{
        marginLeft: 36
    },
    smallImg:{
        width:100,
        height:126,
        borderRadius:16,
        marginRight:20
    },
    infoPlace:{
        marginTop:20,
        flex:1
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        marginBottom:10,
        backgroundColor:'blue'
    },
    rate:{
        flexDirection:'row'
    },
    ratePoint:{
        marginLeft: 5,
        color:'#FF8700',

    },
 
    topPic:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        paddingHorizontal:20,

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
    name:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        marginBottom:10,
        flexWrap:'wrap',
        width:'80%',
        
        
    },
    nameMovie:{
        paddingHorizontal:20,
        marginTop:10,
        backgroundColor:'#1B1B1B',
        height:90
       
    },
    infomovie:{
        flexDirection:'row',

    },
    textinfo:{
        color:'white',
        marginHorizontal:10
    },
    rowname:{
         flexDirection:'row'
    },
    boxnumber:{
        flex:1,
        backgroundColor:'#808090',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        
    },
    textboxnumber:{
        color:'white',
        fontSize:15
    },
   
    boxcomment:{
        alignItems:'flex-start',
        justifyContent:'center',
        height:50,
        paddingHorizontal:20,
       
    },
    textboxcomment:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    underbox:{
        flex:1,
        
    },
    usercomment:{
        paddingHorizontal:30,

    },
    boxdisplay:{
        
        backgroundColor:'#1B1B1B',
        height:50,
        borderRadius:5,
        paddingHorizontal:10
        
    },
    textboxdisplay:{
        color:'#787878'
    },
    boxusercomment:{
        flexDirection:'row',
      
        marginTop:15
        
        
    },
    usernamedisplay:{
        color:'white'
    },
    boxcmtaction:{
        flexDirection:'column',
    },
    action:{
        flexDirection:'row',
        
    },
    icon:{
        marginRight:20
    },
    boxinputcmt:{
        backgroundColor:'#666666',
        height:40,
        width:'80%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    myboxcmt:{
        flexDirection:'row',
        height:35,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    }
    
    
    








    



})


export default styles