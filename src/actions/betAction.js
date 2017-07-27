import axios from 'axios';
import qs from 'qs';
import utildata from './commen';

export function fetchBetData(l_id){
    return async (dispatch)=>{
        dispatch({type:'betstart'});
        let url = utildata.baseUrl + 'mobile/bet-info';
        console.log(url);
        try{
            const json = (await axios.post(url, qs.stringify({l_id: l_id}))).data;
            if(json.success) {
                dispatch({type:'betsuccess',data:json});
            }
        }catch(e){
            dispatch({type: 'beterror'});
            dispatch({type: 'nologin'});
        }
    }
}