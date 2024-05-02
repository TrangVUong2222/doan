import react,{Component} from 'react'
import axios from'axios'
import {storeData, getData, removeData, clearAllData} from "./AsyncStorage"

const Url = ""
export const PostSignUp = async (data) =>{
    try{
        res = await axios.post(`${Url}/api/SigUp`,data)
        
        return JSON.stringify(res.data)
        

    }
    catch(error){

        return error

    }
}

export const PostSignIn = async(data) =>{
    try{
        res = await axios.post(`${Url}/api/SigIn`, data)
        await storeData(token, res.data) 
        return JSON.stringify(res)
        
    }
    catch(error){
        return error
    }
}
 export const SignOut = async()=>{
    try{
        res = await axios.delete(`${Url}/api/SignOut`, data)
        retrun
    }
    catch(error){
        return error
    }
 }