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
        flex:1, 
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
    MiddelBox:{
        marginTop:20,
        width:'100%',
        height:100,
        backgroundColor:"#1b1b1b"
    },
    BoxName:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
        alignItems:'center'
        
    },
    BoxNamesub:{
        flex:1,     
    },
    NameText:{
        fontSize:30,
        fontWeight: '700',
        color:"#ffff"
    },
    boxnumber:{
        borderWidth:1,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        backgroundColor: "#808090"

    },
    textboxnumber:{
        color:"#ffff"
    },
    infomovie:{
        flexDirection:"row",
        justifyContent:'Flex-start'
    },
    textinfo:{
        color:"#ffff",
        paddingHorizontal: 20
    },
    genre:{
        flexDirection:"row",
        justifyContent:'Flex-start'
    },
    BoxIconPlus:{
       position:"absolute",
       right: 30,
       bottom: 10,    
    },
    boxcomment:{
        width:'100%',
        marginTop:20,
        height:"500",
        backgroundColor:'#252525',
        paddingHorizontal:20
    },
    HeadingTextComment:{
        color:'red',
        fontSize:20
    
    },
    AddComment:{
        marginTop:10
    },
    AddcmHeader:{
        flexDirection:'row',
        alignItem:"center",
    },
    AddcmUsText:{
        marginTop:10,
        textAlignVertical:'center',
        color: "#ffff",
        marginLeft:20
    },
    AddRate:{
        marginTop:15,
        flexDirection:'row'
    },
    RateText:{
        color:"#ffff",
        fontSize:15
    },
    RateValue:{
        borderWidth:1,
        width:50,
        borderColor:'#f2f2f2'
        
    },
    BoxContent:{
        borderRadius: 10,
        borderWidth:1,
        borderColor: "#ffff",
        marginVertical: 10

    },
    CommentText:{
        marginTop: 20,
        width: '100%',
        height: 40,
        maxHeight: 100,
        borderRadius: 20,
        marginBottom: 20,
        paddingLeft: 10,
        color: "#ffff"  
    },
    PlaneIcon:{
        position:"absolute",
        bottom:8,
        right:10,
    }


    

    


    

})


export default styles