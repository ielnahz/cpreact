import axios from 'axios';
import qs from 'qs';
import utildata from './commen';

export function fetchLoginData(username, pwd){
    return async (dispatch)=>{
        console.log('in async dispatch');
        dispatch({type:'loginstart'});
        let url = utildata.baseUrl + 'mobile/login';
        console.log(url);
            const json = (await axios.post(url, qs.stringify({username: username, password: pwd}))).data;
            console.log(json);
            dispatch({type:'loginsuccess',data:json});
    }
}