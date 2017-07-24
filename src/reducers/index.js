import { routerReducer as routing } from 'react-router-redux'
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import recordReducer from './recordReducer';
import noticeReducer from './noticeReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    homeReducer,
    recordReducer,
    noticeReducer,
    loginReducer,
    routing
});

export default rootReducer;