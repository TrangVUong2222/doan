import React,{Component} from "react";
import axios from "axios";

const Url = "";

export const GetData= async ()=>{
    try{
        res = await axios.get(`${Url}/api/GetdataHome`)
        return JSON.stringify(res)

    }
    catch(error){
        return error
    }

}
export const GetDataSlide = async()=>{
    try{
        res = await axios.get(`${Url}/api/GetdataSlideHome`)
        return JSON.stringify(res)

    }
    catch(error){
        return error
    }
}