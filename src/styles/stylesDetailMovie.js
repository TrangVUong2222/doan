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
        flex:1,
        // width:'100%',
        marginTop:20,
        height:"auto",
        backgroundColor:'#1b1b1b',
        paddingHorizontal:20,
        borderRadius:10
    },
    HeadingTextComment:{
        color:'white',
        fontSize:20,
        
        
    
    },
    AddCommentBox:{
        marginTop:10,
        paddingHorizontal: 10,
    },
    AddcmHeader:{
        flexDirection:'row',
        alignItem:"center",
    },
    AddcmUsText:{
        marginTop:10,
        textAlignVertical:'center',
        color: "#ffff",
        marginLeft:20,
        fontWeight:"500",
        opacity: 0.7,
    },
    AddRate:{
        marginTop:10,
        flexDirection:'row',
        opacity: 0.7,
        
    },
    RateText:{
        color:"#ffff",
        fontSize:15
    },
    RateValue:{
        borderWidth:1,
        height:20,
        width:50,
        borderColor:'#f2f2f2'
        
    },

    BoxContent:{
        borderRadius: 5,
        borderWidth:1,
        borderColor: "#ffff",
        marginVertical: 10,

    },
    CommentText:{
        marginTop: 20,
        width: '100%',
        height: 30,
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
    },
    ItemRightSub:{
        flexDirection:'row',
        marginLeft:10,
        height:'auto'

    },
    ItemRight:{
        flexDirection:'column'
    },
    ItemInfor:{
        flexDirection:'row',
        marginVertical: 10,
    },
    textComment:{
        fontSize:15,
        color:"#ffff",
        opacity: 0.7
    },
    CommentItem:{
        paddingHorizontal: 10,
        width:'100%',
        borderRadius: 5,
        height:100,
        marginVertical: 5,
        backgroundColor: "#3E3939"

    },
    UserNameListCmt:{
        color: "#ffff",
        opacity: 0.7,
        fontSize: 15,
        fontWeight:"500",
        marginBottom: 5,


    },
    ItemCommentContent:{
        height: "auto",
        paddingHorizontal: 5
    },
    UserRated:{
        fontSize: 15,
        color:"orange",
        marginRight: 5,
    },
    bodyunder:{
        width:"100%",
        height:90,
        justifyContent:'center',
        alignItems:'center'
    },
    CommentList:{
        flex:1
    },
    boxclick:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:10
    },
    textdanhgia:{
        color:'white',
        fontSize:18
        
    },
    rate:{
        marginLeft:15
    }




    

    


    

})


export default styles