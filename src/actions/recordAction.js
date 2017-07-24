import axios from 'axios';
import qs from 'qs';
import utildata from './commen';

export function fetchRecordData(){
    return async (dispatch)=>{
        dispatch({type:'recordstart'});
        let url = utildata.baseUrl + 'mobile/lottery-history';
        console.log(url);
        try{
            const json = (await axios.post(url, qs.stringify({}))).data;
            console.log(json);
            if(json.success) {
                dispatch({type:'recordsuccess',data:json.user});
            }
        }catch(e){
            dispatch({type: 'recorderror'});
        }
    }
}