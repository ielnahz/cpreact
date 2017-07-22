import axios from 'axios';
import qs from 'qs';
import utildata from './commen';

export function fetchHomeData(){
    return async (dispatch)=>{
        dispatch({type:'homestart'});
        let url = utildata.baseUrl + 'mobile/init';
        console.log(url);
        try{
            const json = (await axios.post(url, qs.stringify({}))).data;
            console.log(json);
            if(json.success) {
                dispatch({type:'homesuccess',data:json.user});
            }
        }catch(e){
            dispatch({type: 'homeerror'});
        }
    }
}