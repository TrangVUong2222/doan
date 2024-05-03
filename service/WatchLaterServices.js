import react, {component} from 'react'
import axios from 'axios'

const Url = "localhostport500/api/WatchLater/"

const GetListWatchLater = async ()=>{
    try{
        res = await axios.get(`${Url}/GetListWatchLater`)
        return JSON.stringify(res)
    }
    catch(error){
        return error
    }}
