import { routerReducer as routing } from 'react-router-redux'
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import betReducer from './betReducer';
import recordReducer from './recordReducer';
import noticeReducer from './noticeReducer';
import loginReducer from './loginReducer';

var def = {
    loginflag: true
};

function indexReducer(state=def,action){
    switch (action.type){
        case 'nologin':
            return {...state, loginflag: action.data || false};
    }
    return state;
}

const rootReducer = combineReducers({
    indexReducer,
    homeReducer,
    betReducer,
    recordReducer,
    noticeReducer,
    loginReducer,
    routing
});

export default rootReducer;