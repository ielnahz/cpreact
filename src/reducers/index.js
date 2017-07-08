import { routerReducer as routing } from 'react-router-redux'
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    homeReducer,
    loginReducer,
    routing
});

export default rootReducer;