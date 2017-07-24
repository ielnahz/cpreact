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
            let topLottery, lottery = [];
            for(let key in json.game.lottery) {
                lottery.push(json.game.lottery[key]);
            }
            topLottery = lottery[0];
            if(json.success) {
                dispatch({type:'homesuccess', data: json, lottery:lottery, lotteryJson:json.game.lottery, userinfo: json.user});
            }
        }catch(e){
            dispatch({type: 'homeerror'});
        }
    }
}