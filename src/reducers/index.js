import { routerReducer as routing } from 'react-router-redux'
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
    homeReducer,
    routing
});

export default rootReducer;