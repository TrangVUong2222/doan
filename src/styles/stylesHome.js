import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header :{
        flexDirection:'row',
        width:'100%',
        height:75, 
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,

    },
    imgLogo:{
        width:45,
        height:40,
        resizeMode:'contain',
    },
    logo:{
        height:'100%',
        justifyContent:'center',
        
    },
    searchInput:{
        textAlign:'center',
        width:'80%',
        color: 'white',
        fontSize:15,
        
        
    },
    user:{
        height:'100%',
        justifyContent:'center'

    },
    userIcon:{
        width:40,
        height:40,
        resizeMode:'contain'
    },
    boxSlide: {
        height:520,
        marginTop: 15,
    },
   
    boxCenter:{
        width:'100%',
        marginTop:15,
        justifyContent:"center",
        alignItems:"center",

    },
    
    topPic:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',

    },
    topPicItem:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#F0E3E3',
        borderRadius:7,
    },
    topPicText:{
        textAlign:'center',
        marginBottom:5,
        color:'#ffff',
    },
    content:{
        marginTop:10,

    },
    contentImgItem:{
        borderRadius:15,
        marginBottom:5,
        width:125,
        height:184,
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
    iconButtomTap:{
        color:'white'
    },
    searchContainer: {
        height:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        paddingHorizontal:10,
        width:'100%'
    },
    click:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    image1: {
        width: 300,
        height: 500,
        borderRadius: 5,
        marginRight: 15 
    },
    boxclick: {
        backgroundColor: '#FFA500',
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60
    },
    textboxclick: {
        color: 'white',
        fontSize: 20,
    },
    image2:{
        height:166,
        width:100,
        marginLeft: 15, 
        borderRadius:5,
    },
    title:{
        marginTop: 10,
        width:"100%",
        height:50,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15 
        
    },
    texttitle:{
        fontSize:15,
        color:"white",
        
    },
    texttitle1:{
        fontSize:15,
        color:"green",
        
    },
    boxbig:{
        height: 400
    },
    imageContainer: {
        position: 'relative',
        width: 334,
        height: 600,
        
    },
    buttonContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -20 }],
    },

    boxsreach:{
        height:35,
        backgroundColor:"#666666",
        width:'75%',
        borderRadius:5
    },
  
    

    
})

export default styles