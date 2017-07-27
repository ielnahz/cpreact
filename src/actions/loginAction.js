import axios from 'axios';
import qs from 'qs';
import utildata from './commen';

export function fetchLoginData(username, pwd){
    return async (dispatch)=>{
        dispatch({type:'loginstart'});
        let url = utildata.baseUrl + 'mobile/login';
        console.log(url);
        try{
            const json = (await axios.post(url, qs.stringify({username: username, password: pwd}))).data;
            if(json.success) {
                dispatch({type:'loginsuccess',data:json.user});
                dispatch({type:'nologin',data:true});
            } else {
                dispatch({type:'loginfail',data:json.msg});
            }
        }catch(e){
            dispatch({type: 'loginerror'});
        }
    }
}