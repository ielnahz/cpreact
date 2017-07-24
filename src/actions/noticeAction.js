import axios from 'axios';
import qs from 'qs';
import utildata from './commen';

export function fetchNoticeData(){
    return async (dispatch)=>{
        dispatch({type:'noticestart'});
        let url = utildata.baseUrl + 'mobile/lottery-history-group';
        console.log(url);
        try{
            const json = (await axios.post(url, qs.stringify({}))).data;
            console.log(json);
            if(json.success) {
                dispatch({type:'noticesuccess',data:json.result});
            }
        }catch(e){
            dispatch({type: 'noticeerror'});
        }
    }
}